import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company Name</h2>
          <p className="text-gray-400">Creating innovative solutions for a connected world.</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-gray-400 mb-2">Get the latest updates straight to your inbox.</p>
          <div className="flex">
            <input type="email" className="w-full px-4 py-2 rounded-l-lg text-black" placeholder="Your Email" />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">&copy; 2025 Aidan's business. All rights reserved.</p>
    </footer>
  );
}
