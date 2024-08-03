/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Strong-Cyan": "hsl(172, 67%, 45%)",
        "Very-Dark-Cyan": "hsl(183, 100%, 15%)",
        "Dark-Grayish-Cyan": "hsl(186, 14%, 43%)",
        "Grayish-Cyan": "hsl(184, 14%, 56%)",
        "Light-Grayish-Cyan": "hsl(185, 41%, 84%)",
        "Very-Light-Grayish-Cyan": "hsl(189, 41%, 97%)",
        "Strong-Cyan-Hover": "hsl(172, 67%, 75%)",
        "Very-Dark-Cyan-Hover": "hsl(183, 43%, 33%)"
      },
    },
  },
  plugins: [],
};
