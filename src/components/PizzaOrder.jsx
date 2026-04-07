import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/Pizza/Pizzalice";
import Navbar from "./Navbar";

const PizzaOrder = () => {
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const dispatch = useDispatch();
  const handleAdd = (pizza) => {
    dispatch(addToCart(pizza));
  };

  return (
    <>
      <Navbar>PIZZA MENU</Navbar>
      <div className="m-12 flex gap-3 items-start flex-col">
        <div className="heading2-font mx-8 tracking-widest  text-5xl text-[#1B1C1C]">
          CRAFT YOUR <span className="text-[#AE131A]">MASTERPIECE</span>
        </div>
        <div className="w-160 mx-9 text-[#5B403D] vietnam2-font text-lg">
          Select a signature base or build from the crust up. Every pizza is
          hand- stretched and fired at 800°F in our stone hearth.
        </div>
      </div>
      <div className="grid grid-cols-4 justify-center m-12 gap-12 justify-items-center px-12 items-center">
        {pizzas.map((pizza) => {
          const regularSize = pizza.size?.find((s) => s.type === "regular");
          return (
            <div
              key={pizza.id}
              className="w-[320px] shadow-xs shadow-[#5b403d2e] hover:border-2 outline-none transition-all duration-300 hover:scale-[105%] border-[#AE131A] rounded-2xl h-[350px]  bg-[#F6F3F2]"
            >
              <img
                src={pizza.image}
                className="w-[320px] h-[200px] rounded-t-2xl object-cover"
                alt={pizza.name}
              />
              <div className="flex text-md heading-font text-[#AE131A]  justify-between mx-3 m-3">
                <h2>{pizza.name}</h2>
                <h2 className="text-[#8F4E00] vietnam-font">
                  ₹{regularSize?.price}
                </h2>
              </div>
              <p className="mx-3 text-sm line-clamp-2 vietnam3-font text-[#5B403D]  ">
                {pizza.description}
              </p>
              <div className="flex justify-center">
                <button className="bg-[#AE131A] flex  justify-center  items-center text-center gap-5 py-1 px-12 vietnam-font rounded-xl m-2 text-[#FCF9F8] text-md">
                  <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/uisoczqi.json"
                    trigger="loop"
                    stroke="bold"
                    colors="primary:#fcf9f8,secondary:#fcf9f8"
                    style={{width:25, height :25}}
                  ></lord-icon>
                  </span>
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PizzaOrder;
