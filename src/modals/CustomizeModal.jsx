import React, { useState } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../Features/Pizza/Pizzalice";
import { useDispatch, useSelector } from "react-redux";
const CustomizeModal = ({ pizza, onClose, onAdd }) => {
  const [selectedPizzaSize, setSelectedPizzaSize] = useState(pizza.size?.[0]);
  const [selectedCrust, setSelectedCrust] = useState(pizza.crusts?.[0]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const cart = useSelector((state) => state.pizza.cart);
  const dispatch = useDispatch();
  const toggleToppings = (toppings) => {
    setSelectedToppings((prev) =>
      prev.includes(toppings)
        ? prev.filter((t) => t !== toppings)
        : [...prev, toppings],
    );
  };
 
  const cartItem = cart.find(
    (item) =>
      item.id === pizza.id &&
      item.size?.type === selectedPizzaSize?.type &&
      item.crust?.type === selectedCrust?.type,
  );
   const quantity = cartItem?.quantity || 1;
  const total =
    (selectedPizzaSize?.price || 0) +
    (selectedCrust?.price || 0) +
    selectedToppings.reduce((sum, t) => sum + t.price, 0)
  const finalPrice = total * quantity
  return (
    <>
      <div
        onClick={() => onClose()}
        className="fixed z-100 bg-black/50 inset-0 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="rounded-2xl z-100 bg-[#F6F3EE] w-[510px] h-[720px]"
        >
          <div className="flex justify-between items-center mx-6 vietnam-font text-[#8F4E00] tracking-widest text-2xl items-center mt-3">
            <div>BUILD YOUR MASTERPIECE</div>
            <div
              onClick={() => onClose()}
              className="hover:scale-[85%] transition-all duration-300"
            >
              <img src="/assets/cross.svg" alt="" width={20} />
            </div>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              src={pizza.image}
              className="w-[500px] h-[300px] rounded-2xl object-cover scale-90"
              alt=""
            />
          </div>
          <div className="flex mx-7 justify-between text-center items-center">
            <h2 className="flex justify-left  items-left heading-font text-[#AE131A]   text-2xl">
              {pizza.name}
            </h2>
            <h2 className="flex justify-left  items-left  text-[#8F4E00] vietnam-font   text-2xl">
              ₹ {pizza?.size?.[0]?.price}
            </h2>
          </div>
          <div className="flex justify-center text-left ml-7 items-center  vietnam-font text-[#5B403D] text-sm">
            {pizza.description}
          </div>
          <div className="mt-2">
            <p className="font-semibold text-[#AE131A] mx-6 mb-2  heading2-font text-md">
              Choose Size
            </p>
            <div className="flex gap-1 flex-wrap mx-6  duration-500">
              {pizza.size.map((s) => (
                <button
                  value={s.type}
                  onClick={() => setSelectedPizzaSize(s)}
                  className={`transition-all text-[#5B403D] px-3 vietnam-font py-1 border rounded-lg ${selectedPizzaSize?.type === s.type ? "bg-[#AE131A] text-white" : ""}`}
                >
                  {s.type}&nbsp; ₹ {s.price}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-[#AE131A] mx-6 mb-2  heading2-font text-md">
              Choose Crust
            </p>
            <div className="flex gap-1 flex-wrap mx-6  duration-500">
              {pizza.crusts.map((c) => (
                <button
                  value={c.type}
                  onClick={() => setSelectedCrust(c)}
                  className={`transition-all text-[#5B403D] px-3 vietnam-font py-1 border rounded-lg ${selectedCrust?.type === c.type ? "bg-[#AE131A] text-white" : ""}`}
                >
                  {c.type}&nbsp; +₹ {c.price}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-[#AE131A] mx-6 mb-2  heading2-font text-md">
              Choose Toppings
            </p>
            <div className="flex gap-1 flex-wrap mx-6  duration-500">
              {pizza.toppings.map((t) => (
                <button
                  value={t.type}
                  onClick={() => toggleToppings(t)}
                  className={`transition-all text-[#5B403D] px-3 vietnam-font py-1 border rounded-full ${selectedToppings.includes(t) ? "bg-[#AE131A] text-white" : ""}`}
                >
                  {t.type}&nbsp; +₹ {t.price}
                </button>
              ))}
            </div>
          </div>
          <div className="flex mx-6 mt-2  justify-between items-center text-center ">
            {cartItem ? (
              <div className="bg-[#AE131A] outline-none flex group-hover:bg-[#a5141b]  justify-center  items-center text-center gap-5 py-1 px-12 vietnam-font rounded-xl m-2 text-[#FCF9F8] text-md">
                <button onClick={() => dispatch(decreaseQuantity(pizza.id))}>
                  -
                </button>
                <div>{cartItem.quantity}</div>
                <button onClick={() => dispatch(increaseQuantity(pizza.id))}>
                  +
                </button>
              </div>
            ) : (
              <button
                className="bg-[#AE131A] h outline-none flex hover:bg-[#a5141b]  justify-center  items-center text-center gap-5 py-1 px-4 vietnam-font rounded-xl m-2 text-[#FCF9F8] text-md"
                onClick={() => {
                  onAdd({
                    size: selectedPizzaSize,
                    crust: selectedCrust,
                    toppings: selectedToppings,
                    price: total,
                  });
                }}
              >
                {" "}
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/uisoczqi.json"
                    trigger="loop"
                    stroke="bold"
                    colors="primary:#fcf9f8,secondary:#fcf9f8"
                    style={{ width: 25, height: 25 }}
                  ></lord-icon>
                </span>
                Add
              </button>
            )}

            <div className="text-[#8F4E00] vietnam-font">
              Total : <span>₹ {finalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeModal;
