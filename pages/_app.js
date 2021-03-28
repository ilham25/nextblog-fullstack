import Head from "next/head";
import { ApolloProvider } from "@apollo/client";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";
import client from "../utils/apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Next Blog</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
