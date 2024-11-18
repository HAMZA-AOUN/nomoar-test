"use client";
import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
const ToggleLang: React.FC = () => {
  const [isLangEN, setIsLanEN] = useState(false);
  return (
    <div className="flex items-center justify-center gap-2 lg:text-lg ">
      <p className="font-semibold text-[#2B1F51]">{isLangEN ? "EN" : "AR"}</p>

      <button
        onClick={() => setIsLanEN((prev) => !prev)}
        className="lg:text-xl bg-gray-200 rounded-full  p-1 lg:p-2 outline-none "
      >
        {isLangEN ? <BsToggleOn /> : <BsToggleOff />}
      </button>
    </div>
  );
};

export default ToggleLang;
