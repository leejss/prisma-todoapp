/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "cold-black": "#201f1f",
        "warm-dark": "#373535",
        "light-dark": "#37353580",
        "neon-green": "#239454",
      },
    },
  },
  plugins: [],
};
