/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      s: "24px",
    },
    extend: {
      colors: {
        pembe: "#EA2678",
        gri: "#777777",
        pembemsi: "#E92577",
        grimsi: "#525252",
        hex: "#D9D9D9",
        whitelightest: "#F4F4F4",
      },
      fontFamily: {
        Inter: ["inter", "sans-serif"],
        PlayfairDisplay: ["playfair display"],
      },
    },
  },
  plugins: [],
};
