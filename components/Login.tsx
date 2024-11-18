"use client";
import React, { useState } from "react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsLogin((prev) => !prev);
        }}
        className="flex items-center justify-center gap-2 bg-[#2B1F51] px-3 py-2 outline-none rounded-md text-white"
      >
        <p>{isLogin ? "client login" : "client logout"}</p>
        {isLogin ? (
          <BiLogOut className="text-xl" />
        ) : (
          <BiLogIn className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default Login;
