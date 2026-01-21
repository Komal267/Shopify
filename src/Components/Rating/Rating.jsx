import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({rating,className}) => {
  return (
    <div className={className}>
      {rating}<FaStar color ="white"/>
    </div>
  )
}

export default Rating
