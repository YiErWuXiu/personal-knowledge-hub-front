
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendationCard from "@/components/RecommendationCard";

const Favorites = () => {
  const navigate = useNavigate();
  const recommendations = [
    {
      id: 1,
      title: "量子计算",
      description: "量子计算技术进展与应用展望",
      icon: "quantum"
    },
    {
      id: 2,
      title: "生物科技",
      description: "生命科学创新与应用研究",
      icon: "bio"
    },
    {
      id: 3,
      title: "Web3",
      description: "去中心化网络技术与应用",
      icon: "web"
    }
  ];

  const handleCardClick = (id: number) => {
    if (id === 1) {
      navigate('/quantum-computing');
    }
  };

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
            >
              我的喜欢
            </TabsTrigger>
          </TabsList>
          
          {/* Favorites Tab Content */}
          <TabsContent value="favorites">
            <div className="p-6">
              <Card className="mb-6 bg-purple-50 border-none">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-purple-700 mb-2">我的喜欢</h2>
                  <p className="text-sm text-purple-600">这里是系统推荐的领域，与个人知识库不相通。</p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {recommendations.map((rec) => (
                  <div key={rec.id} onClick={() => handleCardClick(rec.id)} className="cursor-pointer">
                    <RecommendationCard recommendation={rec} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Home Tab Content - Empty since we're on Favorites page */}
          <TabsContent value="home">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">首页</h2>
              <p className="text-gray-500">请切换到首页标签查看内容。</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Favorites;
