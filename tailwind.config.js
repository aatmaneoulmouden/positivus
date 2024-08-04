/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "100px",
      }
    },
    fontFamily: {
      base: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        green: "#B9FF66",
        dark: "#191A23",
        gray: "#F3F3F3",
      }
    },
  },
  plugins: [],
}

