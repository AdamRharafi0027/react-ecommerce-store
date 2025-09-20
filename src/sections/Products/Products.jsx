import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ناخذ فقط 8 منتجات
  const firstProducts = products.slice(0, 8);

  return (
    <section className="mt-60 px-20 pb-20 relative">
      <h1 className="text-[#646B5D] playfair text-8xl font-bold">Products</h1>

      <div className="cards mt-50 flex flex-wrap gap-20 items-center justify-center">
        {firstProducts.map((product) => (
          <Cards
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <button
        onClick={() => navigate("/products")}
        className="bg-[#646B5D] text-white px-20 py-3 rounded-md text-2xl cursor-pointer absolute -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        View All
      </button>
    </section>
  );
};

export default Products;
