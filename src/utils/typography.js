import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import "prismjs/themes/prism.css"

Wordpress2016.overrideThemeStyles = () => {
  return {
    body: { background: "hsla(55, 63%, 93%, 0.1)" },
    a: { color: "#f57f17" },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    blockquote: {
      fontSize: "15px",
      marginLeft: "0",
      borderColor: "hsla(0,0%,0%,0.05)",
      background: "#e0f2f1",
      color: " #00796b",
      padding: "10px",
    },
    "@media only screen and (max-width: 480px)": {
      blockquote: {
        marginLeft: "0",
      },
    },
    hr: {
      background: "hsla(5,0%,0%,0.1)",
    },
    "ol,ul": {
      marginLeft: "1.75em",
    },
    // 代码背景色
    ':not(pre) > code[class*="language-"],pre[class*="language-"]': {
      background: "#f7f7f7 !important",
    },
    table: {
      borderTop: "1px solid #ddd",
      borderLeft: "1px solid #ddd",
    },
    "td,th": {
      borderRight: "1px solid #ddd",
      borderBottom: "1px solid #ddd",
      fontSize: "12px",
      lineHeight: 1.5,
      padding: "5px 10px",
    },
    "th:first-child, td:first-child": {
      padding: "5px 10px",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
