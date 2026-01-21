import React, { Children } from 'react'

const Button = ({ onClick,children,className}) => {
  return (
    <div className='box-border '>
      <button onClick={onClick} className={className}>{children}</button>
    </div>
  )
}

export default Button
