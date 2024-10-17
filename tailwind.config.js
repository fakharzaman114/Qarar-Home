/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Make sure this includes all paths to your HTML files
    "./src/**/*.{js,jsx,ts,tsx}", // Include paths for any JS/TS files if needed
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#45B39B', // Custom color
      },
    },
  },
  plugins: [],
}
