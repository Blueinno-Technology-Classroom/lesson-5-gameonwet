module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["retro", "lemonade", "valentine"],
  },
  plugins: [require("daisyui")],
};
