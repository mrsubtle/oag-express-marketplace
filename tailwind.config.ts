import path from "path";
import type { Config } from "tailwindcss";

// get the path of the dependency "@medusajs/ui"
const medusaUI = path.join(
  path.dirname(require.resolve("@medusajs/ui")),
  "**/*.{js,jsx,ts,tsx}",
);

export default {
  presets: [require("@medusajs/ui-preset")],
  content: ["./src/**/*.{js,ts,jsx,tsx}", medusaUI],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        manrope: ["ManropeVariable", "Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
