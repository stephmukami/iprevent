import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-peach": "#FFF5EC",
        "secondary-blue" : "#CCE5E2",
        "brand-blue":"#A5CABB",
        "brand-white":"#FCFCFC",
        "brand-grey":"#DFE3E4",
        "brand-black": "#FFF"
      },
    },
  },
  plugins: [],
};
export default config;
