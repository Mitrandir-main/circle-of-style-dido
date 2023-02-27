import React from "react";
import {AppProps} from "next/app";
import Head from "next/head";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import "../public/global.css";
import Navbar from "../components/Navbar";

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
