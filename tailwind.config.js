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
        lg: "60px",
        xl: "100px",
      }
    },
    fontFamily: {
      base: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      boxShadow: {
        'base': '0px 6px 0px 0px #191A23',
      },
      colors: {
        green: "#B9FF66",
        dark: "#191A23",
        gray: "#F3F3F3",
      }
    },
  },
  plugins: [],
}

