import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/User/UserSlice'
import PizzaReducer from '../Features/Pizza/Pizzalice'
import CartReducer from "../Features/Cart/CartSlice"
export const store = configureStore({
    reducer : {
        user : userReducer,
        pizza : PizzaReducer,
        cart : CartReducer
    }
})