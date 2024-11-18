import Image from "next/image";
import React from "react";
import FeatureCard from "./FeatureCard";
import Feature2Card from "./Feature2Card";

interface Features {
  image: string;
  title: string;
  desc: string;
}

const features: Features[] = [
  {
    image: "/security-icon.svg",
    title: "الحماية من عمليّات الاختراق والبرامج الخبيثة",
    desc: "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
  },
  {
    image: "/performance-icon.svg",
    title: "التخفيف من هجمات DDoS",
    desc: "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
  },
  {
    image: "/SEO-icon.svg",
    title: "تحسين أداء الموقع عبر CDN",
    desc: "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.",
  },
  {
    image: "/growth-icon.svg",
    title: "الحماية من عمليّات الاختراق والبرامج الخبيثة",
    desc: "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
  },
  {
    image: "/DDOS-icon.svg",
    title: "التخفيف من هجمات DDoS",
    desc: "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
  },
  {
    image: "/CDN-icon.svg",
    title: "تحسين أداء الموقع عبر CDN",
    desc: "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.",
  },
];

const features2: Features[] = [
  {
    image: "/recognize.svg",
    title: "التعرف",
    desc: "على الثغرات الأمنية في البنية التحتية لتكنولوجيا المعلومات لديك وإجراء الاكتشاف التلقائي للأجهزة في شبكتك",
  },
  {
    image: "/protect.svg",
    title: "الحماية",
    desc: " بإستخدام أفضل الممارسات في مجال الأمان والإدارة وتحديثات البرامج والمزيد",
  },
  {
    image: "/Verification.svg",
    title: "التحقق",
    desc: "من التهديدات وتوفير دفاعات قوية ضد البرامج الضارة / برامج الفدية",
  },
  {
    image: "/response.svg",
    title: "الاستجابة",
    desc: " السريعة باستخدام تنبيهات مركز عمليات الحماية الإلكترونية والدعم في حالة حدوث هجوم إلكتروني",
  },
  {
    image: "/recover.svg",
    title: "استعادة",
    desc: "يمكننا بسرعة معالجة واستعادة البيانات والأنظمة المفقودة عن بُعد مع التحقق من سبب حدوث المشكلة",
  },
];

const Significant: React.FC = () => {
  return (
    <div className="flex flex-col relative w-full h-auto items-center ">
      <Image
        src="/significant.png"
        alt="header image"
        width={1440}
        height={986}
        className="object-cover absolute  "
      />
      <div className="w-full h-32"></div>
      <div className="flex items-center justify-center text-2xl lg:text-4xl font-semibold text-[#2B1F51] w-full pt-36 z-10 lg:pt-72 pb-10">
        {" "}
        ما الذي يميز
      </div>

      <div className="flex flex-wrap w-full lg:w-[1168px] items-center justify-center gap-4 z-10 px-6 lg:px-0  mb-16  ">
        {features.map((feature, index) => (
          <div key={index}>
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap-reverse w-full  lg:w-[1120px] items-center justify-center  gap-8  pt-12 mb-16 px-6 lg:px-0  ">
        {features2.map((feature2, index) => (
          <div key={index}>
            <Feature2Card feature2={feature2} />
          </div>
        ))}
        <div className="flex  max-w-[340px] h-[155px]  items-center  ">
          <p className=" text-end text-lg   leading-7 font-light ">
            يتوافق Acronis مع إطار عمل المعهد الوطني للمعايير والتكنولوجيا
            (NIST) ، والذي يتكون من خمسة مبادئ لحماية عملك{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Significant;
