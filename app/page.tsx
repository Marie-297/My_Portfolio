"use client"
import Navbar from "@/Components/Navbar"
// import { Environment, Text } from "@react-three/drei"
// import { Canvas } from "@react-three/fiber"
import Container from "@/Components/Container";

export default function Home() {
  return (
    <Container>
      <div className="items-center justify-items-center min-h-screen bg-gradient-bg bg-cover bg-center text-white relative">
        <Navbar />
        <h1 className="font-extrabold text-3xl text-center">WELCOME TO MY PORTFOLIO</h1>
      </div>
    </Container>
  );
}

        // <Canvas>
        //   <ambientLight intensity={0.8} /> 
        //   <Text
        //     color="white"
        //     fontSize={3}
        //     position={[0, 0, 0]}
        //   >
        //     WELCOME TO MY PORTFOLIO
        //   </Text>

        //   {/* <Environment preset="sunset" />    */}
        // </Canvas>
