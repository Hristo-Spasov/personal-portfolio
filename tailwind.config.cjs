/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#1a1a2e",
        accent: "#6366f1",
        accentLight: "#818cf8",
        teal: "#14b8a6",
        tealLight: "#2dd4bf",
        gold: "#f59e0b",
        text: "#f8fafc",
        textMuted: "#94a3b8",
        surface: "#1e1e2e",
        surfaceHover: "#2a2a3e",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "aurora": "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        "grid-pattern": "linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "top center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
          },
        },
      },
      boxShadow: {
        "glow": "0 0 20px rgba(99, 102, 241, 0.5)",
        "glow-teal": "0 0 20px rgba(20, 184, 166, 0.5)",
        "glow-gold": "0 0 20px rgba(245, 158, 11, 0.5)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
