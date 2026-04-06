import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/User/UserSlice'
import PizzaReducer from '../Features/Pizza/Pizzalice'
export const store = configureStore({
    reducer : {
        user : userReducer,
        pizza : PizzaReducer
    }
})