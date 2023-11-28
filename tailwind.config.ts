import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      manrope: ["var(--font-manrope)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#edf3ff",
          100: "#deeaff",
          200: "#c3d7ff",
          300: "#9ebcff",
          400: "#7896ff",
          500: "#5870fc",
          600: "#4450f2",
          700: "#2d36d5",
          800: "#2730ac",
          900: "#283187",
          950: "#171a4f",
        },
        muted: "#494949",
        label: "#605F5F",
        danger: "#FF543E",
        sidebar: "#F9FCFF",
      },
      boxShadow: {
        button: "-6px 6px 11px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
