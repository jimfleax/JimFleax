import MainPage from "./components/MainPage";
import { LazyMotion, domMax } from "motion/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
