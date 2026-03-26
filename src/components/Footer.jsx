import { Activity, Globe, Share2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-blue-400" />
              <span className="font-heading font-bold text-xl tracking-tight text-white">OsteoGuard AI</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering healthcare with advanced deep learning for early osteoporosis detection from medical images.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-100 tracking-wider mb-4 uppercase text-sm">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/upload" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Detection System</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Analytics Dashboard</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">API Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 tracking-wider mb-4 uppercase text-sm">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 tracking-wider mb-4 uppercase text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} OsteoGuard AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="text-gray-500 text-sm flex items-center justify-center gap-1">Built with <span className="text-red-500">♥</span> for Hackathons</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
