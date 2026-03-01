import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-principal': '#F9F6F0',
                'bg-secundario': '#E4EDEF',
                'bg-terciario': '#D5DEC9',
                'text-principal': '#2A2C2B',
                'accent-rosa': '#D8B4AD',
                'accent-verde': '#849C8F',
                'accent-celeste': '#A4B8BE',
                'accent-dorado': '#D4C5A0',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            fontSize: {
                'base': ['1.125rem', { lineHeight: '1.6' }],     // 18px
                'lg': ['1.25rem', { lineHeight: '1.6' }],         // 20px
                'xl': ['1.5rem', { lineHeight: '1.4' }],          // 24px
                '2xl': ['1.75rem', { lineHeight: '1.3' }],        // 28px
                '3xl': ['2rem', { lineHeight: '1.2' }],           // 32px
                '4xl': ['2.5rem', { lineHeight: '1.1' }],         // 40px
                '5xl': ['3rem', { lineHeight: '1.1' }],           // 48px
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}

export default config
