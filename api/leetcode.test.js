import { describe, it, expect, vi, beforeEach } from 'vitest';
import httpMocks from 'node-mocks-http';
import handler from './leetcode.js';

// We mock node-cache to ensure clean state per test
vi.mock('node-cache', () => {
  return {
    default: class NodeCache {
      get() { return undefined; }
      set() { return true; }
    }
  };
});

describe('LeetCode API Serverless Function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock the global fetch
    global.fetch = vi.fn();
  });

  it('should return CORS headers on OPTIONS request', async () => {
    const req = httpMocks.createRequest({
      method: 'OPTIONS',
      url: '/api/leetcode'
    });
    const res = httpMocks.createResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeader('Access-Control-Allow-Origin')).toBe('*');
  });

  it('should fetch and format LeetCode data correctly', async () => {
    // Mock successful LeetCode API responses
    const mockProfileResponse = {
      data: {
        matchedUser: {
          profile: { ranking: 12345 },
          submitStatsGlobal: {
            acSubmissionNum: [
              { difficulty: 'All', count: 100 },
              { difficulty: 'Easy', count: 50 },
              { difficulty: 'Medium', count: 40 },
              { difficulty: 'Hard', count: 10 }
            ]
          }
        }
      }
    };

    const mockCalendarResponse = {
      data: {
        matchedUser: {
          userCalendar: {
            streak: 7,
            totalActiveDays: 30,
            submissionCalendar: '{"1672531200": 1, "1672617600": 2}'
          }
        }
      }
    };

    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockProfileResponse
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockCalendarResponse
      });

    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/leetcode'
    });
    
    const res = httpMocks.createResponse();
    
    await handler(req, res);
    
    expect(res.statusCode).toBe(200);
    
    const responseData = res._getJSONData();
    expect(responseData).toEqual({
      success: true,
      rank: 12345,
      totalSolved: 100,
      easySolved: 50,
      mediumSolved: 40,
      hardSolved: 10,
      streak: 7,
      totalActiveDays: 30,
      calendar: {
        "1672531200": 1,
        "1672617600": 2
      }
    });
  });

  it('should return 404 if user not found', async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ data: { matchedUser: null } })
    });

    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/leetcode'
    });
    const res = httpMocks.createResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(404);
    expect(res._getJSONData()).toEqual({ error: 'User not found' });
  });

  it('should return 500 on fetch failure', async () => {
    global.fetch.mockRejectedValue(new Error('Network error'));

    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/leetcode'
    });
    const res = httpMocks.createResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._getJSONData()).toEqual({ error: 'Internal Server Error' });
  });
});
