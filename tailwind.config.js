const DarkTheme = require("@xiler/theme").Themes.dark;

module.exports = {
  purge: {
    mode: "all",
    enabled: true,
    layers: ["base", "components", "utilities"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        top: "top",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    maxWidth: {
      "3/5": "60%",
      "4/5": "80%",
    },
    gridTemplateRows: {
      "page-layout": "1fr auto",
      "about-layout": "auto 1fr",
    },
    colors: DarkTheme,
  },
  variants: {
    extend: {},
  },
  plugins: ["tailwindcss", "autoprefixer"],
};
