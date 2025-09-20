const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-800 playfair">
          About Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold">Our Store</span> – your
          destination for high-quality and stylish products at affordable
          prices. We started this shop to make online shopping simpler and more
          enjoyable for everyone.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We aim to deliver top-notch products and an exceptional shopping
              experience by combining style, quality, and service.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Our Values
            </h2>
            <p className="text-gray-600">
              Quality, transparency, and customer satisfaction are at the heart
              of everything we do.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              Affordable prices, fast delivery, and excellent customer support –
              all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
