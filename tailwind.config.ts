import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#000000",
        orange: "#FF8B45",
        blue: "#A4D7F5",
        white: "#FFFFFF",
        green: "#90EE90",
        yellow: "#FFC300",
        lightGray: "#D3D3D3"
      }
    },
  },
  plugins: [],
};
export default config;
