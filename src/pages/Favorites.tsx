
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendationCard from "@/components/RecommendationCard";

const Favorites = () => {
  const navigate = useNavigate();
  const recommendations = [{
    id: 1,
    title: "纳米材料",
    description: "纳米材料的研究进展与应用前景",
    icon: "nano"
  }, {
    id: 2,
    title: "国际形势",
    description: "全球地缘政治与经济发展趋势",
    icon: "global"
  }, {
    id: 3,
    title: "农业领域",
    description: "现代农业技术与可持续发展",
    icon: "agriculture"
  }];
  
  const handleCardClick = (id: number) => {
    if (id === 1) {
      navigate('/nanomaterials');
    } else if (id === 2) {
      navigate('/global-situation');
    } else if (id === 3) {
      navigate('/agriculture');
    }
  };
  
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Main Content */}
      <main className="flex-1 p-0">
        {/* Navigation Tabs */}
        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="w-full rounded-none premium-header">
            <TabsTrigger value="home" className="data-[state=active]:bg-slate-900/80 text-white px-8 py-2 rounded-none" onClick={() => navigate('/')}>
              首页
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-slate-900/80 text-white px-8 py-2 rounded-none">
              我的收藏
            </TabsTrigger>
            <TabsTrigger value="more-areas" className="data-[state=active]:bg-slate-900/80 text-white px-8 py-2 rounded-none" onClick={() => navigate('/more-areas')}>
              更多领域
            </TabsTrigger>
          </TabsList>
          
          {/* Favorites Tab Content */}
          <TabsContent value="favorites">
            <div className="p-6">
              <Card className="mb-6 premium-card">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-slate-800 mb-2">我的收藏</h2>
                  <p className="text-sm text-slate-600">这里是用户喜欢的领域，与个人知识库不相通。</p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {recommendations.map(rec => <div key={rec.id} onClick={() => handleCardClick(rec.id)} className="cursor-pointer">
                    <RecommendationCard recommendation={rec} />
                  </div>)}
              </div>
            </div>
          </TabsContent>
          
          {/* Home Tab Content - Empty since we're on Favorites page */}
          <TabsContent value="home">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">首页</h2>
              <p className="text-slate-500">请切换到首页标签查看内容。</p>
            </div>
          </TabsContent>
          
          {/* More Areas Tab Content */}
          <TabsContent value="more-areas">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">更多领域</h2>
              <p className="text-slate-500">请切换到更多领域标签查看内容。</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>;
};

export default Favorites;
