import React from "react";

const Navbar = ({ children }) => {
  return (
    <div className=" z-10 bg-white shadow-md shadow-[#5b403d2e] sticky top-0  px-8 py-6 flex justify-between items-center">
      <div>
        <img src="/assets/logo.svg" alt="" />
      </div>
      <div className="translate-x-[115px] tracking-widest vietnam-font  text-2xl text-[#AE131A]">
        {children}
      </div>
      <div className="logo-font text-center text-2xl text-[#AE131A]">
        The Artisanal Hearth
      </div>
    </div>
  );
};

export default Navbar;
