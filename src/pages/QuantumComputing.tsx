
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const QuantumComputing = () => {
  const navigate = useNavigate();
  
  const quantumArticles = [
    {
      id: 1,
      title: "量子计算基础原理与应用前景",
      content: "量子计算利用量子力学原理进行信息处理，有望解决传统计算机难以解决的复杂问题。本文介绍量子计算的基础原理、研究现状和应用前景。",
      author: "张博士",
      date: "2025-03-15"
    },
    {
      id: 2,
      title: "量子纠缠与量子通信",
      content: "量子纠缠是量子力学中的独特现象，为量子通信提供了理论基础。本文深入探讨量子纠缠的物理原理及其在量子密钥分发中的应用。",
      author: "李教授",
      date: "2025-04-02"
    },
    {
      id: 3,
      title: "量子算法研究进展",
      content: "量子算法相较于经典算法具有指数级加速优势。本文介绍Shor算法、Grover算法等经典量子算法的原理与最新研究进展。",
      author: "王研究员",
      date: "2025-04-18"
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
          
          {/* Quantum Computing Content */}
          <TabsContent value="favorites" className="p-6">
            <Card className="mb-6 bg-purple-50 border-none">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-purple-700 mb-2">量子计算</h2>
                <p className="text-sm text-purple-600">探索量子计算的前沿研究与应用。</p>
              </CardContent>
            </Card>
            
            <div className="mt-6 mb-4">
              <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 flex w-fit items-center gap-1 px-3 py-1">
                <Calendar className="h-3 w-3" />
                <span>量子计算研究文章</span>
              </Badge>
            </div>
            
            <div className="space-y-6">
              {quantumArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.content}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>作者: {article.author}</span>
                      <span>发布日期: {article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

export default QuantumComputing;
