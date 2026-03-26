import { Home, Activity, FileText, Settings, Users, LogOut, HeartPulse } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { name: 'Scans & Results', path: '/dashboard/scans', icon: <Activity className="w-5 h-5" /> },
    { name: 'Patient Records', path: '/dashboard/patients', icon: <Users className="w-5 h-5" /> },
    { name: 'Reports', path: '/dashboard/reports', icon: <FileText className="w-5 h-5" /> }
  ];

  return (
    <aside className="w-64 bg-gray-950 border-r border-gray-800 flex-shrink-0 flex flex-col hidden lg:flex">
      <div className="h-16 flex items-center px-6 border-b border-gray-800 mb-6">
        <Link to="/" className="flex items-center gap-2">
          <HeartPulse className="h-6 w-6 text-primary" />
          <span className="font-heading font-bold text-lg text-white tracking-tight">OsteoGuard AI</span>
        </Link>
      </div>
      
      <div className="px-4 flex-1">
        <div className="space-y-1">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main Menu</p>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group ${
                  isActive 
                    ? 'bg-blue-900/20 text-blue-400' 
                    : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                }`}
              >
                <div className={`${isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {item.icon}
                </div>
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-800">
        <div className="space-y-1 mb-4">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">System</p>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-400 hover:bg-gray-900 hover:text-white transition-all">
            <Settings className="w-5 h-5 text-gray-500" /> Settings
          </a>
        </div>
        <div className="bg-gray-900 rounded-2xl p-4 flex items-center gap-3 border border-gray-800">
          <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold border-2 border-gray-800 shadow-sm">
            DR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">Dr. Robert Chen</p>
            <p className="text-xs text-gray-400 truncate">Radiologist</p>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
