const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: '#2091F9',
            white: '#FFFF',
            dark: '#252B42',

            'secondary-dark': '#374754'
        },
        extend: {
            backgroundImage: {
                'hero-image':
                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/public/hero.jpg')"
            }
        }
    },

    plugins: [require('@tailwindcss/forms')]
};
