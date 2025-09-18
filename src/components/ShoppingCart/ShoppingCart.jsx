import { CircleX, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const ShoppingCart = ({ showCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <aside className="fixed bg-white top-0 right-0 w-100  border-t-8 h-screen py-6 shadow-xl/20 duration-300">
        <CircleX
          className="absolute cursor-pointer left-2 top-2"
          onClick={() => {
            showCart(false);
          }}
          size={40}
        />
        <h1 className="text-center text-5xl font-bold playfair mt-10">
          Your Card
        </h1>
        {/* shopping Cart */}
        <div className="w-90 m-auto bg-[#a7b3a252] h-170 mt-5 overflow-y-scroll overflow-x-hidden flex flex-col gap-4 px-6 py-3 rounded-lg">
          {/* {products.map((product) => (
            <div key={product.id} className="bg-[#a7b3a252] flex rounded-md gap-5">
              <img src={product.images[0]} width={100} className="rounded-lg" alt={product.title} />
              <div className="flex w-full justify-between pr-5 pt-5">
                <div>
                  <h2 className="playfair">{product.title.slice(0,19)}...</h2>
                  <div className="flex gap-5 mt-1 items-center">
                    <button className="bg-[#A7B3A2] cursor-pointer text-white rounded-2xl py-0 px-4 text-2xl">+</button>
                    <span>0</span>
                    <button className="bg-[#A7B3A2] cursor-pointer text-white rounded-2xl py-0 px-4 text-2xl">-</button>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h2>${product.price}</h2>
                  <Trash2 color="red" className="cursor-pointer" />
                </div>
              </div>
            </div>
          ))} */}
        </div>
        {/* checkout */}
        <div className="absolute bottom-5 w-full flex flex-col-reverse items-center gap-6 px-10">
          <button className="bg-[#646B5D] w-full text-white px-10 py-3 font-bold rounded-md text-2xl cursor-pointer  border hover:bg-transparent hover:text-[#646B5D] transition-all duration-150">
            Checkout
          </button>
          <h1 className="text-2xl playfair">
            Total: <span>$222222</span>
          </h1>
        </div>
      </aside>
    </>
  );
};

export default ShoppingCart;
