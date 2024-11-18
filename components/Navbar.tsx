import Link from "next/link";
import React from "react";
import { LinksMenu } from "./LinksMenu";
import Login from "./Login";
import ToggleLang from "./ToggleLang";

const Navbar: React.FC = () => {
  return (
    <nav className="flex sticky inset-0 z-20 bg-white  w-full h-20 items-center justify-between p-10">
      {/* MOBILE */}
      <div className="flex lg:hidden w-full items-center justify-between ">
        {/* LOGO && LANGUAGE */}
        <div className="flex items-center justify-start gap-4 sm:gap-8">
          <div className="text-3xl font-bold">LOGO</div>
          <div>
            <ToggleLang />
          </div>
        </div>
        {/* LINKS MENU */}
        <div className="text-xl items-center justify-center">
          <LinksMenu />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex w-full items-center justify-between ">
        {/* LOGO AND LANGUAGE BUTTON */}
        <div className="w-1/3  flex items-center justify-start gap-8">
          <div className="text-5xl font-semibold">LOGO</div>
          <div>
            <ToggleLang />
          </div>
        </div>

        {/* LINKS */}
        <div className="w-2/3  flex items-center justify-between xl:justify-end xl:gap-4  ">
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
      </div>
    </nav>
  );
};

export default Navbar;
