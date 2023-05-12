/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          light: "#F11D84",
          DEFAULT: "#EC008C"
        },
    },
  },
  plugins: [],
}
}

