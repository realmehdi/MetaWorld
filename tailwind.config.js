/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Vazirmatn",
        secondary: "Nunito",
      },
      colors: {
        primary: "#44403c",
        darkBg: "#171717",
        headerBgColor: "#D1D3D5",
        productBgColor: "#A1A3A7",
        productLabelColor: "#64646B",
        colorGrad1: "#676E92",
        colorGrad2: "#9C4F75",
        subColor3: "#53243F",
      },
      gridTemplateColumns: {
        two: "1fr 9rem",
      },
    },
  },
  plugins: [],
};
