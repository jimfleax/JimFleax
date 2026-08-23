import { ActivityCalendar } from "react-activity-calendar";
import { useState, useEffect } from "react";

const apiCache = new Map();
const CACHE_TTL = 5 * 60 * 1000;

function GithubContributionGraph() {
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(4);
  const [fontSize, setFontSize] = useState(14);
  const [daysToShow, setDaysToShow] = useState(365);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBlockSize(9);
        setBlockMargin(2);
        setFontSize(10);
        setDaysToShow(100); // Mobile: ~3 months
      } else if (window.innerWidth < 1024) {
        setBlockSize(9);
        setBlockMargin(2);
        setFontSize(12);
        setDaysToShow(365); // Tablet: Full year with compact blocks (~583px width)
      } else {
        setBlockSize(14);
        setBlockMargin(5);
        setFontSize(14);
        setDaysToShow(365); // Desktop: Full year standard
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cacheKey = "github_contributions";
        if (apiCache.has(cacheKey)) {
          const { timestamp, data: cachedData } = apiCache.get(cacheKey);
          if (Date.now() - timestamp < CACHE_TTL) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }

        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        apiCache.set(cacheKey, { timestamp: Date.now(), data: json });
        setData(json);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err);
        setError("Failed to load GitHub contributions");
        // Fallback or retry logic could go here
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const transformData = (data) => {
    if (daysToShow >= 365) return data;
    return data.slice(data.length - daysToShow);
  };

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
        {error}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ActivityCalendar
        data={transformData(data || [])}
        loading={loading}
        blockSize={blockSize}
        blockMargin={blockMargin}
        fontSize={fontSize}
        showColorLegend={false}
        showMonthLabels={daysToShow >= 100}
        showTotalCount={false}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
      />
    </div>
  );
}

export default GithubContributionGraph;
