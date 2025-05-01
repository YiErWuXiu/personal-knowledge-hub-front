
import React from "react";
import { BookOpen, Briefcase, TrendingUp, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  // Hide sidebar on Favorites page and QuantumComputing page
  if (location.pathname === "/favorites" || location.pathname === "/quantum-computing") {
    return null;
  }
  
  return (
    <div className="w-48 bg-purple-50 min-h-screen p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">个人知识库</h2>
      </div>
      
      <nav className="space-y-2">
        <SidebarItem 
          icon={<FileText size={18} />} 
          label="AI" 
          to="/ai"
          isActive={location.pathname === "/ai"}
        />
        <SidebarItem 
          icon={<Briefcase size={18} />} 
          label="金融" 
          to="/finance"
          isActive={location.pathname === "/finance"}
        />
        <SidebarItem 
          icon={<Briefcase size={18} />} 
          label="商业" 
          to="/business"
          isActive={location.pathname === "/business"}
        />
        <SidebarItem 
          icon={<TrendingUp size={18} />} 
          label="股市" 
          to="/stocks"
          isActive={location.pathname === "/stocks"}
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
  isActive 
}: { 
  icon: React.ReactNode; 
  label: string; 
  to: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      to={to} 
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
        isActive 
          ? "bg-purple-100 text-purple-700" 
          : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
