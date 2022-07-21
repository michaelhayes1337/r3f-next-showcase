import type { NextPage } from "next";
import Head from "next/head";
import PhysicsScene from "../components/scenes/physics/PhysicsScene";
const Physics: NextPage = () => {
  return (
    <>
      <Head>
        <title>Physics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PhysicsScene />
    </>
  );
};

export default Physics;
