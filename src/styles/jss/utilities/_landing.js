import { makeStyles } from "@material-ui/core/styles";

export const landingStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".landing": { color: "rgba(0, 0, 0, 0.87)", overflow: "hidden" },
    ".landing p": { color: "rgba(var(--body), 0.74)" },
    ".landing a": { textDecoration: "none" },
    ".landing div, .landing section": { boxSizing: "border-box" },
    ".section-intro": { paddingTop: "5rem !important" },
    ".section-intro-formations": { paddingTop: "6rem !important" },
    ".section-programme-formation": { paddingTop: "2rem !important" },
    ".section-intro-massages": { paddingTop: "2rem !important" },
    ".section": {
      paddingTop: "5rem !important",

      "& .section__header": {
        margin: "0 0 32px",
        h2: {
          fontSize: 32,
          fontWeight: 700,
          margin: "0 0 16px",
        },
        p: {
          fontSize: 16,
          maxWidth: "36rem",
          margin: 0,
        },
      },
    },

    ".container-formations": {
      padding: "0 0 0 0",
      maxWidth: "1700px",
      margin: "0 auto",
      //background: "rgba(var(--primary),0.05)"
      background: "#FAFBFF",
      /* grey white */
      border: "1px solid #EBF0FF",
      boxSizing: "border-box"
    },

    
 ".zoom": {
  padding: "50px",
  transition: "transform .2s",
  margin: "0 auto"
},

".zoom:hover": {
   transform: "scale(1.5)"
},

    ".container-final-formation": {
      padding: "2rem 0 0 0",
      maxWidth: "1700px",
      margin: "0 auto",
    },

    ".container-intro-patrick": {
      padding: "2rem 0 0 0",
      width: "1164px",
      margin: "0 auto"
    },

    ".container-formation": {
      padding: "4rem 0 1rem 0",
      maxWidth: "1700px",
      margin: "0 auto",
    },


    ".container-icon-formation": {
      padding: "2rem 0 0 0",
      maxWidth: "1700px",
      margin: "0 auto",
      background: "#FAFBFF"
    },

    ".container-program-formation": {
      padding: "2rem 0 0 0",
      maxWidth: "1700px",
      margin: "0 auto",
      background: "#EBF0FF"
    },

    ".header": {
      position: "fixed",
      width: "100%",
      top: "0",
      background: "var(--bg-paper)",
      left: "0",
      right: "0",
      padding: "0 0 0 0",
      transition: "padding 0.3s linear",
      zIndex: "999999"
    },
    ".header .header-container": {
      padding: "10px 0 16px 0",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      boxShadow: "2px 5px 5px 2px #0404046e;"
    },
    ".header .header-container .brand": {
      margin: "0 5% 0 1%",
      padding: "0"
    },
    ".header .header-container .brand img": { maxHeight: "60px" },

    ".header .header-container ul.navigation": {
      listStyle: "none",
      margin: "10px 16px 0 0",
      padding: "0",
    },
    ".header .header-container ul.navigation li": { display: "inline-block" },
    ".header .header-container ul.navigation li a": {
      display: "flex",
      alignItems: "center",
      padding: "6px 10px",
      transition: "all 0.3s ease-in",
	    fontSize: "14px",
	    color: "rgba(112,112,112,1)"
    },
    ".header .header-container ul.navigation li a:hover": {
      textDecoration: "underline !important"
    },
    ".header .header-container .header__toggle": { display: "none" },
    "@media only screen and (max-width: 767px)": {
      ".header": {
        width: "var(--topbar-mobile-width)",
        height: "100vh",
        left: "auto",
        right: "0",
        padding: "20px 0 !important",
        boxShadow:
          "-2px 0 4px rgba(0, 0, 0, 0.14), -2px 4px 8px rgba(0, 0, 0, 0.28) !important",
        transition: "all 0.3s ease-in-out",
      },

      "@media (max-width: 990px)": {
          ".card": { margin: "20px"}
      },

      ".header.closed": {
        right: "calc(-1 * var(--topbar-mobile-width) - 5px)",
      },
      ".header.closed .header__toggle": {
        color: "rgba(0, 0, 0, 0.87)",
        background: "#ffffff",
        boxShadow:
          "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
      },
      ".header .header__toggle": {
        top: "10px",
        right: "15px",
        color: "rgba(0, 0, 0, 0.87)",
        position: "fixed",
        display: "inline-block !important",
        transition: "all 0.3s ease-in-out",
      },
      ".header .header-container": {
        flexDirection: "column",
        padding: "0",
        height: "100%"
      },
      ".header .header-container .brand": {
        padding: "0 3px 0 0",
        width: "100%"
      },
      ".header .header-container ul.navigation": { margin: "0", width: "100%" },
      ".header .header-container ul.navigation li": { display: "block" },
      ".header .header-container ul.navigation li a": {
        padding: "15px 20px",
        borderRadius: "0",
      },
    },
  },
}));
