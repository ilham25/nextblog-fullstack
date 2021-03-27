import Head from "next/head";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
