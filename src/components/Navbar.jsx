import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full z-10 bg-white shadow-md shadow-[#5b403d2e] px-8 py-6 flex items-center justify-between">
      <div>
        <img src="/assets/logo.svg" alt="" />
      </div>
      <div className="logo-font text-2xl text-[#AE131A]">
        The Artisanal Hearth
      </div>
    </div>
  );
};

export default Navbar;
