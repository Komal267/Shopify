 import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data";

const initialState = {
  products: productsData,
  cart: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, id } = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        cartItem.amount += 1;
      } else {
        state.cart.push({ ...product, amount: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cart = [];
    },

    increaseAmount: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.amount += 1;
      }
    },

    decreaseAmount: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      if (item.amount === 1) {
        state.cart = state.cart.filter(
          (item) => item.id !== action.payload
        );
      } else {
        item.amount -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseAmount,
  decreaseAmount,
} = shopSlice.actions;

export default shopSlice.reducer;
