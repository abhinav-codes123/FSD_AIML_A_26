import React from 'react'
import image from "../assets/react.svg"
import "./Item.css"

const Item = () => {
  return (
    <div className='card'>
        <img src={image} alt="item image" width={100} height={100}/>
        <h2>title:react js</h2>
        <h3>price:574</h3>
        <button>AddToCart</button>
    </div>
  )
}

export default Item