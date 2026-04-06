import React from "react";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";

const UserForm = () => {
  const Dispatch = useDispatch();
  return (
    <>
      <div className="bg-[#f8f1ef] min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-[80vh]">
          <div className=" w-[80vw] relative mt-16 flex justify-center">
            <div className="bg-white  w-[80vw] h-[80vh] rounded-lg shadow-md overflow-hidden">
              
              <div className="absolute w-[600px]  rounded-l-xl bg-center pointer-events-none object-cover bg-[url('/assets/pizza-bg.jpeg')] h-full">
              <div className="absolute inset-0 bg-black/40 rounded-l-xl"></div>
              <div className="bg-[#e1e1e14f] gap-3 flex items-center text-center justify-around p-2 border-[#ffffff9c] border-2 w-55  h-20 mt-4 m-5 rounded-xl">
                <div className="z-1234">
                  <img src="/assets/logo.svg" alt="logo" />
                </div>
                <div className="z-1234 ">
                  <h1 className="text-[#f8f1ef] vietnam-font ">Top Rated Backery </h1>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default UserForm;
