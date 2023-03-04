const xs = 0
const sm = 600
const md = 960
const lg = 1280
const xl = 1400

export const theme = {
    background: "#f7f3ef",
    primary: "#002654", // French flag blue
    headingFont: "Gill Sans,Gill Sans MT,Calibri,sans-serif",
    bodyFont: "Petrona, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Times, Source Serif Pro, serif",
    breakpoints: {
        xs: `@media screen and (max-width: ${xs}px)`,
        sm: `@media screen and (max-width: ${sm}px)`,
        md: `@media screen and (max-width: ${md}px)`,
        lg: `@media screen and (max-width: ${lg}px)`,
        xl: `@media screen and (max-width: ${xl}px)`,
    }
}