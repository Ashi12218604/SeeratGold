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
          DEFAULT: '#C83E05', // Deep masala orange/rust
          light: '#E65215',
          lighter: '#F27441',
          50: '#FEF2EE',
          100: '#FDE4D9',
          200: '#FBC0A6',
          300: '#F79872',
          400: '#F27441',
          500: '#E65215',
          600: '#C83E05',
          700: '#A13104',
          800: '#752303',
          900: '#4A1501',
        },
        secondary: {
          DEFAULT: '#D98A00', // Saffron / Turmeric Yellow
          light: '#F5A623',
          dark: '#B87200',
          50: '#FFFAED',
          100: '#FFF4E0',
          200: '#FEE7BA',
          300: '#FCD58B',
          400: '#F9BF57',
          500: '#F5A623',
          600: '#D98A00',
          700: '#B87200',
          800: '#855300',
          900: '#523400',
        },
        accent: {
          DEFAULT: '#A0522D',
          light: '#C0724D',
          dark: '#7A3E22',
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
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Montserrat"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.25' }],
      },
      boxShadow: {
        'card': '0 2px 16px rgba(200, 62, 5, 0.08)',
        'card-hover': '0 8px 32px rgba(200, 62, 5, 0.15)',
        'gold': '0 4px 24px rgba(201, 168, 76, 0.25)',
        'soft': '0 1px 8px rgba(0,0,0,0.06)',
        'inner-glow': 'inset 0 1px 4px rgba(201, 168, 76, 0.15)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D98A00 0%, #F5A623 50%, #F9BF57 100%)',
        'gradient-primary': 'linear-gradient(135deg, #C83E05 0%, #E65215 50%, #F27441 100%)',
        'gradient-warm': 'linear-gradient(180deg, #FAF6F0 0%, #F5EEDE 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1A1A1A 0%, #2C2C2C 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(200,62,5,0.9) 0%, rgba(200,62,5,0.6) 100%)',
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
