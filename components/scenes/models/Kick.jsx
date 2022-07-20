import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

import { useAnimations } from "@react-three/drei";

export default function Kick(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/kick.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.Armada.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          material={materials.Ch03_Body}
          geometry={nodes.Ch03.geometry}
          skeleton={nodes.Ch03.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/kick.glb");
