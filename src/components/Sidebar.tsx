
import React from "react";
import { Home, BookOpen, Briefcase, TrendingUp } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-48 bg-purple-50 min-h-screen p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">个人知识库</h2>
      </div>
      
      <nav className="space-y-2">
        <SidebarItem icon={<BookOpen size={18} />} label="AI领域" />
        <SidebarItem icon={<Briefcase size={18} />} label="金融" />
        <SidebarItem icon={<Briefcase size={18} />} label="商业" />
        <SidebarItem icon={<TrendingUp size={18} />} label="股市" />
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <a 
      href="#" 
      className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 rounded-md transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default Sidebar;
