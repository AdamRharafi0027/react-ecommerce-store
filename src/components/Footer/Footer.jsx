import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="bg-[#646B5D] mt-60 p-10 ">
        <div className="flex justify-around items-center w-full mb-10">
          <h1 className="text-7xl playfair text-white">E-COMMERCE</h1>
          <div className="flex">
            <Facebook className="cursor-pointer" size={60} color="#fff" />
            <Instagram className="cursor-pointer" size={60} color="#fff" />
            <Twitter className="cursor-pointer" size={60} color="#fff" />
          </div>
        </div>
        <h3 className="text-white text-center ">
          ALL RIGHT RESERVED BY E-COMMERCE
        </h3>
      </section>
    </>
  );
};

export default Footer;
