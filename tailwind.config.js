import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-red": "#452016",
        red: "#95341A",
        "red-orange": "#C45828",
        orange: "#B06A12",
        "orange-mid": "#814916", //choosed nav item bg
        "light-orange": "#D0961A",
        yellow: "#D4C04D",
        "light-yellow": "#D1CDA0",
        "main-bg": "#fff",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
