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
    // We use the Alfa LeetCode API because LeetCode's direct GraphQL API uses Cloudflare
    // which outright blocks Vercel Serverless IPs (returning 403 Forbidden).
    // To prevent hitting Alfa's strict 429 rate limit, we heavily cache the response 
    // at the Vercel Edge network using s-maxage.
    const [profileRes, calendarRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}`),
      fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/calendar`)
    ]);

    if (!profileRes.ok || !calendarRes.ok) {
      throw new Error(`Failed to fetch from Alfa API: Profile ${profileRes.status}, Calendar ${calendarRes.status}`);
    }

    const [profileData, calendarData] = await Promise.all([
      profileRes.json(),
      calendarRes.json()
    ]);

    if (profileData.errors || calendarData.errors) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Alfa API formats the calendar as a stringified JSON object
    let parsedCalendar = {};
    if (calendarData.submissionCalendar) {
      try {
        parsedCalendar = typeof calendarData.submissionCalendar === 'string' 
          ? JSON.parse(calendarData.submissionCalendar) 
          : calendarData.submissionCalendar;
      } catch (e) {
        console.error('Failed to parse calendar data', e);
      }
    }

    const responseData = {
      success: true,
      rank: profileData.ranking || 0,
      totalSolved: profileData.totalSolved || 0,
      easySolved: profileData.easySolved || 0,
      mediumSolved: profileData.mediumSolved || 0,
      hardSolved: profileData.hardSolved || 0,
      streak: profileData.streak || 0, // Note: Alfa might not provide exact streak natively, we fallback to 0 or derive it if available
      totalActiveDays: profileData.totalActiveDays || 0, // Fallback if missing
      calendar: parsedCalendar
    };

    // Save to node-cache (local container cache)
    cache.set(cacheKey, responseData);

    // Save to Vercel Edge Cache (Global CDN) for 1 hour
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json(responseData);

  } catch (error) {
    console.error('LeetCode fetch error:', error);
    return res.status(500).json({ error: error.message, stack: error.stack });
  }
}
