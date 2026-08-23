/**
 * @vitest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

// Mock IntersectionObserver for framer-motion in jsdom
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
import LeetCodeSection from './LeetCodeSection';

// Mock recharts to avoid rendering actual SVG/Canvas which can cause issues in jsdom
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }) => <div>{children}</div>,
  PieChart: ({ children }) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ children }) => <div data-testid="pie">{children}</div>,
  Cell: () => <div data-testid="cell" />,
  Tooltip: () => <div data-testid="tooltip" />,
  Legend: () => <div data-testid="legend" />,
}));

// Mock react-activity-calendar
vi.mock('react-activity-calendar', () => {
  return {
    ActivityCalendar: () => <div data-testid="activity-calendar">Activity Calendar</div>
  };
});

describe('LeetCodeSection', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    localStorage.clear();
  });

  it('renders a loading state initially and then the stats', async () => {
    const mockLeetCodeData = {
      success: true,
      rank: 1337,
      totalSolved: 100,
      easySolved: 50,
      mediumSolved: 40,
      hardSolved: 10,
      streak: 42,
      totalActiveDays: 100,
      calendar: { "1690000000": 2 }
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve(mockLeetCodeData)
      })
    );

    render(<LeetCodeSection />);

    // Check loading state
    expect(screen.getByTestId('loading-state')).toBeInTheDocument();

    // Wait for the data to load and components to render
    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    // Verify stats are displayed
    expect(screen.getByText('1,337')).toBeInTheDocument(); // Rank
    expect(screen.getByText('42 🔥')).toBeInTheDocument(); // Streak
    expect(screen.getByText('100')).toBeInTheDocument(); // Total Solved

    // Verify charts are rendered
    expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
    expect(screen.getByTestId('activity-calendar')).toBeInTheDocument();
  });

  it('handles error state if fetch fails', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network error')));

    render(<LeetCodeSection />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
