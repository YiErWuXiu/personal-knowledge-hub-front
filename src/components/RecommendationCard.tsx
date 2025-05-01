
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
