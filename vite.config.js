import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  varients: {
    extend: {
      display: ["focus-group"],
      colors: {
        "oxford-blue": "#0A2342",
        teal: "#087E8B",
        "tea-green": "#C7FFDA",
      },
    },
  },
});
