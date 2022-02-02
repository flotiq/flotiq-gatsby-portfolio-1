module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#252525',
                gray: '#F7F7F7',
                'light-gray': '#F9F9F9',
            },
            fontFamily: {
                playfair: ['Playfair Display', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
    ],
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
