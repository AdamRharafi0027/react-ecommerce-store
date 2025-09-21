import heroImage from "../../../public/images/hero.png"
import "./Hero.css"
const Hero = () => {
  return (
    <>
    {/* HERO SECTION */}
        <section className=" w-full h-[calc(100vh-7.5rem)] ">
            {/* CIRCLES */}
            <div className="back-circles w-full h-screen -z-10 absolute flex items-center justify-between -mt-10">
                <div className="circle-left bg-[#A7B3A2] rounded-full h-100 w-100 -ml-40"></div>
                <div className="circle-right bg-[#A7B3A2] rounded-full h-230 w-230 -mr-60"></div>
            </div>
            {/* HERO CONTEXT */}
            <div className="context flex items-center  w-full h-[calc(100vh-7.5rem)]">
                <h1 className=" text-[#646B5D] text-9xl font-bold playfair ml-20 w-[1000px] leading-[170px]">
                    Style Delivered: Shop the Latest Trends in Fashion
                </h1>
                <img src={heroImage} alt="hero image" className="w-[1500px] absolute -right-30 -mr-70" />
            </div>
        </section>
    </>
  )
}

export default Hero