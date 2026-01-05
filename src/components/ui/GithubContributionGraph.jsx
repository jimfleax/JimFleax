import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

function GithubContributionGraph() {
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(4);
  const [fontSize, setFontSize] = useState(14);
  const [daysToShow, setDaysToShow] = useState(365);

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
        setBlockSize(12);
        setBlockMargin(4);
        setFontSize(14);
        setDaysToShow(365); // Desktop: Full year standard
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transformData = (data) => {
    if (daysToShow >= 365) return data;
    return data.slice(data.length - daysToShow);
  };

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <GitHubCalendar
        username="jimfleax"
        blockSize={blockSize}
        blockMargin={blockMargin}
        fontSize={fontSize}
        transformData={transformData}
        hideColorLegend={daysToShow < 365}
        hideMonthLabels={daysToShow < 100}
      />
    </div>
  );
}
export default GithubContributionGraph;
