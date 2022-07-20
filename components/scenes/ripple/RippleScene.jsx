import css from "./RippleScene.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "../basics/Floor";
import Box from "../basics/Box";
import LightBulb from "../basics/LightBulb";
import OrbitControls from "../basics/OrbitCOntrols";
import Draggable from "../basics/Draggable";
import { Suspense } from "react";
import Points from "./Points";
export default function RippleScene() {
  return (
    <div className={css.scene}>
      <Canvas className={css.canvas}>
        <OrbitControls />
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <Suspense fallback={<LightBulb position={[0, 5, 0]} />}>
          <Points i={350} j={350} />
        </Suspense>
      </Canvas>
    </div>
  );
}
