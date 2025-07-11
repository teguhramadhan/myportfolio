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
        inter: ["var(--font-raleway)"],
        qurova: ["Qurova", "sans-serif"],
      },
      colors: {
        primary: "#F09410",
        background: "#1B2062",
        light: "#e5e5e5",
        muted: "#a3a3a3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
