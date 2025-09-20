import { CircleX, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../slices/ProductSlices";
import { useState } from "react";

const ShoppingCart = ({ showCart }) => {
  const products = useSelector((state) => state.newProducts.NewProduct);
  const dispatch = useDispatch();

  
  const [quantities, setQuantities] = useState(
    () =>
      products.reduce((acc, p) => {
        acc[p.id] = 1; 
        return acc;
      }, {})
  );

  
  const totalPrice = products.reduce(
    (sum, p) => sum + p.price * (quantities[p.id] || 1),
    0
  );

  const handleIncrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    setQuantities((prev) => {
      const newQ = { ...prev };
      delete newQ[id];
      return newQ;
    });
  };

  return (
    <aside className="fixed bg-white top-0 right-0 w-100  border-t-8 h-screen py-6 shadow-xl/20 duration-300">
      <CircleX
        className="absolute cursor-pointer left-2 top-2"
        onClick={() => showCart(false)}
        size={40}
      />
      <h1 className="text-center text-5xl font-bold playfair mt-10">
        Your Cart
      </h1>

      <div className="w-90 m-auto bg-[#a7b3a252] h-170 mt-5 overflow-y-scroll overflow-x-hidden flex flex-col gap-4 px-6 py-3 rounded-lg">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-5 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-24 h-24 object-cover rounded-xl border"
            />
            <div className="flex w-full justify-between items-start">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg text-gray-800">
                  {product.title.length > 19
                    ? product.title.slice(0, 19) + "…"
                    : product.title}
                </h2>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handleIncrementQuantity(product.id)}
                    className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-full px-3 text-xl"
                  >
                    +
                  </button>
                  <span className="font-medium">{quantities[product.id]}</span>
                  <button
                    onClick={() => handleDecrementQuantity(product.id)}
                    className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-full px-3 text-xl"
                  >
                    –
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <h2 className="text-lg font-bold text-gray-700">
                  ${product.price * (quantities[product.id] || 1)}
                </h2>
                <button onClick={() => handleDelete(product.id)}>
                  <Trash2
                    size={20}
                    color="red"
                    className="cursor-pointer hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 w-full flex flex-col-reverse items-center gap-6 px-10">
        <button className="bg-[#646B5D] w-full text-white px-10 py-3 font-bold rounded-md text-2xl cursor-pointer  border hover:bg-transparent hover:text-[#646B5D] transition-all duration-150">
          Checkout
        </button>
        <h1 className="text-2xl playfair">
          Total: <span>${totalPrice}</span>
        </h1>
      </div>
    </aside>
  );
};

export default ShoppingCart;

