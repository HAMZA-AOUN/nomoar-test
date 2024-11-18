import Image from "next/image";
import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
const Helping: React.FC = () => {
  return (
    <div
      className="flex flex-col xl:flex-row gap-8 items-center justify-center  mb-20 px-8 xl:mx-auto xl:px-0
      w-full xl:w-[1187px] h-auto xl:h-[552px] pt-12"
    >
      <div className="flex flex-col w-full lg:w-[899px] text-[#2B1F51]  bg-white justify-between gap-8  h-full p-14 shadow-md">
        <div className="flex flex-col  gap-8 items-end justify-center text-end">
          <div className="flex w-full items-center justify-between">
            <BiMinus className="text-xl" />
            <h1 className=" lg:text-xl font-semibold tracking-wider">
              ما هو المُخدّم الافتراضي المخصص؟ (VPS){" "}
            </h1>
          </div>

          <p className="xl:hidden">
            المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا.
            عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل.
            هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول
            العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير
            المرجح أن تتأثر بسلوكهم.
          </p>
          <p className="hidden xl:flex  xl:text-end">
            المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا.
            عندما يكون لديك استضافة VPS <br />، فإن إحدى تلك البيئات مخصصة لك
            بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة{" "}
            <br />
            الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن
            غير المرجح أن تتأثر بسلوكهم.
          </p>
        </div>

        <div className="flex flex-col gap-12 items-center justify-between w-full ">
          <div className="flex w-full items-center justify-between gap-4">
            <BiPlus className="text-xl" />

            <p className="lg:text-xl text-end font-semibold tracking-wider">
              ؟متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة
            </p>
          </div>

          <div className="flex w-full items-center justify-between gap-4">
            <BiPlus className="text-xl" />
            <p className="lg:text-xl text-end font-semibold tracking-wider">
              ما الفرق بين المُخدّم الافتراضي والمُخدّم المخصص؟
            </p>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <BiPlus className="text-xl" />
            <p className="lg:text-xl text-end font-semibold tracking-wider">
              ماهي المواقع المتاحة لاستضافة VPS؟
            </p>
          </div>
        </div>
      </div>

      <div className="flex  flex-col md:flex-row xl:flex-col h-full  items-center justify-between gap-8">
        <div className="flex flex-col items-center justify-center gap-3 w-[246px] h-[248px] bg-white shadow-md p-6">
          <Image
            src="/generalQuestions.svg"
            alt="general questions"
            width={100}
            height={128}
            className="w-28 h-32"
          />
          <h2 className="text-xl font-semibold">الأسئلة الشائعة</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-[246px] h-[248px] bg-white shadow-md p-6">
          <Image
            src="/helpCenter.svg"
            alt="help center"
            width={100}
            height={128}
            className="w-28 h-32"
          />
          <h2 className="text-xl font-semibold">مركز المساعدة</h2>
        </div>
      </div>
    </div>
  );
};

export default Helping;
