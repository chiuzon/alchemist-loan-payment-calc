/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('/static/bg.jpg')",
      },
      boxShadow: {
        highlight: "inset 0 1px 0 0 hsla(0,0%,100%,.05)",
        "highlight-1": "inset 0 2px 0 0 hsla(0,0%,100%,.05)",
      },
      dropShadow: {
        highlight: "inset 0 1px 0 0 hsla(0,0%,100%,.05)",
      },
    },
  },
  plugins: [],
};
