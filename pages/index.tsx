import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/headers/HeroSection";
import HomeContent from "../components/text/HomeContent";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image
        src="/reactplusthree.png"
        width={1100}
        height={550}
        layout="responsive"
      ></Image> */}
      <Image
        src="/banner.webp"
        width={1000}
        height={420}
        layout="responsive"
      ></Image>
      <HeroSection></HeroSection>
      <HomeContent></HomeContent>
    </>
  );
};

export default Home;
