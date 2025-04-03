
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/9e524244-6698-4c8c-95d8-7364da42ebd1.png" 
              alt="SVN Bay Parck Logo" 
              className="h-16 bg-white p-2 rounded"
            />
            <p className="text-sm mt-4">
              SVN Bay Parck offers luxury beachfront living with exclusive plots and villas 
              in a 40-acre gated community on the pristine shores of Bay of Bengal.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-secondary">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-secondary">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-secondary">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-secondary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Address</h3>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <p className="text-sm">
                SVN Bay Parck, Bhogapuram, Near Vizianagaram, Andhra Pradesh, India
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="flex-shrink-0" />
              <p className="text-sm">+91 85999 24242 / 85999 36363</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="flex-shrink-0" />
              <p className="text-sm">info@svnsjd.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/plots-villas" className="text-sm hover:text-secondary transition-colors">Plots & Villas</Link></li>
              <li><Link to="/amenities" className="text-sm hover:text-secondary transition-colors">Amenities</Link></li>
              <li><Link to="/investment" className="text-sm hover:text-secondary transition-colors">Investment Potential</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Get in Touch</h3>
            <form className="space-y-3">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded focus:outline-none focus:border-secondary" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded focus:outline-none focus:border-secondary" 
              />
              <button 
                type="submit" 
                className="w-full bg-secondary hover:bg-opacity-90 text-white py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm">
          <p className="mb-2">© {new Date().getFullYear()} SVN Bay Parck. All rights reserved.</p>
          <p className="text-xs text-gray-400">
            Disclaimer: Layout and specifications are subject to change without prior notice. Images shown are for representation purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
