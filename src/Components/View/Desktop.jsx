import React from 'react'
import { Link } from 'react-router-dom'

const MenuView = ({array,className,onBtnClick}) => {
  return (
    <div>
      <ul className={className}>
          {array.map((item, index) => (
          
            <li
              key={index}
              className="text-lg mx-2 font-medium text-green-500 cursor-pointer"
              onClick={()=>onBtnClick()}
            >
              {item.path ? <Link to={item.path}>{item.label}</Link> : item.label}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MenuView;
