// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6AB845', // Замените на цвет из макета
        secondary: '#1E3A8A', // Замените на цвет из макета
        messageSent: '#3B82F6',
        messageReceived: '#10B981',
        background: '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Используйте шрифт из макета
      },
    },
  },
  plugins: [],
};
