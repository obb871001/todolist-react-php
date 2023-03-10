/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        myself: "200px",
      },
      minWidth: {
        unset: "unset",
      },
    },
  },
  plugins: [],
};
