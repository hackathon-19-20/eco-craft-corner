import React from "react";
import { processList } from "@/data/processFlowData";
import Image from "next/image";

export default function Features() {
  return (
    <ul className="flex flex-col sm:px-4 sm:py-10 md:px-16">
      {processList.map((feature, index) => {
        const isEven = index % 2 === 0;
        const flexClass = isEven ? "flex-row-reverse" : "flex-row";

        return (
          <li
            key={feature.key}
            className={`flex ${flexClass} items-center space-x-4 gap-16 mb-8 feature-item`}
          >
            <div className="w-1/2 flex justify-center">
              <Image
                src={feature.imageUrl}
                width={300}
                height={300}
                alt={`feature-${feature.key}`}

              />
            </div>
            <div className="w-full md:w-1/2 md:text-left ">
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
