import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../redux/slices/cartSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
