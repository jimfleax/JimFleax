import MainPage from "./components/MainPage";
import { LazyMotion, domMax } from "motion/react";

function App() {
  return (
    <LazyMotion features={domMax}>
      <MainPage />
    </LazyMotion>
  )
}

export default App
