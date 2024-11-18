import Image from "next/image";
import React from "react";

interface Feature {
  image: string;
  title: string;
  desc: string;
}

interface FeatureCardProp {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProp> = ({ feature }) => {
  return (
    <div className="flex  flex-col max-w-[370px] h-[300px]  bg-white items-end justify-start p-8 gap-4 rounded-lg shadow-md">
      <Image
        src={feature.image}
        alt="feature"
        width={60}
        height={60}
        className="flex items-center justify-center w-16 h-16"
      />
      <div className="flex flex-col items-end  w-full gap-2">
        <p className=" text-end font-semibold ">{feature.title}</p>
        <p className="text-end font-light">{feature.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
