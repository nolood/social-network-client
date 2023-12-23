/** @type {import('tailwindcss').Config} */
import CatpuccinTheme from "@catppuccin/tailwindcss";
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        minimalistic: "url('../../../public/bg-temp.jpg')",
      },
    },
  },
  plugins: [CatpuccinTheme({ defaultFlavour: "mocha", prefix: "ctp" })],
};
