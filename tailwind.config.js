/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs':'375px',
      'xs':'560px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '80vw':'80vw',
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease calc(1400ms + (var(--fadeIn-delay, 0))) forwards",
        cardTilt: "cardTilt 0.5s ease-in-out forwards",
        bgFlow: "bgFlow infinite",
        preloader: "preloader 0.5s cubic-bezier(.99,0,.74,1.2) 1.5s forwards",
			},
			keyframes: {
				fadeIn: {
					from: { 
            opacity: 0,
            transform: "translateY(-10px)"
          },
					to: { 
            opacity: 1,
            transform: "translateY(0px)"
          },
				},
        cardTilt: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 1,
            transform: "rotate(2deg)",
          }
        },
        bgFlow: {
          
        },
        preloader: {
          from: {
            height: "100vh",
          },
          to: {
            height: "0vh",
          }
        }
			},
    },
  },
  plugins: [],
};
