import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflixclone/", // This sets the base URL for your application, useful for GitHub Pages or subdirectory deployments
});
