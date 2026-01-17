/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#2e8e8b",
                "primary-dark": "#236e6b",
                "secondary-sage": "#A1C298",
                "sage-light": "#e8f2f1",
                "background-light": "#fafafa",
                "background-dark": "#1d1f20",
                "surface-light": "#ffffff",
                "surface-dark": "#2d3032",
                "text-main": "#121616",
                "text-muted": "#6a8180",
            },
            fontFamily: {
                display: ["Manrope", "sans-serif"],
                heading: ["Work Sans", "sans-serif"],
                sans: ["Manrope", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
