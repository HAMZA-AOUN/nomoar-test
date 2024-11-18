"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Login from "./Login";

export const LinksMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="text-xl"
      >
        {isMenuOpen ? <CgClose /> : <BiMenu />}
      </button>
      {isMenuOpen && (
        <div
          className="absolute bg-gray-200 top-20 left-0 flex flex-col items-center justify-center gap-8 w-full h-[calc(100vh-80px)]
         overflow-hidden z-50 "
        >
          <Link href="#Demos">Demos</Link>
          <Link href="#Hosting">Hosting</Link>
          <Link href="#ProHosting">ProHosting</Link>
          <Link href="#Domains">Domains</Link>
          <Link href="#NeedHelp">NeedHelp?</Link>
          <Link href="#Pages">Pages</Link>
          <Link href="#ContactUs">Contact Us</Link>
          <Link href="#login">
            <Login />
          </Link>
        </div>
      )}
    </div>
  );
};
