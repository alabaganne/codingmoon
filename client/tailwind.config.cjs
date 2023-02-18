/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-400": "#111212",
        "dark-300": "#161818",
        "dark-200": "#1C1E1F",
        "dark-100": "#28272A",
        "dark-50": "#28272A",
      },
    },
  },
  plugins: [],
};
