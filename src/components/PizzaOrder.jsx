import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/Pizza/Pizzalice";
import Navbar from "./Navbar";

const PizzaOrder = () => {
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const handleAdd = (pizza) => {
    dispatch(addToCart(pizza));
  };
  const dispatch = useDispatch();

  return (
    <>
      <Navbar>PIZZA MENU</Navbar>
      <div className="m-12 flex gap-3 items-start flex-col">
        <div className="heading2-font tracking-widest  text-5xl text-[#1B1C1C]">
          CRAFT YOUR <span className="text-[#AE131A]">MASTERPIECE</span>
        </div>
        <div className="w-160 text-[#5B403D] vietnam2-font text-lg">
          Select a signature base or build from the crust up. Every pizza is
          hand- stretched and fired at 800°F in our stone hearth.
        </div>
      </div>
      <div className="grid grid-cols-4 justify-center gap-12 justify-items-center px-12 items-center">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="w-[300px] rounded-2xl h-[320px] bg-[#F6F3F2]">
            <img
              src={pizza.image}
              className="w-[300px] h-[200px] rounded-t-2xl object-cover"
              alt={pizza.name}
            />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PizzaOrder;
