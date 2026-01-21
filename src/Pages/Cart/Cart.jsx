import React, { useContext } from "react";
import { MdCurrencyRupee, MdDeleteForever } from "react-icons/md";
import Button from "../../Components/Button/Button"
import { ShopContext } from "../../Components/context/ShopContext";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext);
  return (
    <div className="flex justify-between p-5">
      {/* Card Details */}
      <div className="w-2/3 bg-white p-5 mt-5 ">
        <div className="flex justify-between font-bold">
        <h1 className="text-lg">Shopping Cart</h1>
        <h1 className="text-lg">Items:{quantity}</h1>
        <MdDeleteForever onClick={clearCart}  className="text-lg cursor-pointer "/>
      </div>

      <div className="flex justify-between mt-5 font-bold ">
        <span>Product Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Total</span>
      </div>
      <div  >
        {cart.length > 0 ? (
          cart.map((product) => <CartDetails item={product} key={product.id} />)
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      </div>
      {/* cart summary */}
      <div className="w-1/3 bg-gray-100 p-5 rounded-lg mt-5">
        <h2 className="text-lg font-bold mb-5">Cart Summary</h2>
        <div className="flex justify-between mb-5">
          <span>Items:</span>
          <span>{quantity}</span>
        </div>
        <div className="mb-5">
          <div className="flex justify-between ">
            <span>Subtotal</span>
            <span className="flex justify-between items-center"><MdCurrencyRupee/>{isNaN(total) ? 0 : total}</span>
          </div>
          <div className="flex items-center justify-between" >
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-3 ">
            <span>Total Cost</span>
            <span className="flex justify-between items-center text-md"><MdCurrencyRupee/>{isNaN(total) ? 0 : total}</span>
          </div>
          <Button className="bg-sky-600 text-white py-1 rounded-lg mt-2 px-1">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
