
import React from "react";
import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

const Finance = () => {
  const navigate = useNavigate();

  // Sample finance reports data
  const financeReports = [
    {
      id: 1,
      title: "金融市场分析报告",
      subtitle: "关于全球金融市场趋势与投资机会的研究",
      author: "李某",
      importSource: "导入自",
      date: "2025-04-08"
    },
    {
      id: 2,
      title: "投资组合优化策略",
      subtitle: "基于现代投资理论的资产配置方法研究",
      author: "王某",
      importSource: "导入自",
      date: "2025-04-07"
    },
    {
      id: 3,
      title: "金融科技发展趋势",
      subtitle: "区块链、人工智能在金融领域的应用前景",
      author: "张某",
      importSource: "导入自",
      date: "2025-04-06"
    },
    {
      id: 4,
      title: "风险管理与对冲策略",
      subtitle: "金融衍生品在风险控制中的应用研究",
      author: "赵某",
      importSource: "导入自",
      date: "2025-04-05"
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
        
        <h1 className="text-2xl font-bold mb-6">金融 领域</h1>
        
        <div className="space-y-4">
          {financeReports.map((report) => (
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

export default Finance;
