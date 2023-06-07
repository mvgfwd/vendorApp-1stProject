/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors:{
        "ven-blue": {
          50: "#D6E6FF",
          100: "#ADCDFF",
          200: "#5C9AFF",
          300: "#0565FF",
          400: "#0044B3",
          500: "#002561",
          600: "#001D4D",
          700: "#001638",
          800: "#001029",
          900: "#000814",
          950: "#00040A"
        },
        "ven-green": {
          50: "#EBF6E9",
          100: "#D3ECCF",
          200: "#A6DA9F",
          300: "#7AC770",
          400: "#51B044",
          500: "#3B8132",
          600: "#2F6728",
          700: "#234D1E",
          800: "#183314",
          900: "#0C1A0A",
          950: "#070F06"
        },
        "ven-turq": {
          50: "#E2F8FD",
          100: "#C6F0FB",
          200: "#8DE2F7",
          300: "#4FD2F3",
          400: "#15C3EF",
          500: "#0D98BA",
          600: "#0A7894",
          700: "#08596E",
          800: "#053E4C",
          900: "#031F26",
          950: "#011013"
        }
      }
    },
  },
  plugins: [],
}

