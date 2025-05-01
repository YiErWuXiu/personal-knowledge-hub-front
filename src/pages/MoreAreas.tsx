
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendationCard from "@/components/RecommendationCard";

const MoreAreas = () => {
  const navigate = useNavigate();
  
  // All recommended areas
  const allAreas = [
    {
      id: 1,
      title: "人工智能",
      description: "AI技术研究与应用前沿",
      icon: "ai"
    },
    {
      id: 2,
      title: "纳米材料",
      description: "纳米材料的研究进展与应用前景",
      icon: "nano"
    },
    {
      id: 3,
      title: "国际形势",
      description: "全球地缘政治与经济发展趋势",
      icon: "global"
    },
    {
      id: 4,
      title: "农业领域",
      description: "现代农业技术与可持续发展",
      icon: "agriculture"
    },
    {
      id: 5,
      title: "金融",
      description: "金融市场分析与投资策略",
      icon: "finance"
    },
    {
      id: 6,
      title: "商业",
      description: "商业模式创新与企业管理",
      icon: "business"
    },
    {
      id: 7,
      title: "股市",
      description: "股票市场分析与投资研究",
      icon: "stocks"
    },
    {
      id: 8,
      title: "量子计算",
      description: "量子计算研究与应用进展",
      icon: "quantum"
    }
  ];
  
  const handleCardClick = (id: number) => {
    switch (id) {
      case 1:
        navigate('/ai');
        break;
      case 2:
        navigate('/nanomaterials');
        break;
      case 3:
        navigate('/global-situation');
        break;
      case 4:
        navigate('/agriculture');
        break;
      case 5:
        navigate('/finance');
        break;
      case 6:
        navigate('/business');
        break;
      case 7:
        navigate('/stocks');
        break;
      case 8:
        navigate('/quantum-computing');
        break;
    }
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
