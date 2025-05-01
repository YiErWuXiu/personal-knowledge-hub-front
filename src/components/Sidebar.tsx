
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
    <div className={`${isCollapsed ? 'w-12' : 'w-48'} bg-gradient-to-b from-[#F2FCE2] to-[#D3E4FD] min-h-screen p-4 flex flex-col relative transition-all duration-300`}>
      {/* Collapse Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)} 
        className="absolute -right-3 top-6 bg-white rounded-full p-1 shadow-md hover:bg-blue-50 z-10 transition-colors"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
      
      <div className="mb-6">
        {!isCollapsed && <h2 className="text-lg font-semibold text-blue-800 animate-float">个人知识库</h2>}
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
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
        isActive 
          ? "bg-white/70 text-blue-700 shadow-sm" 
          : "text-gray-700 hover:bg-white/50 hover:text-blue-700"
      }`}
      title={isCollapsed ? label : ""}
    >
      {icon}
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

export default Sidebar;
