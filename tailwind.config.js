/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand (real SPS identity)
        brand: {
          blue: '#0057B8',
          blueLight: '#3D8BE8',
          red: '#C5192D',
          redLight: '#E23B4E',
        },
        primary: '#F4F8FF',
        // Ink / dark surfaces (engineered navy, no pure black)
        ink: {
          950: '#070D18',
          900: '#0B1426',
          800: '#101D35',
          700: '#16294A',
          600: '#1E3961',
        },
        // Steel neutral ramp (cool, single family, locked)
        steel: {
          50: '#F6F8FB',
          100: '#EDF1F7',
          200: '#DCE3EE',
          300: '#C2CDDD',
          400: '#94A4BC',
          500: '#677893',
          600: '#4C5C76',
          700: '#39465C',
          800: '#27313F',
          900: '#1A212C',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Montserrat', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        field: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'blueprint':
          'linear-gradient(rgba(125,160,210,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(125,160,210,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        'lift': '0 18px 50px -20px rgba(11,20,38,0.35)',
        'lift-blue': '0 18px 50px -18px rgba(0,87,184,0.45)',
        'inset-edge': 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(2000%)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' },
        },
      },
      animation: {
        scanline: 'scanline 7s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
