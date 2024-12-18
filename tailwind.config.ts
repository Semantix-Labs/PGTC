/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
      extend: {
        fontFamily: {
          sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        },
        fontWeight: {
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
        },
     
  		colors: {
  			customGreen: '#2E5339',
  			customLightGreen: '#E6ECDE',
  			customBeige: '#F8EBC6',
  			customGold: '#C7A041',
  			customGray: '#787878',
  			customDarkGray: '#393939',
  			customLightGray: '#E7E7E7',
  			customSilver: '#D9D9D9',
  			
  		},
  	
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
