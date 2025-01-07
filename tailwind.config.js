/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
    }, 
    fontSize: {
      'h1': '3.815rem', 
      'h2': '3.052rem',
      'h3': '2.441rem', 
      'h4': '1.953rem', 
      'h5': '1.563rem', 
      'h6': '1.25rem',  
      'p': '1rem',  
      'sm1': '0.8rem', 
      'sm2': '0.64rem',   
    }, 
  },
  plugins: [],
};
