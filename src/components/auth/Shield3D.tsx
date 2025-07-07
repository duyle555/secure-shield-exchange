import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedShield = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      {/* Shield Shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2.5, 0.3, 6]} />
        <meshStandardMaterial 
          color="#8B5CF6" 
          metalness={0.7} 
          roughness={0.2}
          emissive="#4C1D95"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Center Circle */}
      <mesh position={[0, 0, 0.16]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial 
          color="#00F0FF" 
          metalness={0.8} 
          roughness={0.1}
          emissive="#0EA5E9"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* ES Text */}
      <Center position={[0, 0, 0.22]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.4}
          height={0.05}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          ES
          <meshStandardMaterial 
            color="#FFFFFF" 
            metalness={0.3} 
            roughness={0.4}
          />
        </Text3D>
      </Center>

      {/* Glow Effect Rings */}
      {[1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.5 + i * 0.3, 2.7 + i * 0.3, 32]} />
          <meshBasicMaterial 
            color="#8B5CF6" 
            transparent 
            opacity={0.1 / i}
          />
        </mesh>
      ))}
    </group>
  );
};

const Shield3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00F0FF" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        
        <AnimatedShield />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* EscrowVN Text Below Shield */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          EscrowVN
        </h3>
        <p className="text-gray-400 mt-2">Khiên Bảo vệ</p>
      </div>
    </div>
  );
};

export default Shield3D;