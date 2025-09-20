import { ShoppingBag } from "lucide-react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../slices/ProductSlices";
import { useState } from "react";


const Cards = ({product}) => {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(addToCart(product))
  }

  return (
    <>
        <div className="card bg-gray-50 w-90 shadow-xl border border-gray-300 rounded-md text-[#646B5D]" key={product.id}>
            <img src={product.images[0]} alt={product.title} className="rounded-md mt-4 m-auto mb-5" />
            <div className="px-8">
               <div className="flex justify-between">
                 <h2 className="text-3xl playfair capitalize">{product.title}</h2>
                
               </div>
               <div className="flex items-center justify-between px-10 py-3">
                <h3 className="text-4xl playfair">$ {product.price}</h3>
              
                <button className="cursor-pointer bg-[#646B5D] px-7 py-2 rounded-md" onClick={handleAddProduct} >
                    <ShoppingBag color="#fff" />
                    </button>
               </div>
            </div>
        </div>
    </>
  )
}

export default Cards