"use client"
import CoverPage from "@/Components/CoverPage";
import Photo from "@/Components/Photo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-bg dark:bg-gradient-bg-dark bg-cover bg-center lg:py-0 flex justify-center items-center lg:px-28">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="order-2 lg:order-none">
            <CoverPage />
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0 lg:pt-0">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
}