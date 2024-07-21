import Head from "next/head";
import { RecoilRoot } from "recoil";
import "@/styles/style.css";
import "@/styles/adaptive.css";
import "@/font/stylesheet.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ВодоPROвод</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <ChakraProvider>
        <RecoilRoot>
          <Component {...pageProps} />
          <ToastContainer />
        </RecoilRoot>
      </ChakraProvider>
    </>
  );
}
