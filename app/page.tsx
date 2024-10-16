"use client"
import Navbar from "@/Components/Navbar"
import { Environment, Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen bg-gradient-bg bg-cover bg-center text-white">
      <Navbar />
      <Canvas>
        <ambientLight intensity={0.8} /> 
        <Text
          color="white"
          fontSize={3}
          position={[0, 0, 0]}
        >
          WELCOME TO MY PORTFOLIO
        </Text>

        {/* <Environment preset="sunset" />    */}
      </Canvas>
    </div>
  );
}
