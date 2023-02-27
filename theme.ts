import {createTheme} from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e7b0b6",
    },
    secondary: {
      main: "#232323",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      letterSpacing: "0.1rem",
      textTransform: "uppercase",
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "0.1rem",
      textTransform: "uppercase",
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
      letterSpacing: "0.1rem",
      marginBottom: "1rem",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      letterSpacing: "0.1rem",
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1.1rem",
      fontWeight: 400,
      marginBottom: "1rem",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
      marginBottom: "1rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
});

export default theme;
