import { Gift, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-purple-50 text-gray-800 border-t border-purple-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl shadow-lg">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">DailyEarn</span>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your trusted platform for daily lucky draws. Win amazing prizes with transparent, fair, and exciting draws.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition-colors">
                <Facebook className="h-5 w-5 text-purple-600" />
              </a>
              <a href="#" className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition-colors">
                <Twitter className="h-5 w-5 text-purple-600" />
              </a>
              <a href="#" className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition-colors">
                <Instagram className="h-5 w-5 text-purple-600" />
              </a>
              <a href="#" className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition-colors">
                <Youtube className="h-5 w-5 text-purple-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link to="/prizes" className="text-gray-600 hover:text-purple-600 transition-colors">Current Prizes</Link></li>
              <li><Link to="/winners" className="text-gray-600 hover:text-purple-600 transition-colors">Recent Winners</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-600 hover:text-purple-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/responsible-gaming" className="text-gray-600 hover:text-purple-600 transition-colors">Responsible Gaming</Link></li>
              <li><Link to="/complaints" className="text-gray-600 hover:text-purple-600 transition-colors">Complaints</Link></li>
              <li><Link to="/licensing" className="text-gray-600 hover:text-purple-600 transition-colors">Licensing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-600" />
                <span className="text-gray-600">info@dailyearn.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-600" />
                <span className="text-gray-600">1-800-EASY-WIN</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span className="text-gray-600">Available 24/7</span>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-100 rounded-xl p-4 border border-purple-200">
              <h4 className="font-semibold mb-2 text-purple-700">Newsletter</h4>
              <p className="text-sm text-gray-600 mb-3">Get notified about new prizes and special offers.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white border border-purple-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 text-sm rounded-lg shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 DailyEarn. All rights reserved. 
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-600 text-sm">
                Licensed & Regulated
              </span>
              <div className="flex space-x-2">
                <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">
                  SSL Secured
                </div>
                <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                  18+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
