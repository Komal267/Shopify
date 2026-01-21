import React, { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import Button from "./Button/Button";

const ProductList = () => {
  const { products,addToCart } = useContext(ShopContext);
  return (
    <div className="max-w-300 mx-auto px-4 mt-20 text-center">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Our Elegant Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          const { id, image, title, price } = product;
          return (
            <div key={id} className="bg-white border-gray-200 rounded-lg p-4 transition-transform duration-200">
              <Link to={`/product/${id}`}>
              <img src={image} alt={title}  className="w-98 h-64  object-contain mb-4 "/>
              </Link>
              <div className="text-left ">
                <h3 className="text-md font-medium text-gray-800 mb-1">{title}</h3>
                <p className="text-gray-500 font-bold text-center flex justify-center items-center"><MdCurrencyRupee/>{price}</p>
              </div>
              <Button onClick={()=>addToCart(product,id)} className="w-full mt-4 py-2 border border-sky-400 text-black rounded-md hover:bg-sky-800 transition duration-200n  ">Add to Cart</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
