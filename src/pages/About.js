export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 md:text-xl mb-6">
          Learn more about our mission, values, and the team behind this platform.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">We strive to create innovative solutions that bring people together and foster meaningful connections.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Values</h2>
          <p className="text-gray-600">Integrity, innovation, and inclusivity are at the core of everything we do.</p>
        </div>
      </section>
    </div>
  );
}
