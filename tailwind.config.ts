import path from "path";
import type { Config } from "tailwindcss";

// get the path of the dependency "@medusajs/ui"
const medusaUI = path.join(
  path.dirname(require.resolve("@medusajs/ui")),
  "**/*.{js,jsx,ts,tsx}",
);

export default {
  //presets: [require("@medusajs/ui-preset")],
  content: ["./src/**/*.{js,ts,jsx,tsx}", medusaUI],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        manrope: ["ManropeVariable", "Manrope", "sans-serif"],
        inter: ["InterVariable", "Inter", "sans-serif"],
        sans: ["InterVariable", "Inter", "sans-serif"], // Set Inter as default sans font
      },
    },
  },
  plugins: [],
} satisfies Config;
