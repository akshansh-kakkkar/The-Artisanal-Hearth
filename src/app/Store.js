import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/User/UserSlice'
export const store = configureStore({
    reducer : {
        user : userReducer
    }
})