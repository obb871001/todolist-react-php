import React, { useRef, useState, useEffect } from "react";
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
    const maxZ = -400;
    starRef.current.position.z += 1.2;

    if (starRef.current.position.z > 0) {
      starRef.current.position.z = maxZ;
    }
  });

  const starsGeometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < 10000; i++) {
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
    size: 1,
    color: 0xffffff,
  });

  return (
    <points
      ref={starRef}
      geometry={starsGeometry}
      material={starsMaterial}
    ></points>
  );
}

function StarBackground() {
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

export default StarBackground;
