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
    <aside className="fixed top-0 right-0 h-screen bg-white z-50 shadow-xl/20 duration-300 w-full sm:w-80 md:w-96 lg:w-100 p-4 lg:p-6">
      {/* Close Button */}
      <CircleX
        className="absolute cursor-pointer left-3 top-3"
        onClick={() => showCart(false)}
        size={30}
      />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold playfair text-center mt-8">
        Your Cart
      </h1>

      {/* Products List */}
      <div className="mt-4 h-[60%] overflow-y-auto flex flex-col gap-4">
        {products.length > 0 ? (
          products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl p-3 sm:p-4 flex items-center gap-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-xl border"
            />
            <div className="flex w-full justify-between items-start">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className="font-semibold text-sm sm:text-lg text-gray-800">
                  {product.title.length > 19
                    ? product.title.slice(0, 19) + "…"
                    : product.title}
                </h2>
                <div className="flex gap-2 sm:gap-3 items-center">
                  <button
                    onClick={() => handleIncrementQuantity(product.id)}
                    className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-full px-2 sm:px-3 text-sm sm:text-xl"
                  >
                    +
                  </button>
                  <span className="font-medium">{quantities[product.id]}</span>
                  <button
                    onClick={() => handleDecrementQuantity(product.id)}
                    className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-full px-2 sm:px-3 text-sm sm:text-xl"
                  >
                    –
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 sm:gap-2">
                <h2 className="text-sm sm:text-lg font-bold text-gray-700">
                  ${product.price * (quantities[product.id] || 1)}
                </h2>
                <button onClick={() => handleDelete(product.id)}>
                  <Trash2
                    size={16}
                    className="cursor-pointer hover:scale-110 transition-transform text-red-500"
                  />
                </button>
              </div>
            </div>
          </div>
        ))
        ) : (<h1 className="absolute top-110 ml-30">No Products Here</h1>)}
      </div>

      {/* Total and Checkout */}
      <div className="absolute bottom-4 left-0 w-full px-4 sm:px-6 flex flex-col gap-3">
        <h1 className="text-lg sm:text-2xl font-bold playfair text-center">
          Total: <span>${totalPrice.toFixed(2)}</span>
        </h1>
        <button className="bg-[#646B5D] w-full text-white py-2 sm:py-3 font-bold rounded-md text-lg sm:text-2xl cursor-pointer border hover:bg-transparent hover:text-[#646B5D] transition-all duration-150">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default ShoppingCart;
