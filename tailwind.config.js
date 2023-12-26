/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'max': '860px'},
      // => @media (max-width: 860px) { ... }
      'sm': {'max': '450px'},
      // => @media (max-width: 450px) { ... }
      'xsm':{'max': '400'},
      // => @media (max-width: 400px) { ... }
      '2xsm':{'max': '350px'},
      // => @media (max-width: 350px) { ... }
    },
  },
  plugins: [],
}

