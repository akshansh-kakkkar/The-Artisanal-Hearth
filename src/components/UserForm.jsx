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
                <div className="flex flex-col w-full h-[75vh] items-start justify-between m-6 z-50000">
                  <div className="bg-[#e1e1e14f] gap-3 flex items-center text-center justify-around p-2 border-[#ffffff9c] border-2 w-55  h-20 mt-4 m-5 rounded-xl">
                    <div className="z-1234">
                      <img src="/assets/logo.svg" alt="logo" />
                    </div>
                    <div className="z-1234 ">
                      <h1 className="text-[#f8f1ef] vietnam-font ">
                        Top Rated Backery{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 z-444 bottom-5 m-6">
                    <div className="text-[#f8f1ef]  vietnam2-font text-lg">
                      The Artisian Heart
                    </div>
                    <div className="w-88 heading-font text-[#AE131A] text-4xl ">
                      Mastering the Art of{" "}
                      <span className=" text-[#f8f1ef]">
                        Slow Fermentation.
                      </span>
                    </div>
                    <div className="text-md vietnam3-font text-[#f8f1ef] w-90">
                      Join our community of dough enthusiasts and get exclusive
                      access to our seasonal hearth releases.
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ml-127 mt-12  flex justify-center">
                <form action="">
                  <div  className="flex flex-col  gap-2 justify-center items-cen">
                    <h1 className="text-3xl text-[#1B1C1C] heading2-font">Create Your Account</h1>
                    <p className="text-[#5B403D] vietnam2-font">&nbsp;Already a member? order <span className="text-[#AE131A] underline underline-offset-2">here</span></p>
                  </div>
                  <div className="mt-12 flex flex-col gap-3  w-[30vw]">
                    <label htmlFor="" className="text-[#5B403D] vietnam-font">Full Name</label>
                    <input type="text" placeholder="John Doe"  className="outline-none py-3 px-4 vietnam2-font text-[#8F6F6C]  bg-[#F6F3F2] rounded-2xl w-full  "/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
