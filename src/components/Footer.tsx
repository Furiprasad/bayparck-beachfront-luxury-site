
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
              src="/lovable-uploads/dfdbe9ec-0973-490b-8055-bcd497d6fa37.png" 
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

          {/* Directions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Directions</h3>
            <p className="text-sm">
              From Visakhapatnam: Take NH16 towards Vizianagaram, turn at Bhogapuram and follow signs to SVN Bay Parck 
              (approximately 45 minutes drive).
            </p>
            <p className="text-sm mt-2">
              From Vizianagaram: Travel south towards Bhogapuram and follow the coastal road signs to SVN Bay Parck 
              (approximately 25 minutes drive).
            </p>
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
