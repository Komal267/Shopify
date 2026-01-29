// src/hooks/useCartActions.js
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseAmount, decreaseAmount,addToCart } from '../redux/slices/cartSlice';
import { clearCart } from '../redux/slices/cartSlice';

export const useCartActions = () => {
  const dispatch = useDispatch();

  return {
    add :(product,id) => dispatch(addToCart({product,id})),
    remove: (id) => dispatch(removeFromCart(id)),
    increase: (id) => dispatch(increaseAmount(id)),
    decrease: (id) => dispatch(decreaseAmount(id)),
    clearCart: () => dispatch(clearCart()),
  };
};
