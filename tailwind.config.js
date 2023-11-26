/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      secondaryy: '#f97150',
      colorText: '#6e7074',
      colorBorder: 'rgba(229, 231, 235)',
      Primary: '#f97150'
    },
    extend: {},
  },
  plugins: [],
}

