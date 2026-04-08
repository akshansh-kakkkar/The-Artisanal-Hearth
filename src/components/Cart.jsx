import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const CartPage = () => {
  return (
    <>
      <Navbar child="The Artisanal Hearth" />
      <div className="heading2-font mx-12 tracking-widest flex mt-12 text-center  text-5xl text-[#1B1C1C]">
        YOUR BASKET
      </div>
      <div className="flex justify-start mx-12 mt-12">
        <div className="bg-[#ffffff] rounded-xl  w-[800px] h-[200px]"></div>
      </div>
    </>
  );
};

export default CartPage;
