import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navigation/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
