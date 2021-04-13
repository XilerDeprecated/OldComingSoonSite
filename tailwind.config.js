const DarkTheme = require("@xiler/theme").Themes.dark;

module.exports = {
  // purge: {
  //   mode: "all",
  //   enabled: true,
  //   layers: ["base", "components", "utilities"],
  //   content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  //   options: {
  //     keyframes: true,
  //     fontFace: true
  //   },
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    maxWidth: {
      "80per": "80%",
    },
    colors: DarkTheme,
  },
  variants: {
    extend: {},
  },
  plugins: ["tailwindcss", "autoprefixer"],
};
