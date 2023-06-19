import React from "react";
import {  ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { AvalancheFuji} from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={AvalancheFuji}>
      <Head>
        <title>Tuki token drop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Tuki token drop"
        />
        <meta
          name="keywords"
          content="thirdweb token drop, thirdweb token transfer, thirdweb token claim, thirdweb token claim phases"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
