import React from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl }) => {
  // Prevent crash if imgUrl is undefined
  if (!imgUrl) return null;

  const texture = useTexture(imgUrl);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />

      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" />

        {texture && (
          <Decal
            position={[0, 0, 1]}
            scale={1}
            map={texture}
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  if (!icon) return null; // Important safety check

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </Canvas>
  );
};

export default BallCanvas;