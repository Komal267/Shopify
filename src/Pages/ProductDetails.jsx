import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Components/context/ShopContext";
import { productsData } from "../data";
import { useParams } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import Button from "../Components/Button/Button";

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const product = productsData.find((product) => {
    return product.id === parseInt(id);
  });

  return(

    <div className="p-4 flex">
      <div className="shrink-0 mt-20">
        <img src={product.image} alt=""  className="w-6           0 h-80"/>
      </div>
      <div className="pl-16 mt-20">
        <h3 className="text-3xl font-bold">{product.title}</h3>
        <p className="text-lg font-bold flex justify-start items-center"><MdCurrencyRupee/>{product.price}</p>
        <p className="text-lg text-gray-700">{product.description}</p>
        {/* <button onClick={() => addToCart(product, product.id)} className="mt-4 px-14 py-4 bg-red-500 text-400 text-white rounded-md hover:bg-sky-800 transition duration-200n  ">Add to Cart</button> */}
        <Button onClick={() => addToCart(product, product.id)} className="w-full mt-4 py-2 border border-sky-400 text-black rounded-md hover:bg-sky-800 transition duration-200n  ">Add to Cart</Button>
      </div>

    </div>
  );

};

export default ProductDetails  ;
