import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import DropDownFilter from "../../components/DropDownFilter/DropDownFilter";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
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
      <h1 className="text-center text-8xl playfair font-bold text-[#646B5D] mb-20">
        Products
      </h1>
      <div className="px-50 flex items-center justify-center gap-10">
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
            className="ml-10 w-200 outline-0 border-0 playfair py-4"
          />
          <button className="bg-[#646B5D] cursor-pointer rounded-r-full py-2 absolute right-0 w-20 flex items-center justify-center">
            <Search color="#fff" size={40} />
          </button>
        </div>
      </div>

      <div className="cards mt-30 flex flex-wrap gap-20 items-center justify-center">
        {filteredProducts.map((product) => (
          <Cards
            key={product.id}
            title={product.title}
            price={product.price}
            // تأخذ الصورة الأولى من المصفوفة
            image={product.images[0]}
            category={product.category.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
