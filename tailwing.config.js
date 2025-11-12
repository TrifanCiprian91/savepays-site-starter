// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyblue: "#4DA3FF",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
