import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Kick from "./Kick.jsx";
import css from "./BlenderModel.module.css";

import OrbitControls from "../basics/OrbitCOntrols";

export default function BlenderModel() {
  return (
    <div className={css.scene}>
      <Canvas className={css.Canvas}>
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Kick />
        </Suspense>
      </Canvas>
    </div>
  );
}
