import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
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
