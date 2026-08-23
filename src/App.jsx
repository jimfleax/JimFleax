/**
 * @file App.jsx
 * @description Root application component that sets up performance tracking, motion animation context, and renders the main page.
 * @architecture Serves as the top-level React component wrapping the UI in LazyMotion for bundle optimization and SpeedInsights for analytics.
 */

import MainPage from "./components/MainPage";
import { LazyMotion, domMax } from "motion/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

/**
 * @desc    Root React component configuring application-wide animation features and analytics before rendering the main page.
 * @returns {JSX.Element} The rendered root React application tree.
 */
function App() {
  return (
    <>
      <SpeedInsights />
      <LazyMotion features={domMax}>
        <MainPage />
      </LazyMotion>
    </>
  );
}

export default App;
