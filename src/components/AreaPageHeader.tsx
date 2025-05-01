
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import FavoriteButton from "./FavoriteButton";

interface AreaPageHeaderProps {
  title: string;
  areaId: number;
  areaInfo: {
    title: string;
    description: string;
    icon: string;
    path: string;
  };
}

const AreaPageHeader = ({ title, areaId, areaInfo }: AreaPageHeaderProps) => {
  return (
    <div className="miyazaki-header p-4 flex items-center justify-between border-b-2 border-blue-100">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors rounded-full bg-white/50 p-1 hover:bg-white/80">
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-xl font-semibold text-blue-800">{title}</h1>
      </div>
      
      <FavoriteButton areaId={areaId} areaInfo={areaInfo} />
    </div>
  );
};

export default AreaPageHeader;
