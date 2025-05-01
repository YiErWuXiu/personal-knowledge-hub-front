
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendationCard from "@/components/RecommendationCard";

const MoreAreas = () => {
  const navigate = useNavigate();
  
  // All recommended areas - 30 areas not in favorites or personal knowledge base
  const allAreas = [
    {
      id: 1,
      title: "人工智能",
      description: "AI技术研究与应用前沿",
      icon: "ai"
    },
    {
      id: 2,
      title: "量子计算",
      description: "量子计算研究与应用进展",
      icon: "quantum"
    },
    {
      id: 3,
      title: "纳米材料",
      description: "纳米材料的研究进展与应用前景",
      icon: "nano"
    },
    {
      id: 4,
      title: "国际形势",
      description: "全球地缘政治与经济发展趋势",
      icon: "global"
    },
    {
      id: 5,
      title: "农业领域",
      description: "现代农业技术与可持续发展",
      icon: "agriculture"
    },
    {
      id: 6,
      title: "金融",
      description: "金融市场分析与投资策略",
      icon: "finance"
    },
    {
      id: 7,
      title: "商业",
      description: "商业模式创新与企业管理",
      icon: "business"
    },
    {
      id: 8,
      title: "股市",
      description: "股票市场分析与投资研究",
      icon: "stocks"
    },
    {
      id: 9,
      title: "生物技术",
      description: "生物科技创新与医疗应用",
      icon: "biotech"
    },
    {
      id: 10,
      title: "可再生能源",
      description: "清洁能源技术与可持续发展",
      icon: "energy"
    },
    {
      id: 11,
      title: "太空探索",
      description: "宇宙探索与航天技术研究",
      icon: "space"
    },
    {
      id: 12,
      title: "数据科学",
      description: "大数据分析与机器学习技术",
      icon: "data"
    },
    {
      id: 13,
      title: "区块链",
      description: "区块链技术与加密货币研究",
      icon: "blockchain"
    },
    {
      id: 14,
      title: "网络安全",
      description: "信息安全与网络防护技术",
      icon: "security"
    },
    {
      id: 15,
      title: "机器人",
      description: "机器人技术与自动化系统",
      icon: "robot"
    },
    {
      id: 16,
      title: "医疗健康",
      description: "健康科技与医疗创新研究",
      icon: "health"
    },
    {
      id: 17,
      title: "材料科学",
      description: "先进材料研发与工业应用",
      icon: "materials"
    },
    {
      id: 18,
      title: "海洋科学",
      description: "海洋资源与生态保护研究",
      icon: "ocean"
    },
    {
      id: 19,
      title: "气候变化",
      description: "气候变化影响与应对策略",
      icon: "climate"
    },
    {
      id: 20,
      title: "智慧城市",
      description: "城市智能化与可持续发展",
      icon: "smartcity"
    },
    {
      id: 21,
      title: "教育科技",
      description: "教育创新与学习技术研究",
      icon: "edutech"
    },
    {
      id: 22,
      title: "运动科学",
      description: "体育医学与运动表现优化",
      icon: "sports"
    },
    {
      id: 23,
      title: "心理学",
      description: "心理健康与行为科学研究",
      icon: "psychology"
    },
    {
      id: 24,
      title: "音乐与艺术",
      description: "艺术创新与文化技术研究",
      icon: "arts"
    },
    {
      id: 25,
      title: "虚拟现实",
      description: "VR/AR技术与应用场景研究",
      icon: "vr"
    },
    {
      id: 26,
      title: "食品科技",
      description: "食品安全与营养健康研究",
      icon: "food"
    },
    {
      id: 27,
      title: "交通科技",
      description: "智能交通与未来出行方式",
      icon: "transport"
    },
    {
      id: 28,
      title: "语言学",
      description: "语言研究与自然语言处理",
      icon: "language"
    },
    {
      id: 29,
      title: "哲学",
      description: "现代哲学思想与伦理研究",
      icon: "philosophy"
    },
    {
      id: 30,
      title: "天体物理",
      description: "宇宙起源与天体演化研究",
      icon: "astrophysics"
    }
  ];
  
  const handleCardClick = (id: number) => {
    switch (id) {
      case 1:
        navigate('/ai');
        break;
      case 2:
        navigate('/quantum-computing');
        break;
      case 3:
        navigate('/nanomaterials');
        break;
      case 4:
        navigate('/global-situation');
        break;
      case 5:
        navigate('/agriculture');
        break;
      case 6:
        navigate('/finance');
        break;
      case 7:
        navigate('/business');
        break;
      case 8:
        navigate('/stocks');
        break;
      case 9:
        navigate('/biotech');
        break;
      case 10:
        navigate('/renewable-energy');
        break;
      case 11:
        navigate('/space-exploration');
        break;
      case 12:
        navigate('/data-science');
        break;
      case 13:
        navigate('/blockchain');
        break;
      case 14:
        navigate('/cybersecurity');
        break;
      case 15:
        navigate('/robotics');
        break;
      case 16:
        navigate('/healthcare');
        break;
      case 17:
        navigate('/materials-science');
        break;
      case 18:
        navigate('/ocean-science');
        break;
      case 19:
        navigate('/climate-change');
        break;
      case 20:
        navigate('/smart-cities');
        break;
      case 21:
        navigate('/edu-tech');
        break;
      case 22:
        navigate('/sports-science');
        break;
      case 23:
        navigate('/psychology');
        break;
      case 24:
        navigate('/music-arts');
        break;
      case 25:
        navigate('/virtual-reality');
        break;
      case 26:
        navigate('/food-tech');
        break;
      case 27:
        navigate('/transportation');
        break;
      case 28:
        navigate('/linguistics');
        break;
      case 29:
        navigate('/philosophy');
        break;
      case 30:
        navigate('/astrophysics');
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
