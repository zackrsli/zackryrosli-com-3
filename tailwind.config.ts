import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Montserrat"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        'asphalt': {
          '50': '#f4f4f2',
          '100': '#e4e3dd',
          '200': '#cbc9bd',
          '300': '#ada897',
          '400': '#958f7a',
          '500': '#867f6c',
          '600': '#736a5b',
          '700': '#5d554b',
          '800': '#514a43',
          '900': '#47413c',
          '950': '#1c1917',
        },
        'atlantis': {
          '50': '#f7fbea',
          '100': '#ecf7d0',
          '200': '#daefa7',
          '300': '#bfe274',
          '400': '#9acd32',
          '500': '#87b82a',
          '600': '#68921e',
          '700': '#4f701b',
          '800': '#41591b',
          '900': '#374c1b',
          '950': '#1c290a',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
