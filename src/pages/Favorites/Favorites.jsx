import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import { useSelector } from "react-redux";
import { MoveLeft } from "lucide-react";


const Favorites = () => {

    const favorites = useSelector(state => state.Favorite.Favorites)
    const [loading, setLoading] = useState(true); 

  return (
    <>
          <section className="relative h-screen">
      <h1 className="text-center text-5xl lg:text-8xl playfair font-bold text-[#646B5D] mb-20 mt-10">
        Favorites
      </h1>
      {/* Background Circles */}
      <div className="back-circles w-full h-screen -z-10 absolute flex items-center justify-between -mt-10">
        <div className="circle-left bg-[#A7B3A2] rounded-full h-150 w-150 -ml-30 -mt-50"></div>
        <div className="circle-right bg-[#A7B3A2] rounded-full h-150 w-150 -mr-60 mt-2"></div>
      </div>

      {/* Loader or Cards */}
      <div className="cards mt-10 flex flex-wrap gap-20 items-center justify-center">
        
          {
            favorites.length > 0 ? (
              favorites.map((product) => (
            <Cards key={product.id} product={product} />
          ))
            ): (
              <div className="absolute top-100 text-center">
                <h1 className=" text-4xl text-[#646B5D] font-bold " >No Favorites Here</h1>
                <button onClick={()=>{window.history.back()}} className="cursor-pointer text-4xl flex items-center justify-center w-200 mt-20 gap-3">
                  <MoveLeft size={40} />
                  Back
                </button>
              </div>
            )
          }

      </div>
    </section>
    </>
  )
}

export default Favorites