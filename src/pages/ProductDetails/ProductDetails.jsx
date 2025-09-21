import { ChevronLeft, Heart, HeartPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../slices/FavoriteSlices";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/ProductSlices";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null); 
  const [favorite, setFavorite] = useState(false)
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]); // set the first image as default
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  const handleAddFavorite = () => {
    dispatch(addFavorite(product))
  }

const handleDeleteFavorite = () => {
  dispatch(removeFavorite(product.id))
}

const handleAddToCart = () => {
  dispatch(addToCart(product))
}
const handleDecrementQuantity = () => {
  quantity <= 0 ? quantity = 0 : setQuantity(quantity - 1)
}
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-[#a7b3a2] border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-3 text-[#646B5D]">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <p className="text-center mt-20 text-[#646B5D]">Product not found.</p>
    );
  }

  return (
    <section className="relative mt-8 mb-100">
      <button className="cursor-pointer  z-50 absolute left-20 flex gap-5 items-center text-3xl text-[#646B5D]" onClick={()=>{window.history.back()}}>
        <ChevronLeft size={40} />
        Back
      </button>
      <div className="back-bg absolute w-180 h-490 -top-130 -left-70 bg-[#d9d9d9fd] rotate-15"></div>
      <div className="z-10 relative pt-20">
        <div className="card flex justify-center gap-30">
          {/* IMAGES */}
          <div>
            <img
              src={mainImage || product?.images?.[0]} // fallback to first image once loaded
              alt={product?.title}
              width={500}
            />

            {/* THUMBNAILS */}
            <div className="flex justify-center items-center gap-10 pt-10">
              {product?.images?.slice(0, 3).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={product?.title}
                  width={100}
                  className={`rounded-sm cursor-pointer border ${
                    mainImage === img
                      ? "border-[#626d5e]"
                      : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="text-[#646B5D] playfair">
            <h1 className="text-5xl w-200 font-bold">{product.title}</h1>
            <h2 className="text-7xl my-5">${product.price}</h2>
            <p className="w-160 mb-10">{product.description}</p>

            {/* QUANTITY */}
            <div className="flex gap-2 sm:gap-3 items-center font-sans mb-10">
              <button onClick={()=>setQuantity(quantity+1)} className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-4 py-1 text-4xl font-bold">
                +
              </button>
              <span className="text-4xl">{quantity}</span>
              <button onClick={handleDecrementQuantity} className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-4 py-1 text-4xl font-bold">
                –
              </button>
            </div>

            {/* ADD TO CART + HEART */}
            <div className="flex items-center font-sans mb-10 gap-5">
              <button onClick={handleAddToCart} className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-8 py-4 text-3xl font-bold w-100">
                Add to cart
              </button>
              <button className="cursor-pointer bg-transparent border-2 border-[#646B5D] hover:bg-[#a7b3a2] text-[#646B5D] hover:text-white rounded-lg px-8 py-4 font-bold duration-300">
                {
                  favorite ? (
                    <Heart size={30} onClick={()=>{
                      setFavorite(false)
                      handleDeleteFavorite()
                    }} className="fill-red-400 text-red-400"  />
                
                  ) : (<HeartPlus onClick={()=>{
                setFavorite(true)
                    handleAddFavorite()
              }} size={30} />)
                }
              </button>
            </div>

            {/* BUY NOW */}
            <button className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-8 py-4 text-3xl font-bold w-130 font-sans">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
