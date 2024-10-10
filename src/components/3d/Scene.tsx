// src\components\3d\Scene.tsx
'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

export default function Scene({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Canvas className={className}>
      {/* <Camera2 /> */}
      {children}
      <Experience />
      <OrbitControls />
    </Canvas>
  );
}
