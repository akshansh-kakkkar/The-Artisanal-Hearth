import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/Pizza/Pizzalice";
import Navbar from "./Navbar";

const PizzaOrder = () => {
  const pizzas = useSelector((state)=> state.pizza.pizzas)
  const handleAdd = ((pizza)=>{
    dispatch(addToCart(pizza))
  })
  const dispatch = useDispatch();

  return(
    <>
    <Navbar>PIZZA MENU</Navbar>
    <div className="m-12">
      <div className="heading2-font text-5xl">CRAFT YOUR <span className="text-[#AE131A]">MASTERPIECE</span></div>
    </div>
    </>
  )
};

export default PizzaOrder;
