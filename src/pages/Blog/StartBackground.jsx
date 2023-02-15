import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
function Stars() {
  const starRef = useRef();

  useFrame(() => {
    starRef.current.position.z += 0.9;
  });

  const starsGeometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < 20000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -Math.random() * 2000 - 100;
    positions.push(x, y, z);
  }
  starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  const starsMaterial = new THREE.PointsMaterial({
    sizeAttenuation: false,
    size: 0.5,
    color: 0xffffff,
  });

  return (
    <points ref={starRef} geometry={starsGeometry} material={starsMaterial}>
      {/* <shaderMaterial
        attach="material"
        vertexShader={`
          void main() {
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
          }
        `}
      /> */}
    </points>
  );
}

function StartBackground() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0%",
        left: "0%",
        zIndex: "-1",
      }}
    >
      <Stars />
      <ambientLight intensity={0.1} />
      <pointLight color="#ffffff" position={[0, 0, 0]} intensity={1} />
    </Canvas>
  );
}

export default StartBackground;
