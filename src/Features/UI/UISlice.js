import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading : false,
    toast : {
        show : false,
        message : "",
        type : "success"
    }
}

const uiSlice = createSlice({
    name : "ui",
    initialState, 
    reducers : {
        startLoading : (state)=>{
            state.isLoading = true
        },
        stopLoading : (state)=>{
            state.isLoading = false
        },
        showToast : (state, action)=>{
            state.toast = {
                show : true,
                message : action.payload.message,
                type : action.payload.type || 'success'
            };

        },
        hideToast : (state)=>{
            state.toast.show = false
        }
    }
})

export const {startLoading, stopLoading, showToast, hideToast} = uiSlice.actions

export default uiSlice.reducer
