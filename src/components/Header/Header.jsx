import { CircleUser, Handbag } from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ProductsPage from "../../pages/ProductPage/ProductsPage";
import App from "../../App";
import { useState, useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";
import About from "../../pages/About/About";

const Header = () => {
  const products = useSelector((state) => state.newProducts.NewProduct);
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const amount = products.length;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 flex items-center justify-between text-[#646B5D] px-20 py-10 h-30 w-full z-50 transition-colors duration-300 
        ${
          scrolled ? "backdrop-blur-md bg-white/70 shadow-md" : "bg-transparent"
        }`}
      >
        <h1 className="playfair text-5xl font-bold">E-COMMERCE</h1>
        <nav>
          <ul className="flex items-center gap-20 -ml-60 relative z-30">
            <li>
              <Link
                className={`text-[20px] font-bold hover:text-[#A7B3A2] duration-100 ${
                  location.pathname === "/" && "activated"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`text-[20px] font-bold hover:text-[#A7B3A2] duration-100 ${
                  location.pathname === "/products" && "activated"
                }`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="text-[20px] font-bold hover:text-[#A7B3A2] duration-100"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[20px] font-bold hover:text-[#A7B3A2] duration-100"
                to="#"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 z-50">
          <div className="relative">
            <Handbag
              size={40}
              onClick={() => setShowCart(true)}
              className="cursor-pointer"
              color="#646B5D"
            />
            <span className="bg-[#646B5D] text-white absolute rounded-full px-2 -top-2 -right-2">
              {amount}
            </span>
          </div>

          {showCart && <ShoppingCart showCart={setShowCart} />}
          <CircleUser size={40} className="cursor-pointer" color="#646B5D" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Header;
