
import { useState } from "react";
import { ArrowRight, Bookmark, Briefcase, Calendar, Home, Search, Upload, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import KnowledgeCard from "@/components/KnowledgeCard";
import RecommendationCard from "@/components/RecommendationCard";
import UploadArea from "@/components/UploadArea";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const recentKnowledge = [
    {
      id: 1,
      title: "人工智能在教育领域的应用研究",
      source: "从 edu.ai.cn 导入",
      date: "2025-04-12",
      icon: "ai"
    },
    {
      id: 2,
      title: "量子计算与密码学的交叉研究",
      source: "从 quantum-research.org 导入",
      date: "2025-04-11",
      icon: "quantum"
    },
    {
      id: 3,
      title: "区块链技术在供应链管理中的应用",
      source: "从 blockchain-supply.com 导入",
      date: "2025-04-10",
      icon: "blockchain"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-0">
        {/* Navigation Tabs */}
        <Tabs defaultValue="home" className="w-full">
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
              onClick={() => navigate('/favorites')}
            >
              我的喜欢
            </TabsTrigger>
          </TabsList>
          
          {/* Home Tab Content */}
          <TabsContent value="home" className="p-6">
            {/* Welcome Card */}
            <Card className="mb-6 bg-purple-50 border-none">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-purple-700 mb-2">欢迎回来</h2>
                <p className="text-sm text-purple-600">欢迎使用个人知识库。获取最新资讯。</p>
              </CardContent>
            </Card>

            {/* Content Input Section */}
            <div className="mb-6">
              <h3 className="text-lg mb-4 text-blue-600">输入或上传内容</h3>
              
              {/* Text Input */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">输入网址或链接地址:</p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="输入网址或链接地址..." 
                    className="flex-1"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <Button size="icon" className="bg-violet-500 hover:bg-violet-600">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Upload Area */}
              <UploadArea />
            </div>

            {/* Recent Knowledge */}
            <div className="mt-8">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 flex w-fit items-center gap-1 px-3 py-1 mb-4">
                <Calendar className="h-3 w-3" />
                <span>最近更新的知识</span>
              </Badge>
              
              <div className="space-y-3">
                {recentKnowledge.map((item) => (
                  <KnowledgeCard key={item.id} knowledge={item} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Favorites Tab Content */}
          <TabsContent value="favorites">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">我的喜欢</h2>
              <p className="text-gray-500">点击下方按钮查看我的喜欢页面。</p>
              <Button 
                className="mt-4" 
                onClick={() => navigate('/favorites')}
              >
                查看我的喜欢
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
