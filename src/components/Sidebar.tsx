
import React, { useState } from "react";
import { BookOpen, Briefcase, ChevronLeft, ChevronRight, TrendingUp, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Hide sidebar on Favorites page and QuantumComputing page
  if (location.pathname === "/favorites" || location.pathname === "/quantum-computing") {
    return null;
  }
  
  return (
    <div className={`${isCollapsed ? 'w-12' : 'w-48'} bg-gradient-to-b from-yellow-50 to-blue-50 min-h-screen p-4 flex flex-col relative transition-all duration-300 shadow-md`}>
      {/* Collapse Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)} 
        className="absolute -right-3 top-6 bg-white rounded-full p-1 shadow-md hover:bg-yellow-50 z-10 border border-blue-100"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
      
      <div className="mb-6">
        {!isCollapsed && <h2 className="text-lg font-semibold text-blue-800">个人知识库</h2>}
      </div>
      
      <nav className="space-y-2">
        <SidebarItem 
          icon={<FileText size={18} />} 
          label="AI" 
          to="/ai"
          isActive={location.pathname === "/ai"}
          isCollapsed={isCollapsed}
        />
        <SidebarItem 
          icon={<Briefcase size={18} />} 
          label="金融" 
          to="/finance"
          isActive={location.pathname === "/finance"}
          isCollapsed={isCollapsed}
        />
        <SidebarItem 
          icon={<Briefcase size={18} />} 
          label="商业" 
          to="/business"
          isActive={location.pathname === "/business"}
          isCollapsed={isCollapsed}
        />
        <SidebarItem 
          icon={<TrendingUp size={18} />} 
          label="股市" 
          to="/stocks"
          isActive={location.pathname === "/stocks"}
          isCollapsed={isCollapsed}
        />
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ 
  icon, 
  label, 
  to, 
  isActive,
  isCollapsed
}: { 
  icon: React.ReactNode; 
  label: string; 
  to: string;
  isActive?: boolean;
  isCollapsed: boolean;
}) => {
  return (
    <Link
      to={to} 
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
        isActive 
          ? "premium-sidebar-item shadow-sm" 
          : "text-blue-700 hover:bg-green-50 hover:text-green-700"
      }`}
      title={isCollapsed ? label : ""}
    >
      {icon}
      {!isCollapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
};

export default Sidebar;
