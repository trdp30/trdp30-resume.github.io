import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "trdp30-resume.github.io", // Replace <REPO_NAME> with your repository name
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  // ...other configurations
});
