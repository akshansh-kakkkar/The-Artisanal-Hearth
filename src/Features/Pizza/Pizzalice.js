import { createSlice } from "@reduxjs/toolkit";
const PizzaCustom = [
  {
    id: 2,
    name: "Bell Pepper",
    image: "/pizzas/capsicum.webp",
    tag: "popular",
    description:
      "Colorful bell peppers with cheese and herbs, delivering a crunchy, slightly sweet flavor with a fresh and vibrant taste.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 1,
    name: "Margherita",
    image: "/pizzas/margherita.webp",
    description:
      "Classic combination of fresh tomato sauce, mozzarella, and basil, delivering a simple, authentic, and perfectly balanced taste.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 3,
    name: "Chicken",
    image: "/pizzas/chicken.webp",
    description:
      "Tender chicken chunks with melted cheese and flavorful sauce, giving a juicy, protein-packed bite that’s both satisfying and rich.",
    tag: "popular",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 4,
    name: "Golden Corn",
    image: "/pizzas/corn.webp",
    description:
      "Sweet golden corn with melted cheese and herbs, offering a light, slightly sweet, and creamy taste that’s super comforting.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 5,
    name: "Farmhouse",
    image: "/pizzas/farmhouse.webp",
    tag: "popular",
    description:
      "Loaded with fresh veggies like capsicum, onions, tomatoes, and corn, this pizza delivers a crunchy, wholesome, and flavorful experience.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 6,
    name: "Mushroom",
    image: "/pizzas/mushroom.webp",
    description:
      "Loaded with seasoned mushrooms, gooey cheese, and rich sauce, this pizza offers a soft, earthy flavor that’s comforting and delicious.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 7,
    name: "Peppy Paneer",
    description:
      "Soft paneer cubes with spicy seasoning, capsicum, and onions, giving a perfect mix of creamy and bold Indian-style flavors.",
    tag: "popular",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 8,
    name: "Pepperoni",
    description:
      "Classic pepperoni slices over melted cheese and zesty sauce, bringing a bold, smoky flavor with a perfect balance of spice.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 9,
    name: "Three Cheese",
    description:
      "A creamy blend of mozzarella, cheddar, and parmesan, creating a rich, cheesy explosion that melts perfectly in every bite.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 10,
    name: "Tomato",
    image: "/pizzas/tomato.webp",
    tag: "popular",
    description:
      "Fresh tomato slices layered over tangy sauce and melted cheese, delivering a simple yet juicy and refreshing flavor in every bite.",
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
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 11,
    name: "Deep Dish",
    image: "/pizzas/deepdish.webp",
    tag: "popular",
    description:
      "A thick, buttery crust filled with layers of cheese, sauce, and toppings, creating a rich, heavy, and indulgent pizza experience.",
    size: [
      { type: "regular", price: 399 },
      { type: "medium", price: 499 },
      { type: "large", price: 599 },
    ],
    crusts: [
      { type: "Thin", price: 120 },
      { type: "Cheese-burst", price: 199 },
      { type: "Pan", price: 299 },
    ],
    toppings: [
      { type: "olive", price: 40 },
      { type: "corn", price: 30 },
      { type: "extra-cheese", price: 50 },
    ],
  },
  {
    id: 10,
    name: "Authentic Italian",
    image: "/pizzas/italian.webp",
    tag: "popular",
    description:
      "Thin crust topped with fresh ingredients, olive oil, and herbs, giving a light, crispy, and traditional Italian flavor.",
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
    toppings: [
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
      const item = action.payload;
      const existing = state.cart.find(
        (p) =>
          p.id === item.id &&
          p.size?.type === item.size?.type &&
          p.crust?.type === item.crust?.type,
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const payload = action.payload;
      const id = payload && typeof payload === "object" ? payload.id : payload;
      const sizeType =
        payload && payload.size
          ? typeof payload.size === "object"
            ? payload.size.type
            : payload.size
          : undefined;
      const crustType =
        payload && payload.crust
          ? typeof payload.crust === "object"
            ? payload.crust.type
            : payload.crust
          : undefined;

      const item = state.cart.find((p) => {
        if (p.id !== id) return false;
        if (sizeType && p.size?.type !== sizeType) return false;
        if (crustType && p.crust?.type !== crustType) return false;
        return true;
      });
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const payload = action.payload;
      const id = payload && typeof payload === "object" ? payload.id : payload;
      const sizeType =
        payload && payload.size
          ? typeof payload.size === "object"
            ? payload.size.type
            : payload.size
          : undefined;
      const crustType =
        payload && payload.crust
          ? typeof payload.crust === "object"
            ? payload.crust.type
            : payload.crust
          : undefined;

      const item = state.cart.find((p) => {
        if (p.id !== id) return false;
        if (sizeType && p.size?.type !== sizeType) return false;
        if (crustType && p.crust?.type !== crustType) return false;
        return true;
      });

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        state.cart = state.cart.filter((p) => {
          if (p.id !== id) return true;
          if (sizeType && p.size?.type !== sizeType) return true;
          if (crustType && p.crust?.type !== crustType) return true;
          return false;
        });
      }
    },
    removeItem: (state, action) => {
      const payload = action.payload;
      const id = payload && typeof payload === "object" ? payload.id : payload;
      const sizeType =
        payload && payload.size
          ? typeof payload.size === "object"
            ? payload.size.type
            : payload.size
          : undefined;
      const crustType =
        payload && payload.crust
          ? typeof payload.crust === "object"
            ? payload.crust.type
            : payload.crust
          : undefined;

      state.cart = state.cart.filter((p) => {
        if (p.id !== id) return true;
        if (sizeType && p.size?.type !== sizeType) return true;
        if (crustType && p.crust?.type !== crustType) return true;
        return false;
      });
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    toggleExtraInCart: (state, action) => {
      const existing = state.cart.find(
        (item) => item.name === action.payload.name && item.type === "extra",
      );
      if (existing) {
        state.cart = state.cart.filter(
          (item) => !(item.name === action.payload.name && item.type === "extra"),
        );
      }
      else{
        state.cart.push({
          ...action.payload,
          type : "extra",
          quantity : 1
        })
      }
    },
  },
});

export const {
  setPizzas,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  removeFromCart,
  toggleExtraInCart,
  clearCart,
} = pizzaSlice.actions;
export default pizzaSlice.reducer;
