import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#00092e',
        foreground: '#ffffff',
      },
      fontSize: {
        h1: 'clamp(2rem, 4vw, 3rem)',
        h2: 'clamp(1.875rem, 4vw, 2.5rem)',
        h3: 'clamp(1.5rem, 4vw, 2rem)',
        'h3-small': 'clamp(1.25rem, 4vw, 1.5rem)',
        h4: 'clamp(1.25rem, 4vw, 1.5rem)',
        h5: 'clamp(1.125rem, 4vw, 1.25rem)',
        h6: 'clamp(1rem, 4vw, 1.125rem)',
      },
      keyframes: {
        'custom-text-shine': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        'custom-text-shine': 'text-shine 4s linear infinite',
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(180deg, #fff 50%, #929292 100%',
      },
    },
  },
  plugins: [],
};

export default config;
