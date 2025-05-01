
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Biotechnology = () => {
  const navigate = useNavigate();
  
  // Topic categories
  const topicCategories = [
    "基因工程", 
    "生物信息学", 
    "合成生物学", 
    "微生物技术"
  ];
  
  // Hot topics with statistics
  const hotTopics = [
    {
      title: "CRISPR基因编辑",
      description: "CRISPR-Cas9系统在疾病治疗中的应用进展",
      percentage: "+35%"
    },
    {
      title: "mRNA疫苗技术",
      description: "mRNA疫苗技术的发展与未来应用前景",
      percentage: "+42%"
    },
    {
      title: "生物传感器",
      description: "新型生物传感器在疾病诊断中的应用",
      percentage: "+28%"
    },
    {
      title: "合成微生物组",
      description: "合成微生物组在环境治理中的潜力",
      percentage: "+22%"
    }
  ];
  
  // Recent reports
  const recentReports = [
    {
      id: 1,
      title: "生物技术在农业领域的最新应用",
      content: "探讨基因编辑技术如何提高作物产量和抗病性，以及生物技术在可持续农业中的关键作用。",
      date: "2025-04-22",
      readTime: "12 分钟",
      isNew: true
    },
    {
      id: 2,
      title: "合成生物学与生物材料创新",
      content: "分析合成生物学在生物材料开发中的应用，以及这些新材料在医疗器械和组织工程领域的前景。",
      date: "2025-04-15",
      readTime: "18 分钟",
      isRecommended: true
    }
  ];
  
  // Recent statistics
  const recentStats = [
    {
      title: "研究趋势",
      icon: "📊"
    },
    {
      title: "市场应用",
      icon: "🔬"
    },
    {
      title: "投资动态",
      icon: "📌"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Content */}
      <main className="flex-1 p-0">
        {/* Navigation Tabs */}
        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="w-full rounded-none bg-slate-700">
            <TabsTrigger 
              value="home" 
              className="data-[state=active]:bg-slate-800 text-white px-8 py-2 rounded-none"
              onClick={() => navigate('/')}
            >
              首页
            </TabsTrigger>
            <TabsTrigger 
              value="favorites"
              className="data-[state=active]:bg-slate-800 text-white px-8 py-2 rounded-none"
              onClick={() => navigate('/favorites')}
            >
              我的喜欢
            </TabsTrigger>
            <TabsTrigger 
              value="more-areas"
              className="data-[state=active]:bg-slate-800 text-white px-8 py-2 rounded-none"
              onClick={() => navigate('/more-areas')}
            >
              更多领域
            </TabsTrigger>
          </TabsList>
          
          {/* Biotechnology Content */}
          <TabsContent value="favorites" className="p-4">
            {/* Back Button */}
            <div className="mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/more-areas')}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft size={16} />
                <span>返回</span>
              </Button>
            </div>
            
            {/* Title Card */}
            <Card className="mb-6 bg-green-50 border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-green-800 mb-2">生物科技</h2>
                    <p className="text-sm text-green-600">生物技术的最新研究与应用</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {topicCategories.map((category, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          className="bg-white text-green-700 hover:bg-green-50"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-500 hover:text-green-700 flex items-center"
                  >
                    <Heart size={16} className="mr-1" />
                    <span>添加到我的收藏</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content - Left Side (Hot Topics) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-green-800 font-medium mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>热门话题</span>
                </div>
                
                <div className="space-y-4">
                  {hotTopics.map((topic, index) => (
                    <div key={index} className="p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-gray-800">{topic.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{topic.description}</p>
                        </div>
                        <span className="text-green-500 font-medium">{topic.percentage}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Recent Reports */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  {recentReports.map((report) => (
                    <div key={report.id} className="mb-6 pb-6 border-b border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium text-gray-800">{report.title}</h3>
                        {report.isRecommended && (
                          <Badge className="bg-green-100 text-green-700 border-green-200">推荐</Badge>
                        )}
                        {report.isNew && (
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200">最新</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{report.content}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>📅 {report.date}</span>
                        <span>⏱️ {report.readTime}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-green-600 hover:text-green-800 p-0 h-auto"
                        >
                          阅读全文 <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious href="#" />
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationContent>
                </Pagination>
              </div>
              
              {/* Sidebar - Right Side (Stats) */}
              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-3 text-gray-700">上周周报</h3>
                    
                    <Table>
                      <TableBody>
                        {recentStats.map((stat, index) => (
                          <TableRow key={index}>
                            <TableCell className="py-2 pl-0">
                              <span className="mr-2">{stat.icon}</span>
                              <span className="text-sm text-gray-600">{stat.title}</span>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-7 px-2 text-green-600"
                              >
                                查看
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    
                    <div className="mt-4 text-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-gray-600 mt-2"
                      >
                        查看全部报告
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center justify-center h-24 bg-white"
                  >
                    <span className="text-lg mb-1">📊</span>
                    <span className="text-xs text-gray-600">研究报告</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center justify-center h-24 bg-white"
                  >
                    <span className="text-lg mb-1">📁</span>
                    <span className="text-xs text-gray-600">收藏内容</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center justify-center h-24 bg-white"
                  >
                    <span className="text-lg mb-1">✏️</span>
                    <span className="text-xs text-gray-600">发表总结</span>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Empty Home Content */}
          <TabsContent value="home">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">首页</h2>
              <p className="text-gray-500 mb-4">正在准备跳转到首页...</p>
            </div>
          </TabsContent>
          
          {/* More Areas Content */}
          <TabsContent value="more-areas">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">更多领域</h2>
              <p className="text-gray-500 mb-4">正在准备跳转到更多领域...</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Biotechnology;
