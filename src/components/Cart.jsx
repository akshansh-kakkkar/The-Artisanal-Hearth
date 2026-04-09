import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  toggleExtraInCart,
} from "../Features/Pizza/Pizzalice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.pizza.cart);
  const isGarlicBreadSelected = cart.some(
    (item) => item.name === "Garlic Bread" && item.type === "extra",
    
  );
  const isCokeSelected = cart.some(
    (item) => item.name === "Coke" && item.type === "extra",
  );
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.085;
  const delivery = 50;
  const total = subtotal + tax + delivery;
  return (
    <>
      <Navbar child="The Artisanal Hearth" />
      {cart.length === 0 ? (
        <div className="flex flex-col gap-8 sm:gap-16 items-center px-4">
          <lord-icon
            className="-translate-y-[66px]"
            src="https://cdn.lordicon.com/qfijwmqj.json"
            trigger="loop"
            colors="primary:#911710,secondary:#911710"
            style={{ width: '100%', maxWidth: 450, height: 'auto', aspectRatio: '1/1' }}
          ></lord-icon>
          <button
            className="bg-[#AE131A] outline-none items-center flex group-hover:bg-[#a5141b] justify-center text-center hover:scale-[95%] gap-2 py-4 px-8 sm:px-12 vietnam-font rounded-xl text-[#FCF9F8] text-lg sm:text-xl transition-all duration-300"
            onClick={() => Navigate("/pizza-menu")}
          >
            Back To Menu
          </button>
        </div>
      ) : (
        <div>
          <div className="heading2-font mx-4 sm:mx-12 tracking-widest flex mt-6 sm:mt-12 text-center text-2xl sm:text-5xl text-[#1B1C1C]">
            YOUR BASKET
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-25 px-4 lg:px-0">
            <div className="overflow-y-auto max-h-[500px] mt-2 rounded-2xl w-full lg:w-auto">
              <div className="flex flex-col gap-2 mx-0 sm:mx-4 lg:mx-12 mt-4 sm:mt-12">
                {cart.map((item, index) => {
                  if (item.type === "extra") {
                    return (
                      <div
                        key={index}
                        className="bg-[#f7e9d6] flex flex-col sm:flex-row items-center justify-between rounded-xl w-full max-w-[800px] min-h-[90px] p-4 gap-3"
                      >
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <img
                            src={item.image}
                            className="w-[60px] h-[60px] rounded-xl object-cover"
                            alt={item.name}
                          />
                          <div className="flex-1">
                            <div className="text-lg heading-font">
                              {item.name}
                            </div>
                            <div className="text-sm text-[#5B403D]">
                              {item.description}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                          <div className="text-[#8F4E00]">
                            ₹{item.price * item.quantity}
                          </div>
                          <div className="flex bg-[#AE131A] px-2 py-1 rounded-xl text-white">
                            <button
                              onClick={() => dispatch(decreaseQuantity(item))}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              onClick={() => dispatch(increaseQuantity(item))}
                            >
                              +
                            </button>
                          </div>

                          <button onClick={() => dispatch(removeItem(item))}>
                            <lord-icon
                              className="cursor-pointer"
                              src="https://cdn.lordicon.com/jzinekkv.json"
                              trigger="hover"
                              stroke="bold"
                              colors="primary:#911710,secondary:#c71f16"
                              style={{ width: 30, height: 30 }}
                            ></lord-icon>
                          </button>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={index}
                      className="bg-[#f7e9d6] items-center flex flex-col sm:flex-row rounded-xl w-full max-w-[800px] min-h-[160px] relative p-4 sm:p-0"
                    >
                      <img
                        src={item.image}
                        className="h-[140px] sm:m-4 flex justify-center rounded-xl w-full sm:w-[240px] object-cover"
                        alt={item.name}
                      />
                      <div className="flex justify-start sm:ml-5 flex-col w-full">
                        <div className="flex justify-between text-center items-center w-full">
                          <div className="flex justify-start tracking-widest text-xl sm:text-2xl heading-font text-[#1E1E1E] mt-3">
                            {item.name}
                          </div>
                          <h2 className="text-[#8F4E00] mr-0 sm:mr-4 text-xl sm:text-2xl vietnam-font">
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
                                <div
                                  key={item.quantity}
                                  className=" block slideup"
                                >
                                  {item.quantity}
                                </div>
                              </div>
                              <button
                                className="cursor-pointer "
                                onClick={() => dispatch(increaseQuantity(item))}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
                        <lord-icon
                          className="cursor-pointer"
                          src="https://cdn.lordicon.com/jzinekkv.json"
                          onClick={() => dispatch(removeItem(item))}
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#911710,secondary:#c71f16"
                          style={{ width: 30, height: 30 }}
                        ></lord-icon>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-[420px] min-h-[540px] rounded-2xl bg-[#f7e9d6] mb-8 lg:mb-0">
              <div className="heading-font text-[#1E1E1E] flex justify-start mx-4 sm:mx-6 mt-4 text-xl sm:text-2xl capitalize">
                SUMMARY
              </div>
              <div className="flex justify-center mt-1">
                <div className="bg-[#1e1e1e43] h-[0.8px] w-[90%]"></div>
              </div>
              <div className="mt-8 sm:mt-12">
                <div className="mx-4 sm:mx-6 justify-between items-center flex">
                  <div className="text-[#5C403D] vietnam3-font text-lg sm:text-xl">
                    Subtotal
                  </div>
                  <div className="text-[#5C403D] vietnam-font text-lg sm:text-xl">
                    ₹ {subtotal}
                  </div>
                </div>
                <div className="mt-4 sm:mt-5 mx-4 sm:mx-6 justify-between items-center flex">
                  <div className="text-[#5C403D] vietnam3-font text-lg sm:text-xl">
                    Tax(8.5%)
                  </div>
                  <div className="text-[#5C403D] vietnam-font text-lg sm:text-xl">
                    ₹ {tax.toFixed(2)}
                  </div>
                </div>
                <div className="mt-4 sm:mt-5 mx-4 sm:mx-6 justify-between items-center flex">
                  <div className="text-[#5C403D] vietnam3-font text-lg sm:text-xl">
                    Delivery
                  </div>
                  <div className="text-[#5C403D] vietnam-font text-lg sm:text-xl">
                    ₹ {delivery.toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-center mt-4 sm:mt-5">
                  <div className="bg-[#1e1e1e43] h-[0.8px] w-[85%]"></div>
                </div>
                <div className="mt-4 sm:mt-5 mx-4 sm:mx-6 justify-between items-center flex">
                  <div className="text-[#5C403D] vietnam3-font text-lg sm:text-xl">
                    Total
                  </div>
                  <div className="text-[#AE131A] vietnam-font text-lg sm:text-xl">
                    ₹ {total.toFixed(2)}
                  </div>
                </div>
                <div className="mt-2 mx-4 sm:mx-7 heading-font">Sides (₹ 60 each)</div>
                <div className="w-full h-auto flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-0 py-4">
                  <div
                    onClick={() =>{
                      dispatch(
                        toggleExtraInCart({
                          id: "garlic-bread",
                          name: "Garlic Bread",
                          price: 60,
                          image: "/pizzas/garlic-bread.webp",
                          description: "Refreshing cold drink",
                          type: "extra",
                        }),
                        
                      )
                      if(!isGarlicBreadSelected){
                        toast.success("Garlic Bread Added Successfully")
                      }
                      else{
                        toast.error(
                          "Garlic Bread Removed Successfully"
                        )
                      }
                      }  
                    }
                    className={`bg-white mx-4 sm:mx-6 rounded-xl flex gap-3 items-center justify-center w-full sm:w-[180px] h-[90px] cursor-pointer
    ${isGarlicBreadSelected ? "border-2 border-red-600 bg-red-50" : ""}
  `}
                  >
                    <img
                      src="/pizzas/garlic-bread.webp"
                      className="w-[70px] flex items-center rounded-2xl mt-2 h-[70px] object-cover"
                      alt=""
                    />
                    <div className="text-[#AE131A] vietnam-font text-md">
                      Garlic Bread
                    </div>
                  </div>
                  <div
                    onClick={() =>{
                      dispatch(
                        toggleExtraInCart({
                          id: "coke",
                          name: "Coke",
                          price: 60,
                          image: "/pizzas/coke.webp",
                          description: "Refreshing cold drink",
                          type: "extra",
                        }),
                      )
                      if(!isCokeSelected){
                        toast.success('Coke Added Successfully')
                      }
                      else{
                        toast.error('Coke removed Successfully')
                      }
                    }}
                    className={`bg-white mx-4 sm:mx-6 rounded-xl flex gap-3 items-center justify-center w-full sm:w-[180px] h-[90px] cursor-pointer
    ${isCokeSelected ? "border-2 border-red-600 bg-red-50" : ""}
  `}
                  >
                    <img
                      src="/pizzas/coke.webp"
                      className="w-[70px] flex items-center rounded-2xl mt-2 h-[70px] object-cover"
                      alt=""
                    />
                    <div className="text-[#AE131A] vietnam-font text-md">
                      Coke
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center px-4 sm:px-0">
                  <button
                    onClick={() =>{
                      const id = toast.loading('Placing Order');
                      setTimeout(() => {
                        toast.success("Order Placed Successfully", {id});
                        Navigate("/order-completed")
                      }, 1000);
                    }}
                    className="vietnam-font cursor-pointer hover:scale-[95%] transition-all duration-300 rounded-2xl py-4 m-5 w-full bg-[#AE131A] text-white text-xl"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
