import { CircleUser, Handbag, TextAlignJustify, X } from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ProductsPage from "../../pages/ProductPage/ProductsPage";
import App from "../../App";
import { useState, useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";
import About from "../../pages/About/About";
import Services from "../../sections/Services/Services";

const Header = () => {
  const products = useSelector((state) => state.newProducts.NewProduct);
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const amount = products.length;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`sticky top-0 flex items-center justify-between text-[#646B5D] px-6 md:px-20 py-4 md:py-10 h-30 w-full z-50 transition-colors duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/70 shadow-md" : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <h1 className="playfair text-2xl md:text-5xl font-bold">E-COMMERCE</h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 md:gap-20">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-[16px] md:text-[20px] font-bold hover:text-[#A7B3A2] duration-100 ${
                    location.pathname === link.path && "activated"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CART + USER + MOBILE MENU ICON */}
        <div className="flex items-center gap-4 relative">
          {/* CART ICON */}
          <div className="relative">
            <Handbag
              size={30}
              onClick={() => setShowCart(true)}
              className="cursor-pointer"
              color="#646B5D"
            />
            <span className="bg-[#646B5D] text-white absolute rounded-full px-2 -top-1 -right-2 text-xs">
              {amount}
            </span>
          </div>

          {showCart && <ShoppingCart showCart={setShowCart} />}

          {/* USER ICON */}
          <CircleUser size={30} className="cursor-pointer" color="#646B5D" />

          {/* MOBILE MENU TOGGLE */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} color="#646B5D" /> : <TextAlignJustify size={30} color="#646B5D" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-30 right-0 w-full h-full bg-white shadow-xl z-50 flex flex-col p-8 gap-8 animate-slideIn">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-bold text-[#646B5D] hover:text-[#A7B3A2] ${
                    location.pathname === link.path && "activated"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default Header;
