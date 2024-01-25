import Image from "next/image";
import Hero from "@/components/home/Hero";
import ProcessFlow from "@/components/home/ProcessFlow";
import ProductCarousel from "@/components/home/ProductCarousel";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="sm:px-0 md:px-10 lg:px-20 justify-center">
      <Hero />
      <Divider />
      <div className="flex justify-around items-center my-5 md:px-10 feature-item1">
        <div className=" basis-1/2">
          <ProductCarousel />
        </div>
        <div className="carousel-content  basis-1/2">
          <h2 className="text-4xl font-bold mb-8 m-8">Browse our goodies</h2>
          <p className=" m-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, ex ipsam! Sunt tempore optio earum veniam officiis
            dolores incidunt minima!
          </p>
        </div>
        
      </div>
      <Divider />
      <div className="my-5">
        <h2 className="text-4xl font-bold mb-8 m-8">
          Crafted with Sustainability in Mind
        </h2>
        <ProcessFlow />
      </div>
    </main>
  );
}
