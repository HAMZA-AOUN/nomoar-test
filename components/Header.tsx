import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex relative w-full h-[500px] md:h-[700px] lg:h-[1023px] items-center justify-center">
      <Image
        src="/header.png"
        alt="header image"
        fill
        className="object-cover absolute"
      />
      <div className="flex flex-col max-w-[620px] gap-2 md:gap-4 absolute items-center justify-center top-10 text-white">
        <p className="text-2xl text-center md:text-5xl">الاستضافات المشتركة</p>
        <div className="flex flex-col w-full gap-1 items-center justify-center text-sm mx-auto my-4">
          <p className="font-light text-center leading-5">
            كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و
            وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة{" "}
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 text-sm md:text-lg">
          <button
            className="bg-white outline-none rounded-md px-5 py-2 text-black font-semibold
          hover:bg-[#2B1F51] hover:text-white transition-all duration-500"
          >
            انشاء حساب
          </button>
          <button className="border-[2px] rounded-md px-5 py-2 outline-none">
            عرض الاسعار
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
