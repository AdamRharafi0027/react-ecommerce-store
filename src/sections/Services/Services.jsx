import COD from "../../../public/images/COD.png"
import fast_d from "../../../public/images/fast-d.png"
import free_d from "../../../public/images/free-d.png"
import serv_cl from "../../../public/images/serv-cl.png"


const Services = () => {
  return (
    <>
      <section className="mt-150 relative">
          <div className="absolute circle-left bg-[#A7B3A2] rounded-full h-120 w-120 -ml-40 -z-10"></div>
          <h1 className="-rotate-90 text-[13rem] font-bold -left-70 top-30 absolute playfair text-[#646B5D]">Services</h1>
          <div className="ml-70 px-40 gap-50 items-center justify-center flex flex-wrap ">
            <div className="card">
                <img src={COD} alt="COD" width={300}/>
                <h3 className="text-[#646B5D] font-bold text-4xl text-center mt-10">Cash On Delivery</h3>
            </div>
            <div className="card">
                <img src={fast_d} alt="COD" width={300}/>
                <h3 className="text-[#646B5D] font-bold text-4xl text-center mt-10">Fast Delivery</h3>
            </div>
            <div className="card">
                <img src={free_d} alt="COD" width={300}/>
                <h3 className="text-[#646B5D] font-bold text-4xl text-center mt-10">Free Shipping</h3>
            </div>
            <div className="card">
                <img src={serv_cl} alt="COD" width={300}/>
                <h3 className="text-[#646B5D] font-bold text-4xl text-center mt-10">Service After  Sell</h3>
            </div>
          </div>
      </section>
    </>
  );
};

export default Services;
