import { Heart, HeartPlus, Info, ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/ProductSlices";
import { useState } from "react";
import { addFavorite, removeFavorite } from "../../slices/FavoriteSlices";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const [heartActivated, setHeartActivated] = useState(false); 

  const handleAddProduct = () => {
    dispatch(addToCart(product));
  };
  const handleAddFavorite = () => {
    dispatch(addFavorite(product))
  }
const handleDeleteFavorite = () => {
  dispatch(removeFavorite(product.id))
}
  return (
    <>
      <div
        className="card bg-gray-50 w-90 shadow-xl border border-gray-300 rounded-md text-[#646B5D] relative"
        key={product.id}
      >
       {
        window.location.pathname !== "/favorites" ? (
           <button className="absolute z-10 right-5 top-2 cursor-pointer bg-[#646B5D] text-white rounded-full p-3 hover:bg-[#646b5d86] duration-200">
          {heartActivated ? (
              <Heart  onClick={()=>setHeartActivated(false)} size={30} className="fill-red-400 text-red-400" />
          ) : (
              <HeartPlus onClick={()=>{
                setHeartActivated(true)
                handleAddFavorite()
              }} size={30} />
          )}
        </button>
        ) : (
          <button className="absolute z-10 right-5 top-2 cursor-pointer bg-[#646B5D] text-white rounded-full p-3 hover:bg-[#646b5d86] duration-200">
              <Heart  onClick={()=>{
                setHeartActivated(false)
                handleDeleteFavorite()
              }} size={30} className="fill-red-400 text-red-400" />
        </button>
        )
       }
        <img
          src={product.images[0]}
          alt={product.title}
          className="rounded-md  m-auto mb-5"
        />
        <div className="px-8">
          <div className="flex justify-between">
            <h2 className="text-3xl playfair capitalize">{product.title}</h2>
          </div>
          <div className="flex items-center justify-between  py-3">
            <h3 className="text-4xl playfair">$ {product.price}</h3>

            <div className="flex ml-10 gap-5">
              <button
                className="cursor-pointer bg-[#646B5D] px-7 py-2 rounded-md hover:bg-[#646b5d86] duration-200"
                onClick={handleAddProduct}
              >
                <ShoppingBag color="#fff" />
              </button>
              <Link to={`/productsDetails/${product.id}`}>
                <button className="cursor-pointer bg-[#646B5D] px-7 py-2 rounded-md hover:bg-[#646b5d86] duration-200">
                <Info color="#fff" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
