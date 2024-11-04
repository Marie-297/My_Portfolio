"use client"
import Navbar from "@/Components/Navbar"
import Container from "@/Components/Container";
import CoverPage from "@/Components/CoverPage";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen bg-gradient-bg bg-cover bg-center relative px-12 md:px-20 lg:px-24">
      {/* <Navbar /> */}
      <CoverPage />
    </div>
  );
}