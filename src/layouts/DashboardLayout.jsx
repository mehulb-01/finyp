import { Bell, Search, Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar themed with premium glass aesthetics matching the Navbar */}
        <header className="h-16 bg-[#0C061A]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_10px_50px_-10px_rgba(168,85,247,0.15)] flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 z-10 transition-colors">
          <div className="flex items-center flex-1">
            <button className="lg:hidden mr-4 text-gray-400 hover:text-gray-200">
              <Menu className="h-6 w-6" />
            </button>
            <div className="max-w-md w-full relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors sm:text-sm text-gray-100 placeholder-gray-500" 
                placeholder="Search patient ID, name or scan..." 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="p-2 text-gray-400 hover:text-gray-200 rounded-full hover:bg-gray-800 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
              </button>
            </div>
            <div className="h-8 border-l border-gray-800" />
            <button className="btn-gradient px-4 py-2 text-sm rounded-lg whitespace-nowrap">
              + New Scan
            </button>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
