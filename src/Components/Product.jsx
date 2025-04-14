import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addProduct} from '../redux/slices/cartSlice'
// import Checkout from './Checkout'

const Product = () => {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
    getAllProducts();
  },[])

    const getAllProducts=async ()=>{
      try{
        const response=await axios.get("https://fakestoreapi.com/products/");
        const products=await response.data;
        // console.log(products);
        setProducts(products);
      }
      catch(error){
        console.log(error.message);
      }
    }

    


  return (
    <>
    <div className='font-bold text-4xl text-center mt-1.5'>Products List</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
      {/* {JSON.stringify(products)};

      {Array.from("")} */}
      

      {
        products.map((product,i)=><SubCard key={i} prod={product} />)
      }

    </div>
</>
  )
}

export default Product


const SubCard=({prod})=>{

  const [quantity,setQuantity]=useState(0);
  
  const dispatch = useDispatch();
 
  return(
<a href="#" className="group relative block overflow-hidden rounded-lg shadow-md">
      <button className="absolute end-4 top-4 z-5 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 z-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      <img src={prod.image} alt='' className="h-64 scale-[0.8] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="bg-amber-400 px-3 py-1.5 text-xs font-medium">{prod.category}</span>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{prod.title}</h3>

        <div className="flex justify-around">
          <h2 className='text-xl text-red-600 line-through'>${(prod.price*1.15).toFixed(2)}</h2>
          <h2 className='text-xl text-green-600'>${prod.price}</h2>
          <h2 className='text-xl text-gray-600'>15% OFF</h2>
        </div>
        <div className="flex">
          {/* {quantity>0 ?"Quantity"+ quantity:null} */}
          {quantity>0 && "Quantity: "+ quantity}       {/*Contional Rendering*/}

        </div>

        <div className='flex justify-between gap-2'>
        <button onClick={()=>dispatch(addProduct(prod))} className="mt-4 block w-1/2 rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
          Add to Cart
        </button>
        <button onClick={()=>dispatch(addProduct(prod))} className="mt-4 block w-1/2 rounded-sm bg-blue-400 p-4 text-sm font-medium transition hover:scale-105">
          Buy Now
        </button>
        </div>
      </div>
    </a>

  )
}

export {SubCard}