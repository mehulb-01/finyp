import { Link } from 'react-router-dom';
import { Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center fixed top-6 z-50 px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-[#1A1A24]/90 backdrop-blur-2xl border border-gray-700 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] rounded-full px-4 py-2 flex items-center justify-between w-full max-w-4xl transition-all duration-300 relative">
        <Link to="/" className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-inner shadow-emerald-700">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading font-bold text-[1.1rem] tracking-tight text-white pr-4">OsteoGuard</span>
        </Link>
          
        <div className="hidden md:flex space-x-6 items-center text-sm font-semibold">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link to="/upload" className="text-gray-300 hover:text-white transition-colors">Solutions</Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link to="/register" className="bg-white text-gray-900 hover:bg-gray-200 px-5 py-2.5 text-sm font-bold rounded-full transition-all shadow-md">
            Discover OsteoGuard
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center pr-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="absolute top-[4.5rem] right-0 w-full max-w-sm bg-[#1A1A24]/95 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto origin-top-right">
            <Link to="/" className="text-base font-semibold text-gray-200 hover:text-emerald-400 transition-colors">Home</Link>
            <div className="h-px w-full bg-gray-800" />
            <Link to="/about" className="text-base font-semibold text-gray-200 hover:text-emerald-400 transition-colors">About</Link>
            <div className="h-px w-full bg-gray-800" />
            <Link to="/upload" className="text-base font-semibold text-gray-200 hover:text-emerald-400 transition-colors">Solutions</Link>
            <div className="h-px w-full bg-gray-800" />
            <Link to="/dashboard" className="text-base font-semibold text-gray-200 hover:text-emerald-400 transition-colors">Dashboard</Link>
            
            <Link to="/register" className="bg-white text-center text-gray-900 hover:bg-gray-200 px-5 py-3 mt-4 text-base font-bold rounded-full transition-all">
              Discover OsteoGuard
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
