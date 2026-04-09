import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children, child }) => {
  const Navigate = useNavigate();
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between gap-3 bg-white px-4 py-4 shadow-md shadow-[#5b403d2e] sm:px-6 lg:px-8">
      <div className="shrink-0 cursor-pointer transition-all duration-300 hover:scale-[105%]">
        <img
          onClick={() => Navigate("/")}
          src="/assets/logo.svg"
          alt="logo"
          className="h-9 w-auto sm:h-10"
        />
      </div>
      <div className="hidden flex-1 text-center tracking-[0.2em] vietnam-font text-lg text-[#AE131A] md:block lg:text-2xl">
        {children}
      </div>
      <div className="max-w-[55%] text-right text-sm logo-font text-[#AE131A] sm:text-lg md:max-w-none md:text-center md:text-2xl">
        {child}
      </div>
    </div>
  );
};

export default Navbar;
