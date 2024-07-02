/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 10px rgba(0, 0, 0, 0.20)',
      },
      width: {
        '3/5': '60%',
        '108': '27rem', // Add your custom width class here
      },
      height: {
        '30' : '10 rem',
      },
      fontSize: {
        'sm2': '11px',  // Custom text-sm size
      },
      animation: {
        fadeinleft: 'fade-in-left 0.60s ease-in-out 0.10s 1',
        fadeinright: 'fade-in-right 0.60s ease-in-out 0.10s 1',
        fadeoutleft: 'fade-out-left 0.60s ease-in-out 0.10s 1',
        fadeoutright: 'fade-out-right 0.60s ease-in-out 0.10s 1',
        fadein: 'fade-in 1s ease-in-out 0.25s 1',
        fadeout: 'fade-out 1s ease-out 0.25s 1',
      },
    },
    keyframes:{
      "fade-in-left": {
        "0%": {
            opacity: 0,
            transform: "translate3d(-60%, 0, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    "fade-in-right": {
        "0%": {
            opacity: 0,
            transform: "translate3d(60%, 0, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    "fade-out-left": {
        "0%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,
            transform: "translate3d(-60%, 0, 0)",
        },
    },
    "fade-out-right": {
      "0%": {
          opacity: 1,
      },
      "100%": {
          opacity: 0,
          transform: "translate3d(60%, 0, 0)",
      },
  },
  "fade-in": {
          "0%": {
              opacity: 0
          },
          "100%": {
              opacity: 1
          },
      },
      "fade-out": {
          "0%": {
              opacity: 1
          },
          "100%": {
              opacity: 0
          },
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {      
          "primary": "#348017",
          "secondary": "#2A6813",  
          "accent": "#5B9BD5",
          "neutral": "#818cf8",
          "base-100": "#f5f5f4",
          "info": "#9333ea",
          "success": "#84cc16",
          "warning": "#d67000",
          "error": "#dc2626",
        },
      },
    ],
  },
}