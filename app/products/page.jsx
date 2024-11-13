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
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Highway Safety Products
            </h2>
          </div>

          {/* Highway Safety Markings */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Highway Safety Markings
            </h3>
            <ul className="list-disc list-inside text-gray-700 mx-auto max-w-3xl space-y-2">
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
          </div>

          {/* Pavement Repair Systems */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Pavement Repair Systems
            </h3>
            <ul className="list-disc list-inside text-gray-700 mx-auto max-w-3xl space-y-2">
              <li>Hot Applied Crack Sealers</li>
              <li>Cold Applied Crack Sealers</li>
              <li>Pothole Patching Materials</li>
              <li>Seal Coat</li>
            </ul>
          </div>

          {/* Highway Markings Safety Equipment */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Highway Markings Safety Equipment
            </h3>
            <ul className="list-disc list-inside text-gray-700 mx-auto max-w-3xl space-y-2">
              <li>Self-Propelled Thermoplastic Applicators</li>
              <li>Thermoplastic Handliners</li>
              <li>Traffic Paint Equipment</li>
              <li>MMA Equipment</li>
              <li>Raised Pavement Markers Bitumen Adhesive</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
