/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
     
      backgroundColor:{
        skin:{
          'fill-main': 'var(--bg-base)',
          'fill-muted': ({ opacityValue }) => {
            if(opacityValue !== undefined){
              return `rgba(var(--bg-muted), ${opacityValue})`
            }
            return `rgba(var(--bg-muted))`
          },
          'fill-muted-inverted': ({ opacityValue }) => {
            if(opacityValue !== undefined){
              return `rgba(var(--bg-muted-inverted), ${opacityValue})`
            }
            return `rgba(var(--bg-muted-inverted))`
          },
          'fill-inverted-main': 'var(--bg-inverted-main)',
          'fill-inverted': 'var(--bg-inverted)',

        }
      },
      // A refaire
      border:{
        'border-base': ({ opacityValue }) => {
          if(opacityValue !== undefined){
            return `rgba(var(--border-base), ${opacityValue})`
          }
          return `rgba(var(--border-base))`
        },
        'border-muted': ({ opacityValue }) => {
          if(opacityValue !== undefined){
            return `rgba(var(--border-muted), ${opacityValue})`
          }
          return `rgba(var(--border-muted))`
        }
      },
      colors: {
        skin:{
          base: 'var(--text-base)',
          muted: ({ opacityValue }) => {
            if(opacityValue !== undefined){
              return `rgba(var(--text-muted), ${opacityValue})`
            }
            return `rgba(var(--text-muted))`
          },
          inverted: 'var(--text-inverted)',
          light:({ opacityValue }) => {
            if(opacityValue !== undefined){
              return `rgba(var(--border-base), ${opacityValue})`
            }
            return `rgba(var(--border-base))`
          }
        },
        black: "#1a1a18",
        "teddra-gray": {
          100: "#ececec",
          400: "#d6d5d5",
          200: "#b2b3b3",
          300: "#434242",
        },
        "teddra-red": "#E31E24",
      },
      
    },
  },
  plugins: [],
}