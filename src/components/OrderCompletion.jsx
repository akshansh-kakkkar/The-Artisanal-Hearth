import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const OrderCompletion = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Navbar child="The Artisanal Hearth" />
      <div className="flex flex-col gap-5 justify-center min-h-[85vh]  items-center">
        <div className="flex items-center justify-center">
          {/* <lord-icon
          src="https://cdn.lordicon.com/pkyxcgiq.json"
          trigger="loop"
          colors="primary:#000000,secondary:#c71f16,tertiary:#e83a30,quaternary:#4bb3fd"
          style={{ width: 250, height: 250 }}
        ></lord-icon> */}
          <lord-icon
            src="https://cdn.lordicon.com/imeqmosk.json"
            trigger="loop"
            delay="200"
            state="hover-wobble"
            colors="primary:#c71f16"
            style={{ width: 250, height: 250 }}
          ></lord-icon>
        </div>
        <button
          className="bg-[#AE131A] outline-none items-center  flex group-hover:bg-[#a5141b]  justify-center  text-center hover:scale-[95%] gap-2 py-4 px-12 vietnam-font rounded-xl  text-[#FCF9F8] text-xl transition-all duration-300"
          onClick={() => Navigate("/")}
        >
          Back To Menu
        </button>
      </div>
    </>
  );
};

export default OrderCompletion;
