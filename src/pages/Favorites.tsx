
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendationCard from "@/components/RecommendationCard";
import { useFavorites } from "@/contexts/FavoritesContext";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  
  const handleCardClick = (path: string) => {
    navigate(path);
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
            <TabsTrigger 
              value="more-areas" 
              className="data-[state=active]:bg-slate-800 text-white px-8 py-2 rounded-none" 
              onClick={() => navigate('/more-areas')}
            >
              更多领域
            </TabsTrigger>
          </TabsList>
          
          {/* Favorites Tab Content */}
          <TabsContent value="favorites">
            <div className="p-6">
              <Card className="mb-6 bg-purple-50 border-none">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-purple-700 mb-2">我的喜欢</h2>
                  <p className="text-sm text-purple-600">这里是用户喜欢的领域，与个人知识库不相通。</p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {favorites.length > 0 ? (
                  favorites.map(area => (
                    <div 
                      key={area.id} 
                      onClick={() => handleCardClick(area.path)} 
                      className="cursor-pointer"
                    >
                      <RecommendationCard recommendation={area} />
                    </div>
                  ))
                ) : (
                  <p className="col-span-3 text-center text-gray-500 py-8">
                    还没有收藏的领域。从"更多领域"中添加一些吧！
                  </p>
                )}
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
          
          {/* More Areas Tab Content */}
          <TabsContent value="more-areas">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">更多领域</h2>
              <p className="text-gray-500">请切换到更多领域标签查看内容。</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Favorites;
