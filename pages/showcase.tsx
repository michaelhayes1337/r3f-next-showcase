import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/headers/HeroSection";
import Navbar from "../components/navigation/Navbar";
const Showcase: NextPage = () => {
  return (
    <>
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Showcase;
