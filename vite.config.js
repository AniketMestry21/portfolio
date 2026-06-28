import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Basic Vite + React setup. No TypeScript, no extra tooling.
export default defineConfig({
  plugins: [react()],
});
