/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // HSL color tokens for light/dark mode
        primary: {
          50: 'hsl(250, 100%, 98%)',
          100: 'hsl(250, 100%, 95%)',
          500: 'hsl(250, 85%, 65%)',
          600: 'hsl(250, 85%, 58%)',
          900: 'hsl(250, 85%, 25%)',
        },
        gradient: {
          purple: 'hsl(270, 85%, 65%)',
          pink: 'hsl(330, 85%, 65%)',
          cyan: 'hsl(190, 85%, 65%)',
          blue: 'hsl(220, 85%, 65%)',
          orange: 'hsl(25, 85%, 65%)',
          red: 'hsl(0, 85%, 65%)',
        },
        border: 'hsl(var(--border))', // Add this line
      },
      borderRadius: {
        '2xl': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}