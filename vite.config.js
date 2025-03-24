import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config(); 

export default defineConfig(async () => {
  const tailwindcss = (await import("tailwindcss")).default;
  const autoprefixer = (await import("autoprefixer")).default;

  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    alias: {
      '@': '/src', // Allows using '@' instead of relative imports
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist', // Default for Vercel
    },
  };
});
