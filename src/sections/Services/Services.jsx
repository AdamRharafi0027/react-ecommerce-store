import COD from "../../../public/images/COD.png";
import fast_d from "../../../public/images/fast-d.png";
import free_d from "../../../public/images/free-d.png";
import serv_cl from "../../../public/images/serv-cl.png";

const Services = () => {
  const services = [
    {
      img: COD,
      title: "Cash On Delivery",
      desc: "Pay securely at your doorstep when your order arrives.",
    },
    {
      img: fast_d,
      title: "Fast Delivery",
      desc: "Quick, reliable delivery to get your products on time.",
    },
    {
      img: free_d,
      title: "Free Shipping",
      desc: "Enjoy free shipping on all orders above a certain amount.",
    },
    {
      img: serv_cl,
      title: "After-Sales Service",
      desc: "Dedicated support to assist you even after purchase.",
    },
  ];

  return (
    <section className="services relative mt-24 px-4 md:px-20">
      {/* Decorative Circle */}
      <div className="hidden lg:block absolute circle-left bg-[#A7B3A2] rounded-full h-150 w-150 -ml-40  -z-10"></div>

      {/* Section Title */}
      <h1 className="hidden lg:block -rotate-90 text-[13rem] font-bold absolute -left-28 top-32 playfair text-[#646B5D]">
        Services
      </h1>
      <h1 className="lg:hidden text-5xl md:text-7xl playfair font-bold text-center text-[#646B5D] mb-10">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:ml-100">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
            <h3 className="mt-6 text-xl md:text-2xl font-bold text-[#646B5D] text-center">
              {service.title}
            </h3>
            <p className="mt-3 text-gray-600 text-center text-sm md:text-base">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
