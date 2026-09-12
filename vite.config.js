import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ["lucide-react"],
  },
  server: {
    watch: {
      ignored: ["**/ignored-folder/**", "**/*.log"],
    },
  },
  optimizeDeps: {
    include: ["react-fast-marquee"],
  },
  ssr: {
    noExternal: ["react-fast-marquee"],
  },
});
