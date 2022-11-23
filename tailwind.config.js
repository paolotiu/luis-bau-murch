/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['fredoka'],
        openSans: ['open-sans'],
      },
    },
  },
  variants: {},
  plugins: ['@tailwindcss/forms'],
};
