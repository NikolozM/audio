/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    colors:{
      orange:"#FFA500",
      white:"#ffffff",
      sky:"rgb(14 165 233)"
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/home/desktop/image-hero.jpg')",
        'split-white-black': "linear-gradient(to bottom, white 40%, #f2f2f2 60%);"
      },
    },
  },
  plugins: [],
};
