import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'pearl-white': '#F5F5F5', // Light off-white color
        'vintage-yellow': '#FFF8DC', // Cornsilk as a vintage yellow example
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
