import css from "./BasicScene.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import Box from "./Box";
import LightBulb from "./LightBulb";
import OrbitControls from "./OrbitCOntrols";
import Draggable from "./Draggable";
export default function BasicScene() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <OrbitControls />
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Box rotateX={3} rotateY={0.2} />
        </Draggable>
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
