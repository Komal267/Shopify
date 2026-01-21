import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./Button/Button";

import MenuView from "./View/Desktop";

const Navbar = () => {
const { quantity } = useSelector((state) => state.cart);

  
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (newValue)=>{
    console.log(`Closing the navbar with the value: ${newValue}`);
    setIsOpen(newValue);
    console.log(`The new value of isOpen is: ${isOpen}`);
  }

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/product:id" },
    { label: "Contact", path: null },
    { label: `Cart(${quantity})`, path: "/cart" },
  ];
  
  return (
    <nav className="bg-pink-100">
      {/* Top bar */}
      <div className="h-16 flex items-center justify-between px-4
      ">
        <Link to="/">
          <h2 className="font-poppins font-bold text-2xl text-green-700">
            Shopify
          </h2>
        </Link>
         {/* Desktop menu */}
        <MenuView array ={menuItems} className="hidden sm:flex items-center ml-auto"/>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden"
        >
          <GiHamburgerMenu />
        </Button>

       
      </div>

      {/* Mobile menu */}
      <MenuView array={menuItems} className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-200`} onBtnClick = {()=>handleClose(false)}/>
    </nav>
  );
};

export default Navbar;
