export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Salco Global Solutions LLC (SGS)
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
          Salco Global Solutions LLC (SGS) tackles the challenges in global
          business and provides clients in competitive industrial markets with
          turn-key solutions. With a focus on developing international markets
          and increasing market share, SGS leverages years of industry
          experience to deliver comprehensive services across sales, marketing,
          business development, international trade, and global operations.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Expertise
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto text-center">
            SGS excels in creating sustainable business models for global
            growth, utilizing strong technical expertise and a vast network of
            contacts. We apply this expertise across a range of services,
            ensuring our clients remain competitive in industrial markets.
          </p>
          <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto">
            <li>Sales & Marketing</li>
            <li>Business Development</li>
            <li>International Trade & Foreign Markets</li>
            <li>Global Operations</li>
            <li>Technical Support & Consulting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Global Presence
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto text-center">
            SGS engages in business across diverse regions worldwide, ensuring
            our clients receive the benefits of localized insights and
            opportunities for growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                India Subcontinent
              </h3>
              <p className="text-gray-600">
                Driving business expansion and growth in the India subcontinent
                with expert knowledge of local markets.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Latin America
              </h3>
              <p className="text-gray-600">
                Strategic market development across key Latin American regions.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Middle East
              </h3>
              <p className="text-gray-600">
                Unlocking business potential in the dynamic Middle East market.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Europe
              </h3>
              <p className="text-gray-600">
                Expanding business horizons across Europe’s competitive markets.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Asia Pacific
              </h3>
              <p className="text-gray-600">
                Building long-term growth strategies in the Asia Pacific region.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
