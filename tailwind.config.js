// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#e76f51",
        background: "#0f0f0f",
        light: "#e5e5e5",
        muted: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
