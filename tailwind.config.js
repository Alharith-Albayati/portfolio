/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./DashboardComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./weatherComps/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        button: "0px 0px 30px 0px",
        blured: "0px 0px 30px 4px",
      },
      width: {
        begginer: "25%",
        Intermediate: "50%",
        Good: "75%",
        Advanced: "100%",
      },
      keyframes: {
        bounceLeft: {
          "0%, 100%": {
            transform: "translateX(-25%)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
        bounceRight: {
          "0%, 100%": { transform: "translateX(25%)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        bounceLeft: "bounceLeft 1s ease-in infinite ",
        bounceRight: "bounceRight 1s ease-in infinite",
      },
      fontFamily: {
        roboto: ["Roboto"],
        Montserrat: ["Montserrat"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
