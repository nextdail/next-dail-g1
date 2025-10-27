import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors from your design
        cream: {
          50: '#FCFCF9',
          100: '#FFFFFD',
        },
        gray: {
          200: '#F5F5F5',
          300: '#A7A9A9',
          400: '#777C7C',
        },
        slate: {
          500: '#626C71',
          900: '#13343B',
        },
        brown: {
          600: '#5E5240',
        },
        charcoal: {
          700: '#1F2121',
          800: '#262828',
        },
        teal: {
          300: '#32B8C6',
          400: '#2DA6B2',
          500: '#21808D', // Primary brand color
          600: '#1D7480',
          700: '#1A6873',
          800: '#2996A1',
        },
        red: {
          400: '#FF5459',
          500: '#C0152F',
        },
        orange: {
          400: '#E68161',
          500: '#A84B2F',
        },
        accent: '#FFE77A', // Yellow accent
        
        // Semantic colors
        primary: '#21808D',
        secondary: '#5E5240',
        background: '#FCFCF9',
        surface: '#FFFFFD',
        text: {
          primary: '#13343B',
          secondary: '#626C71',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Berkeley Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '14px',
        'md': '14px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px',
      },
      spacing: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
      },
      borderRadius: {
        'sm': '6px',
        'base': '8px',
        'md': '10px',
        'lg': '12px',
        'full': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.02)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'inset-sm': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'infinite-scroll': 'infiniteScroll 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)' },
          '50%': { boxShadow: '0 6px 20px rgba(37, 211, 102, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        infiniteScroll: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #2C5F2D 0%, #38B2AC 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(44, 95, 45, 0.15), transparent 50%), radial-gradient(at 80% 70%, rgba(255, 231, 122, 0.12), transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
