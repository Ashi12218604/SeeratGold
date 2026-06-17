/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF7A00', // Vibrant Light Orange
          light: '#FF9433',
          lighter: '#FFAD66',
          50: '#FFF2E5',
          100: '#FFE6CC',
          200: '#FFCC99',
          300: '#FFB366',
          400: '#FF9933',
          500: '#FF7A00',
          600: '#CC6200',
          700: '#994900',
          800: '#663100',
          900: '#331800',
        },
        secondary: {
          DEFAULT: '#FFC107', // Golden Yellow
          light: '#FFD54F',
          dark: '#FFA000',
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        accent: {
          DEFAULT: '#4CAF50', // Fresh Green
          light: '#81C784',
          dark: '#388E3C',
        },
        cream: {
          DEFAULT: '#FAF6F0',
          dark: '#F5EEDE',
          darker: '#EDE3D0',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#6B6B6B',
          dark: '#1A1A1A',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          light: '#DCF8C6',
        },
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.25' }],
      },
      boxShadow: {
        'card': '0 2px 16px rgba(255, 122, 0, 0.08)',
        'card-hover': '0 8px 32px rgba(255, 122, 0, 0.15)',
        'gold': '0 4px 24px rgba(255, 193, 7, 0.25)',
        'soft': '0 1px 8px rgba(0,0,0,0.06)',
        'inner-glow': 'inset 0 1px 4px rgba(255, 193, 7, 0.15)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFE082 100%)',
        'gradient-primary': 'linear-gradient(135deg, #FF7A00 0%, #FF9433 50%, #FFAD66 100%)',
        'gradient-warm': 'linear-gradient(180deg, #FAF6F0 0%, #F5EEDE 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1A1A1A 0%, #2C2C2C 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(255,122,0,0.9) 0%, rgba(255,122,0,0.6) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
