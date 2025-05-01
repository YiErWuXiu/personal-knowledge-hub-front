
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  // Different icon colors based on category
  const getIconColor = () => {
    switch (recommendation.icon) {
      case 'nano':
        return 'bg-blue-50 text-blue-500';
      case 'global':
        return 'bg-red-50 text-red-500';
      case 'agriculture':
        return 'bg-green-50 text-green-500';
      case 'bio':
        return 'bg-green-50 text-green-600';
      case 'space':
        return 'bg-purple-50 text-purple-500';
      case 'energy':
        return 'bg-yellow-50 text-yellow-600';
      case 'edutech':
        return 'bg-blue-50 text-blue-600';
      case 'robotics':
        return 'bg-gray-50 text-gray-700';
      case 'health':
        return 'bg-red-50 text-red-600';
      case 'city':
        return 'bg-indigo-50 text-indigo-600';
      case 'ocean':
        return 'bg-cyan-50 text-cyan-600';
      case 'psycho':
        return 'bg-pink-50 text-pink-600';
      default:
        return 'bg-gray-50 text-gray-500';
    }
  };

  // Different icon based on category
  const renderIcon = () => {
    switch (recommendation.icon) {
      case 'nano':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1" />
            <path d="M8.5 8.5l7 7" />
            <path d="M8.5 15.5l7-7" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        );
      case 'global':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        );
      case 'agriculture':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 22c1.25-1.67 2.5-3.33 3.75-5" />
            <path d="M6.7 22c1.68-2.24 3.35-4.48 5.03-6.72" />
            <path d="M11.7 22c2.1-2.79 4.2-5.57 6.3-8.36" />
            <path d="M16.7 22c1.68-2.24 3.35-4.48 5.03-6.72" />
            <path d="M5.5 8.5c1.07 1.1 2.13 2.18 3.16 3.3" />
            <path d="M7.75 2c-.75.9-1.5 1.8-2.25 2.7" />
            <path d="M12.75 2c-1 1.2-2 2.4-3 3.6" />
            <path d="M17.75 2c-1.25 1.5-2.5 3-3.75 4.5" />
            <path d="M22.75 2c-1.5 1.8-3 3.6-4.5 5.4" />
          </svg>
        );
      case 'bio':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 20h6" />
            <path d="M12 14v6" />
            <path d="M12 4a9 9 0 0 1 9 9" />
            <path d="M12 4a9 9 0 0 0-9 9" />
            <path d="M13 8a4 4 0 0 1 4 4" />
            <path d="M11 8a4 4 0 0 0-4 4" />
          </svg>
        );
      case 'space':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" y1="8" x2="12" y2="8" />
            <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
            <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
          </svg>
        );
      case 'energy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18" />
            <path d="M5.636 5.636a9 9 0 0 0 12.728 12.728" />
            <path d="M18.364 5.636A9 9 0 0 0 5.636 18.364" />
          </svg>
        );
      case 'edutech':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h6" />
            <path d="M22 12h-6" />
            <path d="M12 2v2" />
            <path d="M12 8v2" />
            <path d="M12 14v2" />
            <path d="M12 20v2" />
            <path d="M19 9a7 7 0 1 0-13-2" />
            <path d="M17 17a7.069 7.069 0 0 0 1-3.6" />
            <path d="M12 12 6.5 7.5" />
          </svg>
        );
      case 'robotics':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
          </svg>
        );
      case 'health':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      case 'city':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="9" />
            <rect x="14" y="3" width="7" height="5" />
            <rect x="14" y="12" width="7" height="9" />
            <rect x="3" y="16" width="7" height="5" />
          </svg>
        );
      case 'ocean':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 16.5L9.5 3L13 8.5L17 4L21.5 16.5" />
            <path d="M3 16.5H21.5" />
            <path d="M3 19.5H21.5" />
          </svg>
        );
      case 'psycho':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6c-3.3 2.7-3.3 9.3 0 12" />
            <path d="M12 6c3.3 2.7 3.3 9.3 0 12" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        );
    }
  };

  return (
    <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all">
      <CardContent className="p-0">
        <div className="p-4">
          <div className={`inline-flex rounded-full p-2 ${getIconColor()} mb-3`}>
            {renderIcon()}
          </div>
          <h3 className="font-semibold mb-1">{recommendation.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{recommendation.description}</p>
          <a 
            href="#" 
            className="text-xs inline-flex items-center text-gray-500 hover:text-blue-600"
          >
            查看详情 <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
