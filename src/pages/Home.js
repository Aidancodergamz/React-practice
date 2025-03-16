export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 md:text-xl mb-6">
          Discover amazing content and connect with our community.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Feature One</h2>
          <p className="text-gray-600">Description of the first amazing feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Feature Two</h2>
          <p className="text-gray-600">Description of the second amazing feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Feature Three</h2>
          <p className="text-gray-600">Description of the third amazing feature.</p>
        </div>
      </section>
    </div>
  );
}
