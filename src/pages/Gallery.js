export default function Gallery() {
  const images = [
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
        Our Gallery
      </h1>
      <p className="text-lg text-gray-600 md:text-xl mb-8 text-center">
        Explore our collection of beautiful images.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {images.map((src, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
