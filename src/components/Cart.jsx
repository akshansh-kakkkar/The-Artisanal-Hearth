import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../Features/Pizza/Pizzalice";

const CartPage = () => {
    const dispatch = useDispatch()
  const cart = useSelector((state) => state.pizza.cart);
  const subtotal = cart.reduce((sum, item)=>sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.085;
  const delivery = 50
  const total = subtotal + tax + delivery
  return (
    <>
      <Navbar child="The Artisanal Hearth" />
      <div className="heading2-font mx-12 tracking-widest flex mt-12 text-center  text-5xl text-[#1B1C1C]">
        YOUR BASKET
      </div>
      <div className="flex gap-25">
        <div className="overflow-y-scroll h-[500px] mt-2 rounded-2xl ">
          <div className="flex flex-col gap-2  mx-12 mt-12">
            {cart.map((item, index) => (
              <div key={index} className="bg-[#f7e9d6] items-center flex rounded-xl  w-[800px] h-[160px] relative">
                <img
                  src={item.image}
                  className="h-[140px]  m-4 flex justify-center rounded-xl w-[240px] object-cover"
                  alt={item.name}
                />
                <div className="flex justify-start ml-5 flex-col">
                  <div className="flex justify-between text-center items-center">
                    <div className="flex justify-start  tracking-widest text-2xl heading-font text-[#1E1E1E] mt-3 ">
                      {item.name}
                    </div>
                    <h2 className="text-[#8F4E00] mr-4 text-2xl vietnam-font">
                      ₹{item.price * item.quantity}
                    </h2>
                  </div>
                  <div className="text-sm line-clamp-2 vietnam3-font text-[#5B403D]">
                    {item.description}
                  </div>

                  <div className="text-sm text-[#5B403D]">
                    {item.type === "pizza" &&
                      `${item.size?.type} | ${item.crust?.type}`}
                  </div>
                  <div>
                    <div className="flex outline-none mt-2 ">
                      <div className="flex  bg-[#AE131A] outline-none text-2xl group-hover:bg-[#a5141b]  justify-between  text-center gap-4 py-1 px-2 items-center vietnam-font rounded-xl text-[#FCF9F8] text-md">
                        <button
                          className="cursor-pointer"
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          -
                        </button>
                        <div className="relative h-8 overflow-hidden">
                          <div key={item.quantity} className=" block slideup">{item.quantity}</div>
                        </div>
                        <button className="cursor-pointer "
                          onClick={() => dispatch(increaseQuantity(item))}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <lord-icon
                    className="cursor-pointer"
                    src="https://cdn.lordicon.com/jzinekkv.json"
                    onClick={()=>dispatch(removeItem(item))}
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#911710,secondary:#c71f16"
                    style={{ width: 30, height: 30 }}
                  ></lord-icon>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[420px] h-[540px] rounded-2xl bg-[#f7e9d6]">
          <div className="heading-font text-[#1E1E1E] flex justify-start mx-6 mt-4 text-2xl capitalize">
            SUMMARY
          </div>
          <div className="flex justify-center mt-1">
            <div className="bg-[#1e1e1e43]  h-[0.8px] w-102"></div>
          </div>
          <div className="mt-12 ">
            <div className=" mx-6 justify-between items-center flex">
              <div className="text-[#5C403D] vietnam3-font text-xl">
                Subtotal
              </div>
              <div className="text-[#5C403D] vietnam-font text-xl">₹ {subtotal}</div>
            </div>
            <div className=" mt-5 mx-6 justify-between items-center flex">
              <div className="text-[#5C403D] vietnam3-font text-xl">
                Tax(8.5%)
              </div>
              <div className="text-[#5C403D] vietnam-font text-xl">₹ {tax.toFixed(2)}</div>
            </div>
            <div className=" mt-5 mx-6 justify-between items-center flex">
              <div className="text-[#5C403D] vietnam3-font text-xl">
                Delivery
              </div>
              <div className="text-[#5C403D] vietnam-font text-xl">₹ {delivery.toFixed(2)}</div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="bg-[#1e1e1e43]  h-[0.8px] w-85"></div>
            </div>
            <div className=" mt-5 mx-6 justify-between items-center flex">
              <div className="text-[#5C403D] vietnam3-font text-xl">Total</div>
              <div className="text-[#AE131A] vietnam-font text-xl">₹ {total.toFixed(2)}</div>
            </div>
             <div className="mt-2 mx-7 heading-font">Sides (₹ 60 each)</div>
            <div className="  w-[420px] h-[120px]   flex justify-start items-center">
               
              <div className="bg-white mx-6 rounded-xl flex gap-3 items-center justify-center  w-[180px] h-[90px]">
               
                <img
                  src="/pizzas/garlic-bread.webp"
                  className="w-[70px] flex items-center rounded-2xl mt-2 h-[70px] object-cover"
                  alt=""
                />
                <div className="text-[#AE131A] vietnam-font text-md">
                  Garlic Bread
                </div>
              </div>
              <div className="bg-white mx-6 rounded-xl flex gap-3 items-center justify-center  w-[180px] h-[90px]">
                <img
                  src="/pizzas/coke.webp"
                  className="w-[70px] flex items-center rounded-2xl mt-2 h-[70px] object-cover"
                  alt=""
                />
                <div className="text-[#AE131A] vietnam-font text-md">Coke</div>
              </div>
            </div>
            <div className="flex w-[420px]   justify-center items-center">
              <button className="vietnam-font rounded-2xl  py-4 m-5 w-full bg-[#AE131A] text-white text-xl">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
