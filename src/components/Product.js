import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../utils.js/cartSlice';

const Product = ({title, price, description, image}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const product = { title, price, image };
        dispatch(addItems(product)); 
      };
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-green-500">${price}</p>
      <p className="text-sm">{description.slice(0, 100)}...</p>
      
      <button className="bg-yellow-500 text-white p-2 mt-2 rounded"
        onClick={handleAddToCart}
      >Add to Cart</button>
    </div>
  )
}

export default Product
