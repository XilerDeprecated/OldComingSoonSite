const DarkTheme = require("@xiler/theme").Themes.dark;

module.exports = {
  // purge: {
  //   mode: "all",
  //   enabled: true,
  //   preserveHtmlElements: false,
  //   layers: ["base", "components", "utilities"],
  //   content: [
  //     "./pages/**/*.{js,ts,jsx,tsx}",
  //     "./components/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   options: {
  //     keyframes: true,
  //     fontFace: true,
  //   },
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: DarkTheme,
  },
  variants: {
    extend: {},
  },
  plugins: ["tailwindcss", "autoprefixer"],
};
