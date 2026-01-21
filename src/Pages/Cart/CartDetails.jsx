import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ShopContext } from "../../Components/context/ShopContext";
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import Button from '../../Components/Button/Button'

const CartDetails = ({item}) => {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(ShopContext);
    const {id,title,image,price,amount} = item;
  return (
    <div className='flex justify-between items-center mt-5 border-b pb-3'>
     <div className='flex items-center space-x-4 '>
        <img src={image} alt=""  className='w-12 h-12'/>
        <div>
            <h3 className='font-medium '>{title}</h3>
            <div  className='text-red-500 text-sm cursor-pointer  flex items-center'>
                <FiTrash2 onClick={()=>removeFromCart(id)} className='mr-1'/> Remove
            </div>
        </div>
     </div> 

     <div className='flex items-center'>
        <Button onClick={()=>decreaseAmount(id)} className='w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center'>
            <IoMdRemove/> 
        </Button>
        <span className='mx-3'>{amount}</span>
        <Button onClick={()=>increaseAmount(id)} className='w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center'>
            <IoMdAdd />
        </Button>
     </div> 
     <div className='text-gray-700'><MdCurrencyRupee/>{price}</div> 
     <div className='text-gray-700'><MdCurrencyRupee/>{price*amount}</div>
    </div>
  )
}

export default CartDetails
