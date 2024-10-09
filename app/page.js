export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Salco Global Solutions LLC (SGS)
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          At SGS, we tackle the challenges of global business, offering turn-key
          solutions for competitive industrial markets. Our expertise spans
          sales, marketing, business development, international trade, and
          global operations. Leveraging decades of industry experience, we help
          our clients thrive in international markets.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 mb-6">
            SGS thrives in developing international markets and increasing
            market share for our clients. Our focus is on providing strategic
            solutions, with a strong technical foundation and a commitment to
            executing sustainable business models that drive growth.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Sales & Marketing</li>
            <li>Business Development</li>
            <li>International Trade</li>
            <li>Foreign Markets Strategy</li>
            <li>Global Operations</li>
            <li>Technical Expertise</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Global Reach
          </h2>
          <p className="text-gray-600 mb-6">
            We are engaged in business across diverse regions, leveraging our
            international network and local insights to maximize growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                India Subcontinent
              </h3>
              <p className="text-gray-600">
                Expanding business potential in one of the fastest-growing
                markets.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Latin America
              </h3>
              <p className="text-gray-600">
                Developing strategies for competitive growth in emerging
                economies.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Middle East
              </h3>
              <p className="text-gray-600">
                Navigating opportunities in dynamic markets across the region.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Europe
              </h3>
              <p className="text-gray-600">
                Driving market expansion and sustainability in established
                markets.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Asia Pacific
              </h3>
              <p className="text-gray-600">
                Providing insights and expertise in the rapidly growing markets
                of the Asia Pacific region.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Ready to expand your global footprint? Get in touch with us to
            explore how SGS can help grow your business.
          </p>
        </section>
      </section>
    </main>
  );
}
