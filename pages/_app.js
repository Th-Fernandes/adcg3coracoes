import Head from "next/head";
import GlobalStyle from "../src/assets/styles/scss/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ADCG - Congregação 3 corações</title>
      </Head>

      <Component {...pageProps} />
    </>  
  )
}