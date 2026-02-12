import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                apple: {
                    blue: '#0066cc',
                    gray: {
                        50: '#f5f5f7',
                        100: '#e8e8ed',
                        200: '#d2d2d7',
                        300: '#86868b',
                        400: '#424245',
                        500: '#1d1d1f'
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
            },
            animation: {
                shimmer: 'shimmer 2s infinite linear',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        }
    },
    plugins: [],
};
export default config;
