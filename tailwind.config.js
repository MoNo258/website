/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)'],
                mono: ['var(--font-roboto-mono)'],
            },
            colors: {
                dark: '#1b1b1b',
                light: '#f5f5f5',
                primary: '#863e96', // Vivid Violet
                primaryDark: '#58e6d9', // Turquoise Blue
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            },
            backgroundImage: {
                circularLight:
                    'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 6px,#f5f5f5 100px)',
                circularDark:
                    'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)',
            },
        },
    },
    plugins: [],
};
