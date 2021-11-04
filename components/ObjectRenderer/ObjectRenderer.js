import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ src }) {
  const { scene } = useGLTF(src);
  return <primitive object={scene} />;
}

function ObjectRenderer({ glbSrc }) {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ position: [15, 15, 50], fov: 5 }}>
      <ambientLight intensity={1.5} />
      <spotLight position={[100, 150, 200]} angle={50}></spotLight>
      <Suspense fallback={null}>
        <Model src={glbSrc} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default ObjectRenderer;
