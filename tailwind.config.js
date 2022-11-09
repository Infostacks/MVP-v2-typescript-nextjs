module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wider: ".05em",
      widest: ".25em",
    },
    colors: {
      primary: "#5ea5da", // light blue
      secondary: "#5561ac", // dark blue
      secondaryLight: "#a0abf0", // dark blue
      txtColor: "#f2f8f7", // white/ slate
      bgColor: "#121224",
      redColor: "#EF2D56", // Red Crayola
      emerald: "#0CCE6B", // Emerald
      mazeCrayola: "#E2C044",     // Maze Crayola
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
