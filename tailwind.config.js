/** @type {import('tailwindcss').Config} */
import CatpuccinTheme from "@catppuccin/tailwindcss";
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [CatpuccinTheme({ defaultFlavour: "mocha", prefix: "ctp" })],
};
