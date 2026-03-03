import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  return <primitive object={earth.scene} 
  scale={2.1}
  position-y={0}
  rotation-y={0}
  />;
};

useGLTF.preload("/planet/scene.gltf");

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ antialias: true }}
      camera={{ position: [-4, 3, 6],
        near: 0.1,
        far: 200,
        fov: 45 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <OrbitControls
          autoRotate
          enableZoom={false}
        />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;