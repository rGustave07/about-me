const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./storybook-components/components/**",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.stories.tsx"
  ],
  theme: {
    ...defaultTheme,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      ...colors
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        'phase-in': {
          '0% 100%': { opacity: '100%' },
          '50%': { opacity: '0%' },
        }
      },
      animation: {
        'phase': 'phase-in 2s ease-in-out',
      },
      colors: {
        'reactLogoBlue': '#04d8ff',
        'reduxLogoPurple': '#764abc',
        'webpackLogoBlue': '#8ed5fb'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
