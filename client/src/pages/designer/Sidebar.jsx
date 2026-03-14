import React from "react";
import logo from "../../assets/logo.png";
import designerIcon from "../../assets/designer-icon.png";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Users, BookOpen, Lightbulb, Settings } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/designer/dashboard' },
    { icon: FolderKanban, label: 'Portfolio', path: '/designer/portfolio' },
    { icon: Users, label: 'Clients', path: '/designer/clients' },
    { icon: BookOpen, label: 'Library', path: '/designer/library' },
    { icon: Lightbulb, label: 'Inspiration', path: '/designer/inspiration' },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center p-1">
            <img
              src={logo}
              alt="Roomio Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold text-gray-800">Roomio</span>
        </div>
      </div>

      {/* User Info */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src={designerIcon} 
              alt="Designer Icon"
              className="w-10 h-10 object-contain" 
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">DESIGNER/STAFF</p>
            <p className="text-xs text-gray-500">Namal Rajapaksha</p>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 px-3 py-4">
        <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">Main Menu</p>
        <nav>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={index} to={item.path}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Divider Line */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Account Section */}
        <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">Account</p>
        
        {/* Settings */}
        <Link to="/designer/settings">
          <button
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
              location.pathname === '/designer/settings'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </Link>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button className="w-full bg-red-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
