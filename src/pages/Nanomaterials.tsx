
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, ChevronRight, Atom } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Nanomaterials = () => {
  const navigate = useNavigate();
  
  // Topic categories
  const topicCategories = [
    "纳米材料的制备技术", 
    "纳米材料的表征方法", 
    "纳米材料的应用领域", 
    "石墨烯研究进展"
  ];
  
  // Hot topics with statistics
  const hotTopics = [
    {
      title: "碳基纳米材料",
      description: "碳纳米管与石墨烯的最新研究进展",
      percentage: "+28%"
    },
    {
      title: "纳米复合材料",
      description: "高性能纳米复合材料的设计与制备",
      percentage: "+32%"
    },
    {
      title: "纳米催化剂",
      description: "纳米催化剂在能源转换中的应用",
      percentage: "+24%"
    },
    {
      title: "量子点技术",
      description: "量子点在生物成像与传感中的应用",
      percentage: "+20%"
    }
  ];
  
  // Recent reports
  const recentReports = [
    {
      id: 1,
      title: "纳米材料在新能源领域的应用前景",
      content: "探讨纳米材料在太阳能电池、燃料电池和锂电池等新能源领域的关键应用与发展趋势。",
      date: "2025-04-14",
      readTime: "10 分钟",
      isNew: true
    },
    {
      id: 2,
      title: "二维纳米材料的制备与性能研究",
      content: "分析二维纳米材料的制备方法、结构表征以及在电子器件、传感器等领域的应用潜力。",
      date: "2025-04-09",
      readTime: "15 分钟",
      isRecommended: true
    }
  ];
  
  // Recent statistics
  const recentStats = [
    {
      title: "材料性能",
      icon: "📊"
    },
    {
      title: "行业应用",
      icon: "🔬"
    },
    {
      title: "研究热点",
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
          </TabsList>
          
          {/* Nanomaterials Content */}
          <TabsContent value="favorites" className="p-4">
            {/* Back Button */}
            <div className="mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/favorites')}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft size={16} />
                <span>返回</span>
              </Button>
            </div>
            
            {/* Title Card */}
            <Card className="mb-6 bg-blue-50 border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-blue-800 mb-2">纳米材料</h2>
                    <p className="text-sm text-blue-600">纳米材料的研究进展与应用前景</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {topicCategories.map((category, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          className="bg-white text-blue-700 hover:bg-blue-50"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-500 hover:text-blue-700 flex items-center"
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
                <div className="flex items-center gap-2 text-blue-800 font-medium mb-2">
                  <Atom size={18} />
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
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200">推荐</Badge>
                        )}
                        {report.isNew && (
                          <Badge className="bg-green-100 text-green-700 border-green-200">最新</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{report.content}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>📅 {report.date}</span>
                        <span>⏱️ {report.readTime}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-blue-600 hover:text-blue-800 p-0 h-auto"
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
                                className="h-7 px-2 text-blue-600"
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
        </Tabs>
      </main>
    </div>
  );
};

export default Nanomaterials;
