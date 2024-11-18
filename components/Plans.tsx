import Image from "next/image";
import React from "react";
import PlanCard from "./PlanCard";

interface Plan {
  title: string;
  price: string;
  color: string;
  details: string[];
}

const plans: Plan[] = [
  {
    title: "P3-HOST",
    price: "91.30",
    color: "#69A0E0",
    details: [
      "أكثر من مخدم تعمل بتوازن",
      "العديد من أنواع سجلات DNS",
      "سهلة الإستخدام\n(Powered By PowerDNS)",

      "سريعة التحديث لجميع أنواع السجلات",
      "مراقبة دائمة",
      "يمكنك الحصول على الخدمة حتى إن لم يكن اسم النطاق مسجل عن طريق العنكبوت الليبي.",
    ],
  },
  {
    title: "P3-HOST",
    price: "91.30",
    color: "#C6CDE0",
    details: [
      "أكثر من مخدم تعمل بتوازن",
      "العديد من أنواع سجلات DNS",
      "سهلة الإستخدام\n(Powered By PowerDNS)",

      "سريعة التحديث لجميع أنواع السجلات",
      "مراقبة دائمة",
      "يمكنك الحصول على الخدمة حتى إن لم يكن اسم النطاق مسجل عن طريق العنكبوت الليبي.",
    ],
  },
  {
    title: "P3-HOST",
    price: "91.30",
    color: "#FBE06B",
    details: [
      "أكثر من مخدم تعمل بتوازن",
      "العديد من أنواع سجلات DNS",
      "سهلة الإستخدام\n(Powered By PowerDNS)",

      "سريعة التحديث لجميع أنواع السجلات",
      "مراقبة دائمة",
      "يمكنك الحصول على الخدمة حتى إن لم يكن اسم النطاق مسجل عن طريق العنكبوت الليبي.",
    ],
  },
  {
    title: "P3-HOST",
    price: "91.30",
    color: "#69A0E0",
    details: [
      "أكثر من مخدم تعمل بتوازن",
      "العديد من أنواع سجلات DNS",
      "سهلة الإستخدام\n(Powered By PowerDNS)",

      "سريعة التحديث لجميع أنواع السجلات",
      "مراقبة دائمة",
      "يمكنك الحصول على الخدمة حتى إن لم يكن اسم النطاق مسجل عن طريق العنكبوت الليبي.",
    ],
  },
  {
    title: "P3-HOST",
    price: "91.30",
    color: "#C6CDE0",
    details: [
      "أكثر من مخدم تعمل بتوازن",
      "العديد من أنواع سجلات DNS",
      "سهلة الإستخدام\n(Powered By PowerDNS)",

      "سريعة التحديث لجميع أنواع السجلات",
      "مراقبة دائمة",
      "يمكنك الحصول على الخدمة حتى إن لم يكن اسم النطاق مسجل عن طريق العنكبوت الليبي.",
    ],
  },
  {
    title: "P3-HOST",
    price: "91.30",
    color: "#FBE06B",
    details: [
      "أكثر من مخدم تعمل بتوازن",
      "العديد من أنواع سجلات DNS",
      "سهلة الإستخدام\n(Powered By PowerDNS)",

      "سريعة التحديث لجميع أنواع السجلات",
      "مراقبة دائمة",
      "يمكنك الحصول على الخدمة حتى إن لم يكن اسم النطاق مسجل عن طريق العنكبوت الليبي.",
    ],
  },
];

const Plans: React.FC = () => {
  return (
    <div className="flex flex-col relative w-full h-auto items-center ">
      <Image
        src="/plans.png"
        alt="header image"
        width={1590}
        height={636}
        className="object-cover absolute "
      />
      <div className="flex flex-wrap  w-full lg:w-[1090px] items-center justify-center gap-20 pt-52 lg:pt-96  ">
        {plans.map((plan, index) => (
          <div key={index}>
            <PlanCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
