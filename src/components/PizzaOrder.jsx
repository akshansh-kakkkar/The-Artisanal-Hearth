import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../Features/Pizza/Pizzalice";
import Navbar from "./Navbar";
import CustomizeModal from "../modals/CustomizeModal";
import { useNavigate } from "react-router-dom";

const PizzaOrder = () => {
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const Navigate = useNavigate()
  const cart = useSelector((state) => state.pizza.cart);

  const dispatch = useDispatch();
  const handleAdd = (pizza) => {
    dispatch(addToCart(pizza));
  };
  const [selectedPizza, setSelectedPizza] = useState(null);
  return (
    <>
      <Navbar child={<img src="/assets/cart.svg" onClick={()=>Navigate("/cart")} className="w-[40px] cursor-pointer" alt="cart"/>}>PIZZA MENU</Navbar>
      <div className="my-12 mx-3 flex gap-3 justify-center sm:justify-start text-center items-start flex-col">
        <div className="heading2-font mx-8 tracking-widest text-center  text-5xl text-[#1B1C1C]">
          CRAFT YOUR <span className="text-[#AE131A]">MASTERPIECE</span>
        </div>
        <div className="sm:w-160 flex text-left flex-wrap mx-9 text-[#5B403D] vietnam2-font text-lg">
          Select a signature base or build from the crust up. Every pizza is
          hand- stretched and fired at 800°F in our stone hearth.
        </div>
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center my-6 gap-12 justify-items-center px-12 items-center">
        {pizzas.map((pizza) => {
          const regularSize = pizza.size?.find((s) => s.type === "regular");
          const totalQty = cart
            .filter((item) => item.id === pizza.id)
            .reduce((sum, item) => sum + item.quantity, 0);
          return (
            <div
              key={pizza.id}
              onClick={() => {
                setSelectedPizza(pizza);
              }}
              className="w-[320px] cursor-pointer  group relative  shadow-xs  overflow-hidden shadow-[#5b403d2e] hover:border-2 outline-none transition-all duration-300 hover:scale-[105%] border-[#AE131A] rounded-2xl h-[350px]  bg-[#F6F3F2]"
            >
              <div
                className="relative w-full group"
                onClick={() => {
                  setSelectedPizza(pizza);
                }}
              >
                <div className="absolute top-3 flex   items-center justify-center right-3 z-10 w-10 h-10 opacity-0 group-hover:opacity-100 bg-[#f8f1ef] rounded-full transition-opacity duration-300">
                  <img
                    src="/assets/red-arrow.svg"
                    width={22}
                    height={22}
                    className=""
                    alt=""
                  />
                </div>
                <img
                  src={pizza.image}
                  onClick={() => {
                    setSelectedPizza(pizza);
                  }}
                  className="w-full  h-[200px]  group-hover:scale-[105%] transition-all duration-300 rounded-t-2xl object-cover"
                  alt={pizza.name}
                />
              </div>
              <div className="flex outline-none text-md heading-font text-[#AE131A]  justify-between mx-3 m-3">
                <h2>{pizza.name}</h2>
                <h2 className="text-[#8F4E00] vietnam-font">
                  ₹{regularSize?.price}
                </h2>
              </div>
              <p className="mx-3 outline-none text-sm line-clamp-2 vietnam3-font text-[#5B403D]  ">
                {pizza.description}
              </p>
              <div className="flex outline-none justify-center">
                {totalQty > 0 ? (
                  <div className="flex bg-[#AE131A] outline-none text-2xl group-hover:bg-[#a5141b]  justify-between  items-center text-center gap-8 py-1 px-18 vietnam-font rounded-xl m-2  text-[#FCF9F8] text-md">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                          decreaseQuantity({
                            id: pizza.id,
                            size: "regular",
                            crust: pizza.crusts[0].type,
                          }),
                        );
                      }}
                      className="cursor-pointer"
                    >
                      -
                    </button>
                    <div className="relative h-8 overflow-hidden">
                      <div key={totalQty} className=" block slideup">
                        {totalQty}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                          increaseQuantity({
                            id: pizza.id,
                            size: "regular",
                            crust: pizza.crusts[0].type,
                          }),
                        );
                      }}
                      className="cursor-pointer "
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPizza(pizza);
                    }}
                    className="bg-[#AE131A] outline-none items-center  flex group-hover:bg-[#a5141b]  justify-center  text-center gap-2 py-1 px-12 vietnam-font rounded-xl m-2 text-[#FCF9F8] text-md"
                  >
                    <span>
                      <lord-icon
                        src="https://cdn.lordicon.com/uisoczqi.json"
                        trigger="loop"
                        stroke="bold"
                        colors="primary:#fcf9f8,secondary:#fcf9f8"
                        style={{ width: 25, height: 25 }}
                      ></lord-icon>
                    </span>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {selectedPizza && (
        <CustomizeModal
          pizza={selectedPizza}
          onClose={() => setSelectedPizza(null)}
          onAdd={(data) => {
            dispatch(
              addToCart({
                ...selectedPizza,
                ...data,
              }),
              // toast.success(`${}`)
            );
          }}
        />
      )}
    </>
  );
};

export default PizzaOrder;
