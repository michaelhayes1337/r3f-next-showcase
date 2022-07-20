import type { NextPage } from "next";
import Head from "next/head";
import RippleScene from "../components/scenes/ripple/RippleScene";
const Ripple: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ripple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RippleScene />
    </>
  );
};

export default Ripple;
