import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName : "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  gender: "",
  errors: {},
  terms: false,
  isSubmitted: false,
};

const UserSlice =createSlice( {
  name: "user",
  initialState,
  reducers: {
    updateFeild: (state, action) => {
      const { feild, value } = action.payload;
      state[feild] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    submitDone: (state) => {
     state.isSubmitted= true
    },
    resetForm: () => initialState,
  },
})
export const {updateFeild, setErrors,submitDone, resetForm} = UserSlice.actions;
export default UserSlice.reducer