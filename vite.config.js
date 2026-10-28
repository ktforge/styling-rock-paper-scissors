import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // github pages puts the site under /styling-rock-paper-scissors/, so assets need this prefix
  base: "/styling-rock-paper-scissors/",
});
