import React, { useRef, useState } from "react";
import css from "./PhysicsScene.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import OrbitControls from "../basics/OrbitControls";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
function Spin({ children }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
  });
  return <group ref={ref}>{children}</group>;
}

function PhysicsCube(props) {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"red"} />
    </mesh>
  );
}

function Plane(props) {
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[10, 10]} />
      <meshBasicMaterial />
    </mesh>
  );
}

function Cube(props) {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <mesh
      {...props}
      scale={hover ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial color={active ? "orange" : "hotpink"} />
    </mesh>
  );
}

const PhysicsScene = () => {
  return (
    <div className={css.scene}>
      <Canvas className={css.canvas}>
        <ambientLight color={"white"} intensity={0.2} />
        <pointLight position={[10, 10, 15]} />
        <Cube position={[1.5, 1, 1]} />
        <Spin>
          <Cube position={[0, 0, 0]} />
        </Spin>
        <Cube position={[-1.5, 1, 1]} />
        <Physics>
          <PhysicsCube position={[0, 10, 0]} />
          <PhysicsCube position={[0, 20, 0]} />
          <PhysicsCube position={[0, 30, 0]} />
          <PhysicsCube position={[0, 40, 0]} />
          <PhysicsCube position={[0, 50, 0]} />
          <PhysicsCube position={[0, 60, 0]} />
          <PhysicsCube position={[0, 70, 0]} />
          <PhysicsCube position={[0, 80, 0]} />
          <PhysicsCube position={[0, 90, 0]} />
          <PhysicsCube position={[0, 100, 0]} />
          <PhysicsCube position={[0, 110, 0]} />
          <PhysicsCube position={[0, 120, 0]} />
          <PhysicsCube position={[0, 130, 0]} />
          <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default PhysicsScene;
