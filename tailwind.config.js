/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#fff',
        menu: '#97bf0f',
        doctor: '#ffb400',
        text: '#bfc1c2',
      },
    },
  },
  plugins: [],
};
