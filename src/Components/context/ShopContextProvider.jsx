import { useMemo, useState } from "react";
import { ShopContext } from "./ShopContext";

import { productsData } from "../../data";

const ShopContecxtProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);
  // const [total, setTotal] = useState(0);

  // calculate total Price
  const total = useMemo(() => {
    return cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
  }, [cart]);

  const quantity = useMemo(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      return amount;
    } 
  }, [cart]);

  // ADD items to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // function for remove item from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // function to increase the items quantity in cart
  // const increaseAmount = (id) => {
  //   const cartItem = cart.find((item) => item.id === id);
  //   if (cartItem) {
  //     const newCart = [...cart].map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           amount: cartItem.amount + 1,
  //         };
  //       }
  //       return item;
  //     });
  //     setCart(newCart);
  //   }
  // };
  const increaseAmount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  // function to decrease the items quantity in cart
 const decreaseAmount = (id) => {
  setCart((prevCart) => {
    const cartItem = prevCart.find((item) => item.id === id);

    if (!cartItem) return prevCart;

    // If amount is 1, remove item
    if (cartItem.amount === 1) {
      return prevCart.filter((item) => item.id !== id);
    }

    // Otherwise decrease amount
    return prevCart.map((item) =>
      item.id === id
        ? { ...item, amount: item.amount - 1 }
        : item
    );
  });
};

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        quantity,
        total,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContecxtProvider;
