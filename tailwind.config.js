/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f0ff", // warna utama
        background: "#0f0f0f", // kalau kamu pakai dark bg
        light: "#e5e5e5", // warna teks default
        muted: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
