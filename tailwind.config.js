module.exports = {
  purge: ['./src/pages/**/*.{tsx}', './src/components/**/*.{tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#0065ff',
      secondary: '',
      danger: '',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        default: {
          primary: '#0065ff',
          'primary-focus': '#094bae',
          'primary-content': '#FFFFFF',
        },
      }
    ]
  }
};
