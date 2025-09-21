import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import DropDownFilter from "../../components/DropDownFilter/DropDownFilter";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <h1 className="text-center text-5xl lg:text-8xl playfair font-bold text-[#646B5D] mb-20 mt-10">
        Products
      </h1>

      {/* Filter + Search */}
      <div className="px-50 flex items-center justify-center gap-10 lg:flex-row flex-col-reverse">
        <DropDownFilter
          products={products}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
        <div className="bg-[#a7b3a252] rounded-full flex justify-between items-center relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 ml-10 lg:w-200 outline-0 border-0 playfair py-4"
          />
        </div>
      </div>

      {/* Background Circles */}
      <div className="back-circles w-full h-screen -z-10 absolute flex items-center justify-between -mt-10">
        <div className="circle-left bg-[#A7B3A2] rounded-full h-150 w-150 -ml-30 -mt-50"></div>
        <div className="circle-right bg-[#A7B3A2] rounded-full h-150 w-150 -mr-60 mt-2"></div>
      </div>

      {/* Loader or Cards */}
      <div className="cards mt-10 flex flex-wrap gap-20 items-center justify-center">
        {loading ? (
           <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#A7B3A2] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-[#646B5D]">Loading products...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Cards key={product.id} product={product} />
          ))
        ) : (
          <p className="text-[#646B5D] text-lg">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
