import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedNetwork = () => {
  const groupRef = useRef<any>(null);
  const sphereRefs = useRef<Mesh[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    
    sphereRefs.current.forEach((sphere, index) => {
      if (sphere) {
        sphere.position.y = Math.sin(state.clock.elapsedTime + index) * 0.2;
        sphere.rotation.z += delta * 0.5;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <Box position={[0, 0, 0]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial 
          color="#00F0FF" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#0EA5E9"
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Network Nodes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Sphere 
            key={i}
            ref={(el) => {
              if (el) sphereRefs.current[i] = el;
            }}
            position={[x, 0, z]} 
            args={[0.3, 16, 16]}
          >
            <meshStandardMaterial 
              color="#8B5CF6" 
              metalness={0.6} 
              roughness={0.3}
              emissive="#4C1D95"
              emissiveIntensity={0.2}
            />
          </Sphere>
        );
      })}

      {/* Connection Lines */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 1.25;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Box 
            key={`line-${i}`}
            position={[x, 0, z]} 
            args={[0.05, 0.05, 2.5]}
            rotation={[0, angle, 0]}
          >
            <meshBasicMaterial 
              color="#8B5CF6" 
              transparent 
              opacity={0.4}
            />
          </Box>
        );
      })}

      {/* Outer Ring */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        {[1, 2, 3].map((i) => (
          <mesh key={i} position={[0, 0, 0]}>
            <ringGeometry args={[3 + i * 0.2, 3.1 + i * 0.2, 32]} />
            <meshBasicMaterial 
              color="#00F0FF" 
              transparent 
              opacity={0.1 / i}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const SecurityNetwork3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#8B5CF6" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        
        <AnimatedNetwork />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Security Network Text Below */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Mạng Bảo mật
        </h3>
        <p className="text-gray-400 mt-1 text-sm">Công nghệ Blockchain</p>
      </div>
    </div>
  );
};

export default SecurityNetwork3D;