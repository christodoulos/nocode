const { guessProductionMode } = require('@ngneat/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
