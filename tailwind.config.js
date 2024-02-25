/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        swoopIn: "swoopIn 1s ease",
        result: "result 1s ease",
      },
      keyframes: {
        swoopIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "85%": { transform: "translateX(-10%)", opacity: "1" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        result: {
          "0%": { transform: "translateY(100%) scale(.1)", opacity: "0" },
          "80%": { transform: "translateY(-10%) scale(1.2)", opacity: "1" },
          "100%": { transform: "translateY(0%) scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
