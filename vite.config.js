import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["motion", "lucide-react", "@tabler/icons-react", "styled-components", "clsx", "tailwind-merge"],
          charts: ["recharts", "react-activity-calendar"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        keep_fargs: false,
        passes: 3,
      },
      mangle: {
        properties: false,
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    sourcemap: false,
  },
});
