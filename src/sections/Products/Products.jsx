import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const firstProducts = products.slice(0, 8);

  return (
    <section className="relative px-6 md:px-12 lg:px-20 mt-32 md:mt-40 mb-32 md:mb-40">
      <h1 className="text-[#646B5D] playfair text-6xl md:text-6xl lg:text-8xl font-bold text-center">
        Products
      </h1>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
        {firstProducts.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>

      {/* View all button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/products")}
          className="bg-[#646B5D] text-white px-10 md:px-16 py-3 rounded-full text-lg md:text-xl hover:bg-[#A7B3A2] transition-colors"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default Products;
