import { CircleUser, Handbag } from "lucide-react"
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Hero from "../../sections/Hero/Hero";
import ProductsPage from "../../pages/ProductPage/ProductsPage";
import App from "../../App";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="flex items-center justify-between text-[#646B5D] px-20 py-10 h-30">
        <h1 className="playfair text-5xl font-bold">E-COMMERCE</h1>  
        <nav>
          <ul className="flex items-center gap-20 -ml-60 relative z-30">
            <li>
              <Link 
                className={`text-[20px] font-bold hover:text-[#A7B3A2] duration-100 ${location.pathname === "/" && "activated"}`} 
                to="/"
              >Home</Link>
            </li>
            <li>
              <Link 
                className={`text-[20px] font-bold hover:text-[#A7B3A2] duration-100 ${location.pathname === "/products" && "activated"}`} 
                to="/products"
              >Products</Link>
            </li>
            <li><Link className="text-[20px] font-bold hover:text-[#A7B3A2] duration-100" to="#">About</Link></li>
            <li><Link className="text-[20px] font-bold hover:text-[#A7B3A2] duration-100" to="#">Services</Link></li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <Handbag size={40} className="cursor-pointer" color="#646B5D" />
          <CircleUser size={40} className="cursor-pointer"  color="#646B5D" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  )
}

export default Header
