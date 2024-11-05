import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
    },
    borderRadius: {
      DEFAULT: '8px',
      none: '0',
      sm: '4px',
      lg: '12px',
      full: '9999px',
    },
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