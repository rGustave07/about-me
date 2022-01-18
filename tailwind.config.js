module.exports = {
  content: [
    "./storybook-components/components/**",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.stories.tsx"
  ],
  theme: {
    colors: {
      primary: '#1D2F6F',
      secondary: '#8390FA',
      tertiary: '#FBFBFB',
      roseDust: '#AA6373',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Dongle'],
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
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
