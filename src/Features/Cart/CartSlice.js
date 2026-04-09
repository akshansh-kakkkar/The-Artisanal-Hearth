import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  cart: [],
};

const isSameItem = (a, b) => {
  return (
    a.id === b.id &&
    a.size?.type === b.size?.type &&
    a.crust?.type === b.crust?.type &&
    JSON.stringify(a.toppings || []) === JSON.stringify(b.toppings || [])
  );
};
const pizzaSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existing = state.cart.find((item) => isSameItem(item, newItem));
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({
          ...newItem,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const target = action.payload;
      const item = state.cart.find((p) => isSameItem(p, target));
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const target = action.payload;
      const item = state.cart.find((p) => isSameItem(p, target));
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((p) => !isSameItem(p, target));
      }
    },
    removeItem: (state, action) => {
      const target = action.payload;
      state.cart = state.cart.filter((p) => !isSameItem(p, target));
    },
    clearCart: (state) => {
      state.cart = [];
    },

  },
});

export const {
  setPizzas,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
