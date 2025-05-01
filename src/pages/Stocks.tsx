
import React from "react";
import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

const Stocks = () => {
  const navigate = useNavigate();

  // Sample stock market reports data
  const stockReports = [
    {
      id: 1,
      title: "股市技术分析报告",
      subtitle: "基于量化模型的市场趋势预测研究",
      author: "吴某",
      importSource: "导入自",
      date: "2025-04-10"
    },
    {
      id: 2,
      title: "行业投资机会分析",
      subtitle: "新兴产业股票投资价值研究",
      author: "郑某",
      importSource: "导入自",
      date: "2025-04-09"
    },
    {
      id: 3,
      title: "宏观经济与股市关联性",
      subtitle: "经济周期对股票市场影响的实证分析",
      author: "王某",
      importSource: "导入自",
      date: "2025-04-08"
    },
    {
      id: 4,
      title: "投资组合构建策略",
      subtitle: "多因子模型在股票投资中的应用研究",
      author: "陈某",
      importSource: "导入自",
      date: "2025-04-07"
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
        
        <h1 className="text-2xl font-bold mb-6">股市 领域</h1>
        
        <div className="space-y-4">
          {stockReports.map((report) => (
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

export default Stocks;
