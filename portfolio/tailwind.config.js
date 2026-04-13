/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f', // Deep futuristic dark
        primary: '#00f0ff',    // Neon blue
        secondary: '#bf00ff',  // Neon purple
        accent: '#00ff66',     // Subtle neon green
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
// @import "tailwindcss";