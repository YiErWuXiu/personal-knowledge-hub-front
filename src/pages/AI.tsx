
import React from "react";
import { FileText } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const AI = () => {
  // Sample AI research reports data
  const aiReports = [
    {
      id: 1,
      title: "人工智能研究报告",
      subtitle: "关于最新AI技术发展趋势的个人研究记录",
      author: "张某",
      importSource: "导入自",
      date: "2025-04-10"
    },
    {
      id: 2,
      title: "人工智能研究报告",
      subtitle: "关于最新AI技术发展趋势的个人研究记录",
      author: "张某",
      importSource: "导入自",
      date: "2025-04-10"
    },
    {
      id: 3,
      title: "人工智能研究报告",
      subtitle: "关于最新AI技术发展趋势的个人研究记录",
      author: "张某",
      importSource: "导入自",
      date: "2025-04-10"
    },
    {
      id: 4,
      title: "人工智能研究报告",
      subtitle: "关于最新AI技术发展趋势的个人研究记录",
      author: "张某",
      importSource: "导入自",
      date: "2025-04-10"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">AI 领域</h1>
        
        <div className="space-y-4">
          {aiReports.map((report) => (
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

export default AI;
