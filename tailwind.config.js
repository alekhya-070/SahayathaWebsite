/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: 'class', // ✅ Enable dark mode with class strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F8FC",    // Light background
        primary: "#1A1A1A",       // Text in light
        accent: "#C9FF00",        // Neon highlight
        violet: "#8C5FFF",        // Optional secondary
        softpurple: "#C9C2FF",    // For hover etc
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        smooth: "0 10px 30px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
