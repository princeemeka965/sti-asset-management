/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'sm': '320px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            'bermuda-blue': '#2B3056',
            'pink': '#FEF3EB',
            'grey-light': '#ABABAB',
            'carrot-orange': '#F68634',
            'divider-grey': '#D9D9D9',
            'grey-pink': 'rgba(246, 134, 52, 0.03)'
        },
        extend: {
            backgroundImage: {
                'home': "linear-gradient(0deg, rgba(43, 48, 86, 0.5), rgba(43, 48, 86, 0.5)), url('/city-extension.svg')"
            }
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'body': ['DM Sans', 'sans-serif'],
            'primary': ['Montserrat', 'sans-serif'],
        }
    },
    plugins: [],
});