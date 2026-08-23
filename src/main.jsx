/**
 * @file main.jsx
 * @description Application entry point that mounts the root React component to the DOM and registers the PWA service worker.
 * @architecture Bridges the static HTML shell (index.html) with the React component tree and initiates offline/PWA capabilities.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

serviceWorkerRegistration.register();
