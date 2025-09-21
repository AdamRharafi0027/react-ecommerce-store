import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#646B5D] mt-60 py-12 z-30 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo / Brand */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl playfair text-white mb-6 md:mb-0">
          E-COMMERCE
        </h1>

        {/* Social Icons */}
        <div className="flex gap-6">
          <Facebook
            className="cursor-pointer transition-transform hover:scale-110 hover:text-gray-200"
            size={40}
            color="#fff"
          />
          <Instagram
            className="cursor-pointer transition-transform hover:scale-110 hover:text-gray-200"
            size={40}
            color="#fff"
          />
          <Twitter
            className="cursor-pointer transition-transform hover:scale-110 hover:text-gray-200"
            size={40}
            color="#fff"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-white text-center mt-8 text-sm md:text-base tracking-wide">
        © {new Date().getFullYear()} E-COMMERCE. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
