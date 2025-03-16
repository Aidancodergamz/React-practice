export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 md:text-xl mb-8 text-center">
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>
      
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}