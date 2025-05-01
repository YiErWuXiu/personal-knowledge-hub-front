
import React from "react";
import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

const Business = () => {
  const navigate = useNavigate();

  // Sample business reports data
  const businessReports = [
    {
      id: 1,
      title: "商业模式创新研究",
      subtitle: "数字经济时代企业商业模式转型案例分析",
      author: "周某",
      importSource: "导入自",
      date: "2025-04-09"
    },
    {
      id: 2,
      title: "品牌建设与管理策略",
      subtitle: "新消费时代下的品牌价值塑造研究",
      author: "钱某",
      importSource: "导入自",
      date: "2025-04-08"
    },
    {
      id: 3,
      title: "供应链优化方案",
      subtitle: "全球化背景下企业供应链韧性建设研究",
      author: "孙某",
      importSource: "导入自",
      date: "2025-04-07"
    },
    {
      id: 4,
      title: "企业数字化转型路径",
      subtitle: "传统企业数字化转型策略与实践案例",
      author: "李某",
      importSource: "导入自",
      date: "2025-04-06"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Back Button */}
        <div className="mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={16} />
            <span>返回首页</span>
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold mb-6">商业 领域</h1>
        
        <div className="space-y-4">
          {businessReports.map((report) => (
            <div key={report.id} className="bg-white rounded-md shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1">
                  <FileText size={20} />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800">{report.title}</h2>
                  <p className="text-sm text-gray-600">{report.subtitle}</p>
                  
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>{report.author} {report.importSource}</span>
                    <span>导入时间: {report.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Business;
