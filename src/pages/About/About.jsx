const About = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <h1 className="text-5xl md:text-[12rem] playfair font-extrabold text-center text-[#646B5D] tracking-tight">
          ABOUT US
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
          We are a creative team passionate about making high-quality products accessible to everyone.
          Our mission is to combine modern design with quality at fair prices.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-sm p-8 hover:shadow-2xl transition border-t-8 border-[#646B5D]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              We started our journey in 2022 with a simple idea: to offer stylish,
              reliable products that make our customers’ lives easier and better.
              Today, we proudly serve hundreds of customers worldwide.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-sm p-8 hover:shadow-2xl transition border-t-8 border-[#646B5D]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe in quality, transparency, and innovation.
              These values guide every decision we make, from product design to customer service.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-sm p-8 hover:shadow-2xl transition border-t-8 border-[#646B5D]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Future</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to expand into international markets and introduce new products
              and services that align with our customers’ needs and exceed their expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
