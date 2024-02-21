/** @type {import('tailwindcss').Config} */
module.exports = {
    
      content: ["./index.{js,ts,tsx}", "./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
    
    presets: [require("nativewind/preset")],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {},
    },
    plugins: [],
  }