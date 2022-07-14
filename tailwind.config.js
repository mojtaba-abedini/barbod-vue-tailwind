module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'cyan': '#06b6d4'
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}