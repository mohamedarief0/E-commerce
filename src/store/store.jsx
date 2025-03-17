import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
