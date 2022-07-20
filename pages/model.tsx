import type { NextPage } from "next";
import Head from "next/head";
import BlenderModel from "../components/scenes/models/BlenderModel";
const Model: NextPage = () => {
  return (
    <>
      <Head>
        <title>Model</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlenderModel />
    </>
  );
};

export default Model;
