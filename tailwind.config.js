/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "dark-900": "hsl(0, 1%, 12%)",
        "warm-dark": "hsl(0, 2%, 21%)",
        "dark-800": "hsl(1, 0%, 20%)",
        "light-dark": "hsla(0, 2%, 21%, 0.5)",
        "neon-green": "hsl(160, 63%, 35%)",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s",
      },
    },
  },
  plugins: [],
};
