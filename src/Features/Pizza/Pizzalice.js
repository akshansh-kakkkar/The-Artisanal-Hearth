import { createSlice } from "@reduxjs/toolkit";
const PizzaCustom = [
  {
    id: 2,
    name: "Bell Pepper Delight",
    image: "/pizzas/capsicum.webp",
    tag : "popular",
    description : "Freshly prepared capsicum pizza usually enjoyed with ketchup",
    size: [
      { type: "regular", price: 99 },
      { type: "medium", price: 199 },
      { type: "large", price: 299 },
    ],
    crusts: [
      { type: "Thin", price: 0 },
      { type: "Cheese-burst", price: 199 },
      { type: "Pan", price: 499 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 1,
    name: "Margherita",
    image: "/pizzas/margherita.webp",
    description : "Premium taste cheap price",
    size: [
      { type: "regular", price: 199 },
      { type: "medium", price: 299 },
      { type: "large", price: 499 },
    ],
    crusts: [
      { type: "Thin", price: 0 },
      { type: "Cheese-burst", price: 399 },
      { type: "Pan", price: 499 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 3,
    name: "Chicken Pizza",
    image: "/pizzas/chicken.webp",
    description : "yummy high protein pizza",
    tag : "popular",
    size: [
      { type: "regular", price: 299 },
      { type: "medium", price: 199 },
      { type: "large", price: 499 },
    ],
    crusts: [
      { type: "Thin", price: 120 },
      { type: "Cheese-burst", price: 199 },
      { type: "Pan", price: 299 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 4,
    name: "Golden Corn Pizza",
    image: "/pizzas/corn.webp",
    description : "golden color is my favorite",
    size: [
      { type: "regular", price: 99 },
      { type: "medium", price: 199 },
      { type: "large", price: 299 },
    ],
    crusts: [
      { type: "Thin", price: 0 },
      { type: "Cheese-burst", price: 99 },
      { type: "Pan", price: 199 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 5,
    name: "Farmhouse Pizza",
    image: "/pizzas/farmhouse.webp",
    tag : "popular",
    description : "not for kids",
    size: [
      { type: "regular", price: 199 },
      { type: "medium", price: 299 },
      { type: "large", price: 499 },
    ],
    crusts: [
      { type: "Thin", price: 0 },
      { type: "Cheese-burst", price: 399 },
      { type: "Pan", price: 499 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 6,
    name: "Mushroom Pizza",
    image: "/pizzas/mushroom.webp",
    description : "some people like me and some dont I am just like humans",
    size: [
      { type: "regular", price: 399 },
      { type: "medium", price: 499 },
      { type: "large", price: 699 },
    ],
    crusts: [
      { type: "Thin", price: 0 },
      { type: "Cheese-burst", price: 399 },
      { type: "Pan", price: 499 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 7,
    name: "Peppy Paneer",
    description : "Spicy and vegetarian option for non-vegetarians",
    tag : "popular",
    image: "/pizzas/paneer.webp",
    size: [
      { type: "regular", price: 499 },
      { type: "medium", price: 699 },
      { type: "large", price: 799 },
    ],
    crusts: [
      { type: "Thin", price: 200 },
      { type: "Cheese-burst", price: 699 },
      { type: "Pan", price: 599 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 8,
    name: "Pepperoni Pizza",
    description : "pepperoni pizza with some extra love",
    image: "/pizzas/pepperoni.webp",
    size: [
      { type: "regular", price: 399 },
      { type: "medium", price: 499 },
      { type: "large", price: 599 },
    ],
    crusts: [
      { type: "Thin", price: 120 },
      { type: "Cheese-burst", price: 399 },
      { type: "Pan", price: 499 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 9,
    name: "Three Cheese",
    description : "only for people who love cheese and basil.",
    image: "/pizzas/threecheese.webp",
    size: [
      { type: "regular", price: 299 },
      { type: "medium", price: 399 },
      { type: "large", price: 499 },
    ],
    crusts: [
      { type: "Thin", price: 190 },
      { type: "Cheese-burst", price: 399 },
      { type: "Pan", price: 499 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 10,
    name: "Tomato Pizza",
    image: "/pizzas/tomato.webp",
    tag : "popular",
    size: [
      { type: "regular", price: 99 },
      { type: "medium", price: 199 },
      { type: "large", price: 299 },
    ],
    crusts: [
      { type: "Thin", price: 0 },
      { type: "Cheese-burst", price: 199 },
      { type: "Pan", price: 299 },
    ],
    extras: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
];
const initialState = {
  pizzas: PizzaCustom,
  cart: [],
};
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setPizzas, addToCart, removeFromCart, clearCart } =
  pizzaSlice.actions;
export default pizzaSlice.reducer;
