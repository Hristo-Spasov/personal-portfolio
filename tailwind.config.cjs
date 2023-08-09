/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primery: "#01092E",
        secondary: "#011749",
        accent: "#6948B9",
        action: "#019C9E",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://res.cloudinary.com/dh3yknk5o/image/upload/v1691589543/Hristo%20site/herobg_n23uxh.jpg')",
      },
    },
  },
  plugins: [],
};
