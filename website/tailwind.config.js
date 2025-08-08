/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-purple": "#8b5cf6",
        "neon-pink": "#ec4899",
        "dark-bg": "#0a0a0a",
        "darker-bg": "#050505",
        "accent-gray": "#1a1a1a",
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0a0",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6",
          },
          "100%": {
            boxShadow: "0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
