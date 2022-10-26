/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    screens: {
      sm: { min: "640px", max: "780px" },
      md: { min: "781px", max: "1023px" },
      lg: { min: "1024px", max: "1280px" },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
