import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
