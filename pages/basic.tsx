import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/headers/HeroSection";
import Navbar from "../components/navigation/Navbar";
import BasicScene from "../components/scenes/basics/BasicScene";
const Basic: NextPage = () => {
  return (
    <>
      <Head>
        <title>Basic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicScene />
    </>
  );
};

export default Basic;
