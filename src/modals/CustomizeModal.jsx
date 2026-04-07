import React from "react";

const CustomizeModal = ({ pizza, onClose, onAdd }) => {
  const [selectedPizzaSize, setSelectedPizzaSize] = useState(pizza.siz?.[0]);
  const [selectedCrust, setSelectedCrust] = useState(pizza.crust?.[0]);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toggleToppings = (topping) => {
    setSelectedToppings((prev) => {
      prev.includes(topping) ? prev.filter((t) => t !== t) : [...prev, topping];
    });
  };
  const total =
    (selectedPizzaSize?.price || 0) +
    (selectedCrust?.price || 0) +
    selectedToppings.reduce((sum, t) => sum + t.price, 0);
  return (
    <>
      <div className="fixed bg-black/50 inset-0 flex items-center justify-center z-50">
        <div className="rounded-2xl bg-white w-500 h-500">
          <div>
            {pizza.size.map((s) => (
              <button
                key={s.type}
                onClick={() => {
                  setSelectedPizzaSize();
                }}
              >
                {s.type} - {s.price}
              </button>
            ))}
            <button
              onClick={() =>
                onAdd({
                  size: selectedSize,
                  crust: selectedCrust,
                  toppings: selectedToppings,
                  price: total,
                })
              }
              className="bg-[#AE131A] text-white w-full py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {selectedPizza && (
  <PizzaModal
    pizza={selectedPizza}
    onClose={() => setSelectedPizza(null)}
    onAdd={(data) => {
      dispatch(addToCart({
        ...selectedPizza,
        ...data
      }));
      setSelectedPizza(null);
    }}
  />
)}
      </div>
    </>
  );
};

export default CustomizeModal;
