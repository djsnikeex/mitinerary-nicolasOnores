/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mytheme: {
          
      "primary": "#641ae6",
               
      "secondary": "#d926a9",
               
      "accent": "#1fb2a6",
               
      "neutral": "#2a323c",
               
      "base-100": "#1d232a",
               
      "info": "#3abff8",
               
      "success": "#36d399",
               
      "warning": "#fbbd23",
               
      "error": "#f87272",
               },
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('https://media1.travelguide.de/media/2022/01/karibik.jpeg')",
        'cities-bg': "url('https://www.xtrafondos.com/descargar.php?id=3038&resolucion=3840x2160')",
        
        }),

     
    },
  },

  plugins: [
    require("daisyui"),
  ],
}
