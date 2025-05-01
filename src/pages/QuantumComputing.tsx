
import React from "react";
import { ArrowRight, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const QuantumComputing = () => {
  // Trending topics data
  const trendingTopics = [
    {
      id: 1,
      title: "大规模量子模型的发展",
      description: "大型量子模型的技术进展和实际应用",
      percentage: "+26%"
    },
    {
      id: 2,
      title: "AI辅助的量子系统",
      description: "AI算法与量子系统的集成研究与应用",
      percentage: "+30%"
    },
    {
      id: 3,
      title: "量子密码技术进步",
      description: "量子密码技术进步的最新研究与应用",
      percentage: "+21%"
    },
    {
      id: 4,
      title: "可编程量子逻辑",
      description: "可编程量子逻辑的发展研究与应用",
      percentage: "+23%"
    }
  ];

  // Articles data
  const articles = [
    {
      id: 1,
      title: "人工智能在量子系统中的应用与挑战",
      description: "探讨人工智能如何优化量子计算过程，以及实现AI与量子系统相互融合的主要挑战。",
      date: "2025-04-12",
      readTime: "8 分钟",
      featured: false
    },
    {
      id: 2,
      title: "大型语言模型的商业化之路",
      description: "分析大型语言模型商业化的现状、机遇与挑战，以及对不同行业的潜在影响。",
      date: "2025-04-10",
      readTime: "12 分钟",
      featured: true
    }
  ];

  // Right sidebar analytics data
  const analytics = [
    { id: 1, title: "市场趋势", icon: "chart" },
    { id: 2, title: "行业分析", icon: "analysis" },
    { id: 3, title: "私人定制", icon: "customize" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Tabs */}
      <Tabs defaultValue="favorites" className="w-full">
        <TabsList className="w-full rounded-none bg-slate-700">
          <TabsTrigger 
            value="home" 
            className="data-[state=active]:bg-slate-800 text-white px-8 py-2 rounded-none"
          >
            首页
          </TabsTrigger>
          <TabsTrigger 
            value="favorites"
            className="data-[state=active]:bg-slate-800 text-white px-8 py-2 rounded-none"
          >
            我的喜欢
          </TabsTrigger>
        </TabsList>

        <TabsContent value="favorites">
          <div className="max-w-7xl mx-auto p-6">
            {/* Quantum Computing Header */}
            <div className="bg-purple-50 rounded-md p-6 mb-6">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">量子计算</h1>
                  <p className="text-sm text-gray-600">人工智能配合量子计算，提供与研究</p>
                  
                  <div className="flex mt-4 space-x-2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
                      大型语言模型与量子研究
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
                      AI辅助量子计算系统
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
                      量子密码技术进步
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
                      可编程量子逻辑
                    </Badge>
                  </div>
                </div>
                <div>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-700">
                    <Heart size={16} />
                    <span className="text-sm">添加到我的收藏</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Main Content - Left Side (70%) */}
              <div className="md:w-2/3">
                {/* Trending Topics Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 7-5.5 5.5-2-2L2 22" />
                        <path d="M16 7h6v6" />
                      </svg>
                    </span>
                    <h2 className="text-lg font-semibold text-gray-700">热门话题</h2>
                  </div>

                  <div className="space-y-4">
                    {trendingTopics.map(topic => (
                      <div key={topic.id} className="flex justify-between items-start p-3 hover:bg-white rounded transition-colors">
                        <div>
                          <h3 className="font-medium text-gray-800">{topic.title}</h3>
                          <p className="text-sm text-gray-500">{topic.description}</p>
                        </div>
                        <div className="text-green-500 font-medium">{topic.percentage}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2 mb-8">
                  <button className="bg-gray-100 text-gray-700 p-3 text-center rounded hover:bg-gray-200">
                    私人定制
                  </button>
                  <button className="bg-gray-100 text-gray-700 p-3 text-center rounded hover:bg-gray-200">
                    研究报告
                  </button>
                  <button className="bg-gray-100 text-gray-700 p-3 text-center rounded hover:bg-gray-200">
                    发现更多
                  </button>
                </div>

                {/* Articles Section */}
                <div className="space-y-6">
                  <div className="border-t border-gray-200 pt-4"></div>
                  
                  {articles.map(article => (
                    <div 
                      key={article.id} 
                      className={`p-5 border border-gray-200 rounded-md bg-white hover:shadow-md transition-shadow ${
                        article.featured ? "relative" : ""
                      }`}
                    >
                      {article.featured && (
                        <Badge className="absolute top-2 right-2 bg-purple-600">
                          精选
                        </Badge>
                      )}
                      <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          <span>🕒 {article.date}</span>
                          <span className="ml-3">⏱️ {article.readTime}</span>
                        </div>
                        <a 
                          href="#" 
                          className="text-blue-600 hover:text-blue-800 text-xs flex items-center"
                        >
                          阅读全文 <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar (30%) */}
              <div className="md:w-1/3 bg-white p-5 rounded-md h-fit">
                <div className="mb-4 pb-3 border-b border-gray-100">
                  <h3 className="text-gray-700 font-medium">📊 上周阅读</h3>
                  <p className="text-sm text-gray-500">在第十周的阅读记录展示如下</p>
                </div>
                
                <div className="space-y-4">
                  {analytics.map(item => (
                    <div key={item.id} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <div className="w-5 h-5 rounded-sm bg-blue-50 flex items-center justify-center text-blue-500">
                        {item.icon === "chart" && "📊"}
                        {item.icon === "analysis" && "📈"}
                        {item.icon === "customize" && "🔧"}
                      </div>
                      <span className="text-sm">{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-3 border-t border-gray-100 text-right">
                  <a href="#" className="text-xs text-blue-600 hover:text-blue-800 flex justify-end items-center gap-1">
                    查看完整报告 
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QuantumComputing;
