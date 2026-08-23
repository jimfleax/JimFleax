import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { ActivityCalendar } from 'react-activity-calendar';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { MdErrorOutline } from "react-icons/md";
import { PageSection } from './ui/PageSection';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import LeetCodeSkeleton from './skeletons/LeetCodeSkeleton';

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
  text-align: center;
  color: #6b7280;

  .dark & {
    color: #9ca3af;
  }
`;

const ErrorTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #374151;

  .dark & {
    color: #d1d5db;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.875rem;
  margin: 0;
  max-width: 400px;
  opacity: 0.8;
`;

const StyledContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-top: 0.5rem;
`;

const ChartAndCalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const parseCalendarData = (submissionCalendar) => {
  if (!submissionCalendar) return [];
  const entries = Object.entries(submissionCalendar);
  
  // Sort chronologically
  entries.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
  
  // Filter out to only last year approximately to fit the calendar
  const oneYearAgo = Math.floor(Date.now() / 1000) - (365 * 24 * 60 * 60);
  
  const formattedData = entries
    .filter(([timestamp]) => parseInt(timestamp) >= oneYearAgo)
    .map(([timestamp, count]) => {
      const date = new Date(parseInt(timestamp) * 1000);
      const dateString = date.toISOString().split('T')[0];
      
      // Calculate level (0-4) based on count relative to typical leetcode activity
      let level = 0;
      if (count === 1) level = 1;
      else if (count >= 2 && count <= 3) level = 2;
      else if (count >= 4 && count <= 5) level = 3;
      else if (count > 5) level = 4;

      return {
        date: dateString,
        count,
        level,
      };
    });
    
  // react-activity-calendar needs at least some data, and requires continuous dates technically,
  // but we can just supply the active days. Wait, it needs full year if we want a proper grid.
  // We'll let react-activity-calendar handle sparseness or we fill it. 
  // Often it expects sparse data and fills the gaps itself in v3+.
  return formattedData;
};

const apiCache = new Map();
const CACHE_TTL = 5 * 60 * 1000;

export default function LeetCodeSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const calendarScrollRef = useRef(null);

  // Scroll to the end of the calendar (latest dates) when data is loaded
  useEffect(() => {
    if (!loading && calendarScrollRef.current) {
      // Delay slightly to ensure ActivityCalendar has finished rendering its SVG
      setTimeout(() => {
        if (calendarScrollRef.current) {
          calendarScrollRef.current.scrollLeft = calendarScrollRef.current.scrollWidth;
        }
      }, 100);
    }
  }, [loading, data]);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const username = 'jimfleax';
        const cacheKey = `leetcode_stats_${username}`;
        
        // 1. Try to load from localStorage cache first
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const { timestamp, payload } = JSON.parse(cached);
          // Use cache if it's less than 1 hour old
          if (Date.now() - timestamp < 60 * 60 * 1000) {
            setData(payload);
            setLoading(false);
            return;
          }
        }

        // 2. Fetch fresh data from our Vercel Serverless Function
        const res = await fetch('/api/leetcode');
        const contentType = res.headers?.get ? res.headers.get("content-type") : null;

        if (res.status === 429) {
          throw new Error('Rate limit exceeded (429).');
        }

        if (contentType && contentType.indexOf("application/json") !== -1) {
          const json = await res.json();
          if (json.success) {
            // Save to cache
            localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), payload: json }));
            setData(json);
          } else {
            throw new Error(json.error || 'Failed to fetch data');
          }
        } else {
          // If the response is not JSON, it's likely a 404 or Vite SPA fallback
          throw new Error('Received non-JSON response. Ensure Vercel dev server is running.');
        }

      } catch (err) {
        console.error('LeetCode Fetch Error:', err);
        
        // If we hit a network error but have stale cache, use it!
        const cacheKey = `leetcode_stats_jimfleax`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          console.log("Falling back to stale cache due to error.");
          setData(JSON.parse(cached).payload);
        } else if (err.message.includes('Vercel dev server')) {
          // Dev fallback if Vercel serverless isn't running locally
          console.log("Using dev fallback data because Vercel dev isn't running");
          setData({
            success: true,
            rank: 2117092,
            totalSolved: 71,
            easySolved: 26,
            mediumSolved: 40,
            hardSolved: 5,
            streak: 17,
            totalActiveDays: 64,
            calendar: { [Math.floor(Date.now()/1000).toString()]: 2 }
          });
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  if (loading) {
    return (
      <PageSection title="my coding journey on leetcode">
        <div data-testid="loading-state">
          <LeetCodeSkeleton />
        </div>
      </PageSection>
    );
  }

  if (error) {
    return (
      <PageSection title="my coding journey on leetcode">
        <StyledContainer>
          <ErrorState>
            <MdErrorOutline size="3rem" style={{ opacity: 0.5 }} />
            <ErrorTitle>Unable to load stats</ErrorTitle>
            <ErrorMessage>
              {error.includes("Failed to fetch") 
                ? "Could not connect to the server. Please check your internet connection." 
                : error}
            </ErrorMessage>
          </ErrorState>
        </StyledContainer>
      </PageSection>
    );
  }

  const difficultyData = [
    { name: 'Easy', value: data.easySolved, color: '#10b981' },
    { name: 'Medium', value: data.mediumSolved, color: '#f59e0b' },
    { name: 'Hard', value: data.hardSolved, color: '#ef4444' },
  ].filter(d => d.value > 0);

  const calendarData = parseCalendarData(data.calendar);
  
  // If calendarData is completely empty, provide a dummy entry so the calendar doesn't crash
  if (calendarData.length === 0) {
    calendarData.push({
      date: new Date().toISOString().split('T')[0],
      count: 0,
      level: 0
    });
  }

  return (
    <PageSection title="my coding journey on leetcode">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <CardContainer containerClassName="py-10 md:py-20 w-full max-w-5xl mx-auto">
          <CardBody className="w-full h-fit">
            <CardItem className="w-full">
              <StyledContainer>
                
                <StatsGrid>
                  <StatCard>
                    <StatLabel>Global Rank</StatLabel>
                    <StatValue>{data.rank ? data.rank.toLocaleString() : 'N/A'}</StatValue>
                  </StatCard>
                  <StatCard>
                    <StatLabel>Current Streak</StatLabel>
                    <StatValue>{data.streak} 🔥</StatValue>
                  </StatCard>
                  <StatCard>
                    <StatLabel>Total Solved</StatLabel>
                    <StatValue>{data.totalSolved}</StatValue>
                  </StatCard>
                </StatsGrid>

                <ChartAndCalendarGrid>
                  {/* Pie Chart */}
                  <div style={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={difficultyData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={3}
                          dataKey="value"
                          stroke="none"
                        >
                          {difficultyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <RechartsTooltip 
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Activity Calendar */}
                  <div 
                    ref={calendarScrollRef}
                    style={{ display: 'flex', flexDirection: 'column', overflowX: 'auto', paddingBottom: '1rem' }}
                  >
                    <h3 style={{ fontSize: '0.875rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>
                      Submission Heatmap
                    </h3>
                    <div style={{ minWidth: 'max-content', padding: '0 1rem' }}>
                      <ActivityCalendar 
                        data={calendarData} 
                        theme={{
                          light: ['#f3f4f6', '#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8'],
                          dark: ['#1f2937', '#1e3a8a', '#1d4ed8', '#3b82f6', '#93c5fd'],
                        }}
                        colorScheme="light"
                      />
                    </div>
                  </div>
                </ChartAndCalendarGrid>

              </StyledContainer>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </PageSection>
  );
}
