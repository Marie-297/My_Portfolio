"use client"
import CoverPage from "@/Components/CoverPage";
import Photo from "@/Components/Photo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-bg bg-cover bg-center overflow-auto py-8 lg:py-0 flex justify-center items-center lg:px-28">
      <div className="container mx-">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="order-2 lg:order-none">
            <CoverPage />
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0 pt-14 lg:pt-0">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
}