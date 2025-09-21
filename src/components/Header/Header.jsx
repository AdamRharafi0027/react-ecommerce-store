import { CircleUser, Handbag, Heart, TextAlignJustify, X } from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ProductsPage from "../../pages/ProductPage/ProductsPage";
import App from "../../App";
import { useState, useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";
import About from "../../pages/About/About";
import Services from "../../sections/Services/Services";
import Favorites from "../../pages/Favorites/Favorites";

const Header = () => {
  const products = useSelector((state) => state.newProducts.NewProduct);
  const favorites = useSelector(state => state.Favorite.Favorites)
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const productAmount = products.length;
  const favoritesAmount = favorites.length

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Favorites", path: "/favorites" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];
  const iconsStyle = "cursor-pointer w-7 h-7 md:w-10 md:h-10"

  return (
    <>
      {/* HEADER */}
      <header
        className={`sticky top-0 flex items-center shadow-md justify-between text-[#646B5D] px-6 md:px-20 py-4 md:py-10 h-30 w-full z-50 transition-colors duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/70 " : "bg-transparent"
        }`}
      >
        <Link to={"/"}>
          <h1 className="playfair text-[20px] md:text-5xl font-bold">E-COMMERCE</h1>
        </Link>

        {menuOpen && (
          <nav className="fixed bg-white z-50 w-50 lg:w-160 right-0 h-[calc(100vh-7.5rem)] top-30 shadow-2xl ">
            <ul className="flex items-start gap-6 md:gap-20 flex-col pl-10 md:px-50 pt-20">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-[16px] md:text-[40px] font-bold hover:text-[#A7B3A2] duration-100 ${
                      location.pathname === link.path &&
                      "activated text-[#A7B3A2]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-4 md:gap-10 relative">
         <div className="relative">
           <Link to={"/favorites"}>
            <Heart className={iconsStyle}  />
            <span className="bg-[#646B5D] text-white absolute rounded-full px-2 -top-1 -right-2 text-xs">
              {favoritesAmount}
            </span>
          </Link>
         </div>
          <div className="relative">
            <Handbag
              onClick={() => setShowCart(true)}
              className={`cursor-pointer ${iconsStyle}`}
              color="#646B5D"
            />
            <span className="bg-[#646B5D] text-white absolute rounded-full px-2 -top-1 -right-2 text-xs">
              {productAmount}
            </span>
          </div>

          {showCart && <ShoppingCart showCart={setShowCart} />}
          <CircleUser
            className={iconsStyle}
            color="#646B5D"
          />
          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className={iconsStyle} /> : <TextAlignJustify className={iconsStyle} />}
          </button>
        </div>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default Header;
