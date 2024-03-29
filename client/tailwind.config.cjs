/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-standard": "#393939",
        "dark-6": "#363636",
        "dark-5": "#111212",
        "dark-4": "#161818",
        "dark-3": "#1C1E1F",
        "dark-2": "#28272A",
        "dark-1": "#28272A",
      },
      boxShadow: {
        login: "3px 3px #237BFF",
      },
    },
  },
  plugins: [],
};
