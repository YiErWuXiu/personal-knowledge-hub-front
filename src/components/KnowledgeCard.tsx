
import React from "react";
import { FileText, Database, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KnowledgeItem {
  id: number;
  title: string;
  source: string;
  date: string;
  icon: string;
}

interface KnowledgeCardProps {
  knowledge: KnowledgeItem;
}

const KnowledgeCard = ({ knowledge }: KnowledgeCardProps) => {
  // Select icon based on the knowledge type
  const renderIcon = () => {
    switch (knowledge.icon) {
      case 'ai':
        return <Code size={18} className="text-blue-500" />;
      case 'quantum':
        return <Database size={18} className="text-purple-500" />;
      case 'blockchain':
        return <FileText size={18} className="text-green-500" />;
      default:
        return <FileText size={18} className="text-gray-500" />;
    }
  };

  return (
    <Card className="p-3 hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {renderIcon()}
        </div>
        <div className="flex-grow">
          <h3 className="font-medium text-sm">{knowledge.title}</h3>
          <p className="text-xs text-gray-500">{knowledge.source}</p>
        </div>
        <div className="text-xs text-gray-400 whitespace-nowrap">
          {knowledge.date}
        </div>
      </div>
    </Card>
  );
};

export default KnowledgeCard;
