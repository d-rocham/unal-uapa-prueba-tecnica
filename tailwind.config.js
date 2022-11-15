/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: '#2091F9',

            'secondary-green': '#2DC071',
            'secondary-orange': '#F15B07',

            'main-text': '#252B42',
            'secondary-text': '#374754',
            'light-text': '#FFFFFF',

            'background-dark': '#252B42',
            'background-light': '#FFFFFF',
            'background-gradient': '#222B32'
        },
        extend: {}
    },

    plugins: [require('@tailwindcss/forms')]
};
