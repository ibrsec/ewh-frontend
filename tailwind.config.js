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
        "dark-red": "#2d1f55",
        red: "#4521ad",
        "red-orange": "#8571de",
        orange: "#534186",
        "orange-mid": "#423b7a", //choosed nav item bg
        "light-orange": "#a390d4",
        yellow: "#fbc217",
        "light-yellow": "#ebcf7c",
        "main-bg": "#fff",
        // "dark-red": "#452016",
        // red: "#95341A",
        // "red-orange": "#C45828",
        // orange: "#B06A12",
        // "orange-mid": "#814916", //choosed nav item bg
        // "light-orange": "#D0961A",
        // yellow: "#D4C04D",
        // "light-yellow": "#D1CDA0",
        // "main-bg": "#fff",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        grow: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        "updown-wiggle-animate":{
          "0%": { transform: "translateY(0px)rotate(-4deg)" },
          "10%": { transform: "translateY(50px)rotate(4deg)" },
          "20%": { transform: "translateY(100px)rotate(-4deg)" },
          "30%": { transform: "translateY(150px)rotate(4deg)" },
          "40%": { transform: "translateY(200px)rotate(-4deg)" },
          "50%": { transform: "translateY(250px)rotate(4deg)" },
          "60%": { transform: "translateY(200px)rotate(-4deg)" },
          "70%": { transform: "translateY(150px)rotate(4deg)" },
          "80%": { transform: "translateY(100px)rotate(-4deg)" },
          "90%": { transform: "translateY(50px)rotate(4deg)" },
          "100%": { transform: "translateY(0px)rotate(-4deg)" },
        }
      },
      animation: {
        wiggle: "wiggle 6s ease-in-out infinite",
        grow: 'grow 1s ease-in-out', 
        'updown-wiggle-animate': 'updown-wiggle-animate 15s linear infinite',
      },
      screens: {
        xs: "450px", // new screenbreak point.
      },
    },
  },
  plugins: [flowbite.plugin()],
};
