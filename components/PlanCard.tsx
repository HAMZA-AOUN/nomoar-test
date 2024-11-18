import Image from "next/image";
import React from "react";

interface Plan {
  title: string;
  price: string;
  color: string;
  details: string[];
}

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div className="flex  w-[310px] h-[707px] shadow-md rounded-xl relative bg-white ">
      <div
        className="absolute w-full rounded-t-xl top-0 h-5"
        style={{ backgroundColor: plan.color }}
      />
      <div className=" flex flex-col gap-4 items-center justify-center w-full py-4 ">
        <h1 className="text-3xl text-[#092346] font-semibold">{plan.title}</h1>
        <h1 className="text-7xl text-[#092346] font-light tracking-wider">
          {plan.price}
        </h1>
        <p className="text-gray-400 ">د.ل/ربع سنوي</p>
        <button className="outline-none border-[2px] border-gray-500 px-4 py-2 rounded-lg">
          {" "}
          اطلب الان
        </button>
        <div className="h-[2px]  w-[250px] bg-gray-200" />
        <ul className="flex flex-col gap-4 font-light pt-4">
          {plan.details.map((item: string, index: number) => (
            <li
              key={index}
              className=" flex items-start text-end justify-end w-[217px] gap-4"
            >
              <span className="whitespace-pre-line"> {item}</span>
              <Image
                src="/planCardTureCheck.svg"
                alt="true check"
                width={25}
                height={25}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
