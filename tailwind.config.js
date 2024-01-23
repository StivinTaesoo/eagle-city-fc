/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },
        extend: {
            colors: {
                purplePrimary: "#54237C",
                purpleLight: "#D7B9F9",
                purpleBright: "#692B9E",
                yellowSecondary: "#F9D023",
                grayLight: "#F6F6F6",
                grayDarker: "#D9D9D9",
                grey: "#121212",
                grayscale: "#585858",
            },
            fontFamily: {
                barlow: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
                manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "hero-bg":
                    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))",
                "transparent-bg":
                    "linear-gradient(to bottom, transparent, 60%, #54237C)",
                "black-transparent":
                    '"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))"',
            },
            skew: {
                20: "320deg",
            },
        },
    },
    plugins: [],
};
