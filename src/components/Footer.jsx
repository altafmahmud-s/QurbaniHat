import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 text-white" style={{ backgroundColor: "#192438" }}>
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">QurbaniHat</h2>
          <p className="mt-3 text-sm leading-6">
            Trusted online marketplace for buying and selling Qurbani animals 
            across Bangladesh. সহজ, নিরাপদ এবং দ্রুত সেবা।
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-primary transition">About Us</a></li>
            <li><a className="hover:text-primary transition">Contact</a></li>
            <li><a className="hover:text-primary transition">Jobs</a></li>
            <li><a className="hover:text-primary transition">Press Kit</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="">
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm">📞 +880 1234 567890</p>
          <p className="text-sm mb-4">📧 info@qurbanihat.com</p>

          <div className="flex gap-4 mt-3">
            <a className="hover:text-blue-600 transition transform hover:scale-110">
              <FaFacebook size={22} />
            </a>
            <a className="hover:text-sky-500 transition transform hover:scale-110">
              <FaTwitter size={22} />
            </a>
            <a className="hover:text-pink-500 transition transform hover:scale-110">
              <FaInstagram size={22} />
            </a>
            <a className="hover:text-red-500 transition transform hover:scale-110">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300 text-center py-4 text-sm">
        <p>© 2024 QurbaniHat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;