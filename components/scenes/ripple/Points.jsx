import * as THREE from "three";
import React from "react";

const Points = ({ i, j }) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const sprite = new THREE.TextureLoader().load("./circle.png");

  for (let count = 0; count < 10000; count++) {
    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  return (
    <points args={[geometry]}>
      <pointsMaterial
        size={35}
        sizeAttenuation={true}
        map={sprite}
        alphaTest={0.5}
        transparent={true}
      />
    </points>
  );
};

export default Points;
