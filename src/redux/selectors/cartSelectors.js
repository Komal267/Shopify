import {createSelector} from "@reduxjs/toolkit"

export const selectShop = (state) => state.shop;
export const selectCart =  (state) =>state.shop.cart;
export const selectProduct = (state) => state.shop.products;
 



export const selectCartTotal = createSelector(
  [selectCart],
  (cart) =>
    cart.reduce((total, item) => {
      const price = Number(item.price);
      if (isNaN(price)) return total;
      return total + price * item.amount;
    }, 0)
);

export const selectCartQuantity = createSelector(
  [selectCart],
  (cart) =>
    cart.reduce((total, item) => total + item.amount, 0)
);
