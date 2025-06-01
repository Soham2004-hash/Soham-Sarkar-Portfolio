import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <SEO title={pageProps.title} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
