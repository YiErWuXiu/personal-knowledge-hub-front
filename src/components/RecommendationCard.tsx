
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
      case 'quantum':
        return 'bg-blue-50 text-blue-500';
      case 'bio':
        return 'bg-green-50 text-green-500';
      case 'web':
        return 'bg-purple-50 text-purple-500';
      default:
        return 'bg-gray-50 text-gray-500';
    }
  };

  // Different icon based on category
  const renderIcon = () => {
    switch (recommendation.icon) {
      case 'quantum':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'bio':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z" />
            <path d="M10 6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4z" />
            <path d="M2 12a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4z" />
          </svg>
        );
      case 'web':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
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
