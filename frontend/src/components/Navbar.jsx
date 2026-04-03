import { Link, useLocation } from 'react-router-dom';
import { ActivitySquare, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Do not render floating pill if inside dashboard environment
  if (location.pathname.startsWith('/dashboard')) return null;

  return (
    <div className="w-full flex justify-center fixed bottom-8 z-50 px-4 pointer-events-none">
      
      {/* Outer Wrapper for Animated Gradient Stroke */}
      <div className="pointer-events-auto relative p-[1px] rounded-xl overflow-hidden shadow-[0_10px_50px_-10px_rgba(168,85,247,0.3)] w-full max-w-[800px] md:w-fit">
        
        {/* Rotating Motion Gradient Beam */}
        <motion.div
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,1)_360deg)] z-0"
           animate={{ rotate: 360 }}
           transition={{ ease: "linear", duration: 3, repeat: Infinity }}
        />

        {/* Inner Solid Navbar Chassis */}
        <nav className="relative z-10 bg-[#0C061A] rounded-xl px-4 py-2 flex flex-col items-center w-full transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none">
        
        {/* Desktop Layout - Condensed with precise gap spacing */}
        <div className="hidden md:flex items-center justify-center gap-8 px-4">
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors relative group font-medium tracking-wide">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link to="/upload" className="text-gray-400 hover:text-white transition-colors relative group font-medium tracking-wide">
            Upload
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>

          {/* Premium Central Button */}
          <Link to="/register" className="relative group overflow-hidden bg-gray-900 border border-purple-500/40 hover:border-purple-400 text-white px-6 py-2.5 rounded-xl flex items-center gap-2.5 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-purple-400/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <ActivitySquare className="w-[18px] h-[18px] text-purple-400 group-hover:text-purple-300 transition-colors" />
             <span className="font-bold tracking-wide relative z-10 text-[15px]">Register</span>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
          </Link>

          <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors relative group font-medium tracking-wide">
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors relative group font-medium tracking-wide">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
        </div>

        {/* Mobile menu button & logo text */}
        <div className="md:hidden flex items-center justify-between w-full pl-6 pr-2">
          <Link to="/" className="text-white font-bold tracking-wide text-lg flex items-center gap-2">
            <ActivitySquare className="w-5 h-5 text-purple-500" />
            OsteoGuard AI
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2 relative z-50">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="absolute bottom-[5rem] left-0 w-full bg-[#0C061A]/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 shadow-[0_0_50px_rgba(168,85,247,0.3)] flex flex-col gap-4 pointer-events-auto origin-bottom">
            <Link to="/about" className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors text-center w-full block">About</Link>
            <div className="h-px w-full bg-gray-800" />
            <Link to="/upload" className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors text-center w-full block">Upload</Link>
            <div className="h-px w-full bg-gray-800" />
            <Link to="/register" className="text-lg font-bold text-purple-400 hover:text-purple-300 transition-colors text-center w-full block py-2 bg-purple-500/10 rounded-xl">Register</Link>
            <div className="h-px w-full bg-gray-800" />
            <Link to="/dashboard" className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors text-center w-full block">Dashboard</Link>
            <div className="h-px w-full bg-gray-800" />
            <Link to="/contact" className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors text-center w-full block">Contact</Link>
          </div>
        )}
      </nav>
      </div>
    </div>
  );
}
