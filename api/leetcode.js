import NodeCache from 'node-cache';

// Cache for 1 hour (3600 seconds)
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });
// Rate limit cache: allows 10 requests per minute per IP
const rateLimitCache = new NodeCache({ stdTTL: 60, checkperiod: 60 });

const LEETCODE_USERNAME = process.env.VITE_LEETCODE_USERNAME || 'jimfleax';

export default async function handler(req, res) {
  // --- 1. CORS Headers ---
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // --- 2. Rate Limiting ---
  // Vercel forwards the real IP in the x-real-ip or x-forwarded-for header
  const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'unknown';
  
  const currentRequests = rateLimitCache.get(ip) || 0;
  if (currentRequests >= 10) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  rateLimitCache.set(ip, currentRequests + 1);

  // --- 3. Caching ---
  const cacheKey = `leetcode-stats-${LEETCODE_USERNAME}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json(cachedData);
  }

  // --- 4. Fetching Data ---
  try {
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    };

    // Query 1: Profile & Stats
    const profileQuery = {
      operationName: 'userPublicProfile',
      variables: { username: LEETCODE_USERNAME },
      query: `
        query userPublicProfile($username: String!) {
          matchedUser(username: $username) {
            profile {
              ranking
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `
    };

    // Query 2: Calendar & Streak
    const calendarQuery = {
      operationName: 'userProfileCalendar',
      variables: { username: LEETCODE_USERNAME },
      query: `
        query userProfileCalendar($username: String!) {
          matchedUser(username: $username) {
            userCalendar(year: null) {
              streak
              totalActiveDays
              submissionCalendar
            }
          }
        }
      `
    };

    const [profileRes, calendarRes] = await Promise.all([
      fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify(profileQuery)
      }),
      fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify(calendarQuery)
      })
    ]);

    if (!profileRes.ok || !calendarRes.ok) {
      throw new Error('Failed to fetch from LeetCode');
    }

    const [profileData, calendarData] = await Promise.all([
      profileRes.json(),
      calendarRes.json()
    ]);

    const user = profileData.data?.matchedUser;
    const calendar = calendarData.data?.matchedUser?.userCalendar;

    if (!user || !calendar) {
      return res.status(404).json({ error: 'User not found' });
    }

    const stats = user.submitStatsGlobal.acSubmissionNum;
    
    // Find counts by difficulty
    const all = stats.find(s => s.difficulty === 'All')?.count || 0;
    const easy = stats.find(s => s.difficulty === 'Easy')?.count || 0;
    const medium = stats.find(s => s.difficulty === 'Medium')?.count || 0;
    const hard = stats.find(s => s.difficulty === 'Hard')?.count || 0;

    const responseData = {
      success: true,
      rank: user.profile.ranking,
      totalSolved: all,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
      streak: calendar.streak,
      totalActiveDays: calendar.totalActiveDays,
      calendar: JSON.parse(calendar.submissionCalendar)
    };

    // Save to cache
    cache.set(cacheKey, responseData);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json(responseData);

  } catch (error) {
    console.error('LeetCode fetch error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
