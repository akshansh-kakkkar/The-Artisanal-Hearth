import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children,child }) => {
  const Navigate = useNavigate()
  return (
    <div className=" z-10 bg-white shadow-md shadow-[#5b403d2e] sticky top-0  px-8 py-6 flex justify-between items-center">
      <div  className="cursor-pointer hover:scale-[105%] transition-all duration-300">
        <img onClick={()=>Navigate('/')}  src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="translate-x-[115px] tracking-widest vietnam-font  text-2xl text-[#AE131A]">
        {children}
      </div>
      <div className="logo-font text-center text-2xl text-[#AE131A]">
        {child}
      </div>
    </div>
  );
};

export default Navbar;
