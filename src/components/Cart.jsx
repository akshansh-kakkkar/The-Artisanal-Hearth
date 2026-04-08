import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const CartPage = () => {
  return (
    <>
      <Navbar child="The Artisanal Hearth" />
      <div className="heading2-font mx-12 tracking-widest flex mt-12 text-center  text-5xl text-[#1B1C1C]">
        YOUR BASKET
      </div>
      <div className="flex gap-25">
        <div className="overflow-y-scroll h-[500px] mt-2 rounded-2xl ">
          <div className="flex flex-col gap-2  mx-12 mt-12">
            <div className="bg-[#f7e9d6] items-center flex rounded-xl  w-[800px] h-[160px] relative">
              <img
                src="/pizzas/capsicum.webp"
                className="h-[140px]  m-4 flex justify-center rounded-xl w-[240px] object-cover"
                alt="capsicum.webp"
              />
              <div className="flex justify-start ml-5 flex-col">
                <div className="flex justify-between text-center items-center">
                  <div className="flex justify-start  tracking-widest text-2xl heading-font text-[#1E1E1E] mt-3 ">
                    CAPSICUM
                  </div>
                  <h2 className="text-[#8F4E00] mr-4 text-2xl vietnam-font">
                    ₹122
                  </h2>
                </div>
                <div className="text-sm line-clamp-2 vietnam3-font text-[#5B403D]">
                  Classic combination of fresh tomato sauce, mozzarella, and
                  basil, delivering a simple, authentic, and perfectly balanced
                  taste.
                </div>
                <div>
                  <div className="flex outline-none mt-2 ">
                    <div className="flex  bg-[#AE131A] outline-none text-2xl group-hover:bg-[#a5141b]  justify-between  text-center gap-4 py-1 px-2 items-center vietnam-font rounded-xl text-[#FCF9F8] text-md">
                      <button className="cursor-pointer">-</button>
                      <div className="relative h-8 overflow-hidden">
                        <div className=" block slideup">12</div>
                      </div>
                      <button className="cursor-pointer ">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/jzinekkv.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#911710,secondary:#c71f16"
                  style={{ width: 30, height: 30 }}
                ></lord-icon>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5  mx-12 mt-12">
            <div className="bg-[#f7e9d6] items-center flex rounded-xl  w-[800px] h-[160px] relative">
              <img
                src="/pizzas/capsicum.webp"
                className="h-[140px]  m-4 flex justify-center rounded-xl w-[240px] object-cover"
                alt="capsicum.webp"
              />
              <div className="flex justify-start ml-5 flex-col">
                <div className="flex justify-between text-center items-center">
                  <div className="flex justify-start  tracking-widest text-2xl heading-font text-[#1E1E1E] mt-3 ">
                    CAPSICUM
                  </div>
                  <h2 className="text-[#8F4E00] mr-4 text-2xl vietnam-font">
                    ₹122
                  </h2>
                </div>
                <div className="text-sm line-clamp-2 vietnam3-font text-[#5B403D]">
                  Classic combination of fresh tomato sauce, mozzarella, and
                  basil, delivering a simple, authentic, and perfectly balanced
                  taste.
                </div>
                <div>
                  <div className="flex outline-none mt-2 ">
                    <div className="flex  bg-[#AE131A] outline-none text-2xl group-hover:bg-[#a5141b]  justify-between  text-center gap-4 py-1 px-2 items-center vietnam-font rounded-xl text-[#FCF9F8] text-md">
                      <button className="cursor-pointer">-</button>
                      <div className="relative h-8 overflow-hidden">
                        <div className=" block slideup">12</div>
                      </div>
                      <button className="cursor-pointer ">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/jzinekkv.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#911710,secondary:#c71f16"
                  style={{ width: 30, height: 30 }}
                ></lord-icon>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5  mx-12 mt-12">
            <div className="bg-[#f7e9d6] items-center flex rounded-xl  w-[800px] h-[160px] relative">
              <img
                src="/pizzas/capsicum.webp"
                className="h-[140px]  m-4 flex justify-center rounded-xl w-[240px] object-cover"
                alt="capsicum.webp"
              />
              <div className="flex justify-start ml-5 flex-col">
                <div className="flex justify-between text-center items-center">
                  <div className="flex justify-start  tracking-widest text-2xl heading-font text-[#1E1E1E] mt-3 ">
                    CAPSICUM
                  </div>
                  <h2 className="text-[#8F4E00] mr-4 text-2xl vietnam-font">
                    ₹122
                  </h2>
                </div>
                <div className="text-sm line-clamp-2 vietnam3-font text-[#5B403D]">
                  Classic combination of fresh tomato sauce, mozzarella, and
                  basil, delivering a simple, authentic, and perfectly balanced
                  taste.
                </div>
                <div>
                  <div className="flex outline-none mt-2 ">
                    <div className="flex  bg-[#AE131A] outline-none text-2xl group-hover:bg-[#a5141b]  justify-between  text-center gap-4 py-1 px-2 items-center vietnam-font rounded-xl text-[#FCF9F8] text-md">
                      <button className="cursor-pointer">-</button>
                      <div className="relative h-8 overflow-hidden">
                        <div className=" block slideup">12</div>
                      </div>
                      <button className="cursor-pointer ">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/jzinekkv.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#911710,secondary:#c71f16"
                  style={{ width: 30, height: 30 }}
                ></lord-icon>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5  mx-12 mt-12">
            <div className="bg-[#f7e9d6] items-center flex rounded-xl  w-[800px] h-[160px] relative">
              <img
                src="/pizzas/capsicum.webp"
                className="h-[140px]  m-4 flex justify-center rounded-xl w-[240px] object-cover"
                alt="capsicum.webp"
              />
              <div className="flex justify-start ml-5 flex-col">
                <div className="flex justify-between text-center items-center">
                  <div className="flex justify-start  tracking-widest text-2xl heading-font text-[#1E1E1E] mt-3 ">
                    CAPSICUM
                  </div>
                  <h2 className="text-[#8F4E00] mr-4 text-2xl vietnam-font">
                    ₹122
                  </h2>
                </div>
                <div className="text-sm line-clamp-2 vietnam3-font text-[#5B403D]">
                  Classic combination of fresh tomato sauce, mozzarella, and
                  basil, delivering a simple, authentic, and perfectly balanced
                  taste.
                </div>
                <div>
                  <div className="flex outline-none mt-2 ">
                    <div className="flex  bg-[#AE131A] outline-none text-2xl group-hover:bg-[#a5141b]  justify-between  text-center gap-4 py-1 px-2 items-center vietnam-font rounded-xl text-[#FCF9F8] text-md">
                      <button className="cursor-pointer">-</button>
                      <div className="relative h-8 overflow-hidden">
                        <div className=" block slideup">12</div>
                      </div>
                      <button className="cursor-pointer ">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/jzinekkv.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#911710,secondary:#c71f16"
                  style={{ width: 30, height: 30 }}
                ></lord-icon>
              </div>
            </div>
          </div>
        </div>
       <div className="w-[420px] h-[500px] rounded-2xl bg-[#f7e9d6]"></div>
      </div>
    </>
  );
};

export default CartPage;
