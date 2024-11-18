import Image from "next/image";
import React from "react";

const details = [
  "اكتشاف التهديدات المتقدمة والاستجابة لها.",
  "حماية البريد الإلكتروني والأرشفة.",
  "التعافي من الكوارث المستند إلى السحابة.",
  "إدارة ومراقبة مركزية.",
  "إدارة ومراقبة مركزية.",
  "إدارة ومراقبة مركزية.",
];
const Paying: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-14 mt-20 items-center justify-center w-full pb-16 px-8 lg:px-0">
      <p className="text-center text-2xl  tracking-wide font-bold text-[#2B1F51]">
        لا توجد رسوم مخفية، يتم تجديد الاشتراك بنفس سعر الاشتراك.
      </p>
      <div className="flex flex-col md:flex-row   items-center justify-between md:px-20 w-full lg:w-[983px] shadow-md bg-white py-4 rounded-md">
        <Image
          src="/payments.png"
          alt="payments"
          width={343}
          height={49}
          className=""
        />
        <p className=" text-center text-sm md:text-lg text-[#2B1F51]">
          ادفع باستخدام فوري أو أكثر من{" "}
          <span className="font-semibold">20</span> طريقة دفع أخرى
        </p>
      </div>

      <div className="flex flex-wrap w-full lg:w-[1090px] text-end items-center justify-center gap-x-20 gap-y-10">
        {details.map((item: string, index: number) => (
          <div
            key={index}
            className="flex  w-[310px] items-center justify-end   gap-2"
          >
            <p>{item}</p>
            <Image
              src="/planCardTureCheck.svg"
              alt="true check"
              width={25}
              height={25}
            />
          </div>
        ))}
      </div>
      <div>
        <Image src="/paying.png" alt="paying image" width={1444} height={498} />
      </div>
    </div>
  );
};

export default Paying;
