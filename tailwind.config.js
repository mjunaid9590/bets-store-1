/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5500",
        "primary-dark":"#ab3b03",
      },
    },
  },
  plugins: [],
};

