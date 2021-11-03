import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="//use.fontawesome.com/releases/v5.0.7/css/all.css"
        ></link>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
