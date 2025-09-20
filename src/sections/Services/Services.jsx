import COD from "../../../public/images/COD.png"
import fast_d from "../../../public/images/fast-d.png"
import free_d from "../../../public/images/free-d.png"
import serv_cl from "../../../public/images/serv-cl.png"


const Services = () => {
    const services = [
    {
      img: COD,
      title: "Cash On Delivery",
      desc: "Pay securely at your doorstep when your order arrives."
    },
    {
      img: fast_d,
      title: "Fast Delivery",
      desc: "Quick, reliable delivery to get your products on time."
    },
    {
      img: free_d,
      title: "Free Shipping",
      desc: "Enjoy free shipping on all orders above a certain amount."
    },
    {
      img: serv_cl,
      title: "After-Sales Service",
      desc: "Dedicated support to assist you even after purchase."
    },
  ];
  return (
    <>
      <section className="mt-50 relative">
          <div className="absolute circle-left bg-[#A7B3A2] rounded-full h-120 w-120 -ml-40 -z-10"></div>
          <h1 className="-rotate-90 text-[13rem] font-bold -left-70 top-30 absolute playfair text-[#646B5D]">Services</h1>
          
           <div className="flex flex-wrap gap-10 ml-150">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center transition-transform transform hover:-translate-y-1"
            >
              <img src={service.img} alt={service.title} className="w-40 h-40 object-contain" />
              <h3 className="mt-6 text-2xl font-bold text-[#646B5D] text-center">{service.title}</h3>
              <p className="mt-3 text-gray-600 text-center text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
