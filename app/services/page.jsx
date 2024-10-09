export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Consulting Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
          Salco Global Solutions customizes its approach to every solution, as
          our solutions are your key to opportunity. No solution in
          international business is one-size-fits-all, as every region and
          country presents a unique challenge. Whether seeking temporary
          assistance, navigating international obstacles, or reducing time to
          market, have peace of mind knowing that your business is in the
          capable hands of a team with the right experience.
        </p>

        {/* Business Development Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Business Development
          </h2>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto">
            <li>Strategic Planning & Execution</li>
            <li>Product Development</li>
            <li>International Trade</li>
            <li>Strategic Alliances</li>
          </ul>
        </section>

        {/* Sales & Marketing Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Sales & Marketing
          </h2>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto">
            <li>Customer Retention & Growth</li>
            <li>Tactical Negotiations & Deal Structuring</li>
            <li>Sales Representation</li>
          </ul>
        </section>

        {/* Tactical & Startup Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Tactical & Startup Support
          </h2>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto">
            <li>International Logistics</li>
            <li>Joint Ventures and Contracts</li>
            <li>Technical & Quality Assurance</li>
            <li>Global Operational Assistance</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
