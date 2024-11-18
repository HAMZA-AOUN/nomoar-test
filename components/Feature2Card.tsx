import React from "react";

import Image from "next/image";

interface Feature2 {
  image: string;
  title: string;
  desc: string;
}

interface Feature2CardProp {
  feature2: Feature2;
}
const Feature2Card: React.FC<Feature2CardProp> = ({ feature2 }) => {
  return (
    <div
      className={`flex  flex-col max-w-[340px] h-[155px] ${
        feature2.image ? "bg-white shadow-md" : ""
      } items-end justify-start p-4 gap-4 rounded-lg `}
    >
      <div className="flex items-center justify-end gap-4">
        {feature2.title && (
          <p className=" text-end text-lg font-semibold ">{feature2.title}</p>
        )}{" "}
        {feature2.image && (
          <Image
            src={feature2.image}
            alt="feature"
            width={32}
            height={35}
            className="flex items-center justify-center w-8 h-10"
          />
        )}
      </div>
      <p
        className={`text-end  ${
          !feature2.image ? " leading-7" : "font-light pr-10"
        }`}
      >
        {feature2.desc}
      </p>
    </div>
  );
};

export default Feature2Card;
