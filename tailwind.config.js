// tailwind.config.js
module.exports = {
  darkMode: "class", // 🔹 enable class-based dark mode
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // added jsx/ts support if needed
  theme: {
    fontFamily: {
      primary: "Poppins",
      secondary: "Inter", // complements Poppins
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112", // default dark text
        grey: "#484B4B",
        accent: "#EEF7F9",
        darkbg: "#1c1c1e", // 🔹 dark theme background
        lightbg: "#f5f7fa", // 🔹 light theme background
      },
    },
  },
  plugins: [],
};
