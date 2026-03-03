import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

const Model = ({isMobile }) => {
  const model = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
    <primitive
      object={model.scene}
      scale={isMobile ? 0.5 : 0.75}
      position={isMobile ? [0, -3, -2.2 ] : [0, -1.1, -1.7]}
      rotation={[-0.01, -0.2, -0.1]}
    />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
const mediaQuery = window.matchMedia(
  '(max-width: 500px)');

setIsMobile(mediaQuery.matches);

const handleMediaQueryChange = (event) => {
  setIsMobile(event.matches);
}

mediaQuery.addEventListener('change',
handleMediaQueryChange);

return () => {
  mediaQuery.removeEventListener('change',
    handleMediaQueryChange
  );
}
}, [] );

  return (
    <Canvas
      camera={{ position: [0, 1, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={1.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Model IsMobile={isMobile} />
        <Preload all />
        
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
