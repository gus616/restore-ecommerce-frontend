import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // <- adjust if your files are elsewhere
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|gray|yellow|black|white)-(100|500)/,
    },
    {
      pattern: /text-(black|white|gray)-(100|500)/,
    },
    {
      pattern: /hover:bg-(red|green|blue|gray|yellow|black|white)-(100|500)/,
    },
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'slide-in 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
