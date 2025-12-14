import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
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
        'sideNav-collapse': {
          from: { zIndex: '100', transform: 'translateX(0px)' },
          to: { transform: 'translateX(-380px)' },
        },
        'sideNav-expand': {
          from: { zIndex: '100', transform: 'translateX(-380px)' },
          to: { transform: 'translateX(0px)' },
        },
        'opacity-show': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'opacity-hide': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        'custom-text-shine': 'text-shine 4s linear infinite',
        'opacity-show': 'opacity-show 0.3s forwards',
        'opacity-hide': 'opacity-hide 0.3s forwards',
        'sideNav-collapse': 'sideNav-collapse 0.3s forwards',
        'sideNav-expand': 'sideNav-expand 0.3s forwards',
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(180deg, #fff 50%, #929292 100%)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
      },
    },
  },
  plugins: [],
};

export default config;
