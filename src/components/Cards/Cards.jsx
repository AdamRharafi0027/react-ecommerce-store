import { ShoppingBag, Star } from "lucide-react"


const Cards = ({title, rate, price, image, category}) => {
  return (
    <>
        <div className="card bg-gray-50 w-90 shadow-xl border border-gray-300 rounded-md text-[#646B5D]">
            <img src={image} alt={title} className="rounded-md mt-4 m-auto mb-5" />
            <div className="px-8">
               <div className="flex justify-between">
                 <h2 className="text-3xl playfair capitalize">{title}</h2>
                 <div className="flex">
                    <Star size={40} color="transparent" fill="#646B5D" /><span className="text-2xl">{rate}</span>
                    </div>
               </div>
               <div className="flex items-center justify-between px-10 py-3">
                <h3 className="text-4xl playfair">$ {price}</h3>
                {/* <h3 className="text-2xl playfair">{category}</h3> */}
                <button className="cursor-pointer bg-[#646B5D] px-7 py-2 rounded-md">
                    <ShoppingBag color="#fff" />
                    </button>
               </div>
            </div>
        </div>
    </>
  )
}

export default Cards