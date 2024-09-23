/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(5rem, 5rem))",
      },
      colors: {
        primary: "#0d3180",
        secondary: "#05297a",
        content: "#f1f5f8",
      },
      boxShadow: {
        app: "0px -35px 1px -20px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
