import React, {useState} from "react";

const CustomizeModal = ({ pizza, onClose, onAdd }) => {
  const [selectedPizzaSize, setSelectedPizzaSize] = useState(pizza.size?.[0]);
  const [selectedCrust, setSelectedCrust] = useState(pizza.crusts?.[0]);
  const [selectedToppings, setSelectedToppings] = useState([]);
const toggleToppings = (toppings)=>{
    setSelectedToppings((prev)=>prev.includes(toppings)?prev.filter((t)=> t !== toppings): [...prev, toppings])
}

  const total =
    (selectedPizzaSize?.price || 0) +
    (selectedCrust?.price || 0) +
    selectedToppings.reduce((sum, t) => sum + t.price, 0);
  return (
    <>
      <div onClick={()=> onClose()} className="fixed bg-black/50 inset-0 flex items-center justify-center">
        <div onClick={(e)=>e.stopPropagation()} className="rounded-2xl z-100 bg-[#F6F3EE] w-[500px] h-[700px]">
            <div className="flex justify-center overflow-hidden">
                <img src={pizza.image} className="w-[500px] h-[300px] rounded-2xl object-cover scale-90" alt="" />
            </div>
        </div>
          
      </div>
    </>
  );
};

export default CustomizeModal;
