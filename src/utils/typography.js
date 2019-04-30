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
