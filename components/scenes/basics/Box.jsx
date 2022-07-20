import React from "react";

function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"rgb(10, 20, 30)"} />
    </mesh>
  );
}
export default Box;
