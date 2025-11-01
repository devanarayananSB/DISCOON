import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Sphere visible args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#FFD700"
            attach="material"
            distort={0.4}
            speed={2}
          />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-glow drop-shadow-lg">
          DISCOON
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300 tracking-wide">
          Designs That Speak
        </p>
      </motion.div>
    </section>
  );
}
