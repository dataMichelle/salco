export default function ProductsPage() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
          SGS procures a variety of highway safety products, and sources custom
          requests tailored to your needs.
        </p>

        {/* Highway Safety Products Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Highway Safety Products
          </h2>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto">
            <li>Highway Safety Markings</li>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto ml-10">
              <li>Granular Thermoplastic Marking Products</li>
              <li>Hot Preformed Materials</li>
              <li>Standard Intermix Beads</li>
              <li>Specialized Glass Drop-On Blends</li>
              <li>Traffic Paint</li>
              <li>Plural Components</li>
              <li>Cold Plastic</li>
              <li>Markers</li>
              <li>Temporary Marking Tape</li>
            </ul>
          </ul>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto">
            <li>Pavement Repair Systems</li>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto ml-10">
              <li>Hot Applied Crack Sealers</li>
              <li>Cold Applied Crack Sealers</li>
              <li>Pothole Patching Materials</li>
              <li>Seal Coat</li>
            </ul>
          </ul>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto">
            <li>Highway Markings Safety Equipment</li>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto ml-10">
              <li>Self-Propelled Thermoplastic Applicators</li>
              <li>Thermoplastic Handliners</li>
              <li>Traffic Paint Equipment</li>
              <li>MMA Equipment</li>
              <li>Raised Pavement Markers Bitumen Adhesive</li>
            </ul>
          </ul>
        </section>
      </section>
    </main>
  );
}
