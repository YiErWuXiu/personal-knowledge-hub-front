
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendationCard from "@/components/RecommendationCard";

const MoreAreas = () => {
  const navigate = useNavigate();
  
  // All recommended areas - updated to have 9 unique areas
  const allAreas = [
    {
      id: 1,
      title: "生物科技",
      description: "生物技术的最新研究与应用",
      icon: "bio"
    },
    {
      id: 2,
      title: "太空探索",
      description: "太空探索与星际旅行的前沿研究",
      icon: "space"
    },
    {
      id: 3,
      title: "绿色能源",
      description: "可再生能源技术与可持续发展",
      icon: "energy"
    },
    {
      id: 4,
      title: "教育科技",
      description: "教育创新与数字化学习方法",
      icon: "edutech"
    },
    {
      id: 5,
      title: "机器人学",
      description: "机器人设计与自动化技术发展",
      icon: "robotics"
    },
    {
      id: 6,
      title: "医疗健康",
      description: "现代医疗技术与健康管理创新",
      icon: "health"
    },
    {
      id: 7,
      title: "智慧城市",
      description: "智能城市规划与城市科技应用",
      icon: "city"
    },
    {
      id: 8,
      title: "海洋科学",
      description: "海洋研究与海洋资源可持续利用",
      icon: "ocean"
    },
    {
      id: 9,
      title: "心理学",
      description: "心理学研究与心理健康应用",
      icon: "psycho"
    }
  ];
  
  const handleCardClick = (id: number) => {
    // For now, clicking on any area just shows an alert
    alert(`您选择了: ${allAreas.find(area => area.id === id)?.title}。此页面正在建设中。`);
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="flex-1 p-0">
        <Tabs defaultValue="more-areas" className="w-full">
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
            >
              更多领域
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="more-areas">
            <div className="p-6">
              <Card className="mb-6 bg-purple-50 border-none">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-purple-700 mb-2">更多领域</h2>
                  <p className="text-sm text-purple-600">探索更多知识领域，点击感兴趣的内容查看详情。</p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {allAreas.map(area => (
                  <div key={area.id} onClick={() => handleCardClick(area.id)} className="cursor-pointer">
                    <RecommendationCard recommendation={area} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="home">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">首页</h2>
              <p className="text-gray-500">请切换到首页标签查看内容。</p>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">我的喜欢</h2>
              <p className="text-gray-500">请切换到我的喜欢标签查看内容。</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MoreAreas;
