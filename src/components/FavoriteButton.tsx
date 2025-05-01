
import { BookmarkPlus, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites, FavoriteArea } from "@/contexts/FavoritesContext";
import { toast } from "@/hooks/use-toast";

interface FavoriteButtonProps {
  areaId: number;
  areaInfo: {
    title: string;
    description: string;
    icon: string;
    path: string;
  };
}

const FavoriteButton = ({ areaId, areaInfo }: FavoriteButtonProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isInFavorites = isFavorite(areaId);

  const toggleFavorite = () => {
    if (isInFavorites) {
      removeFavorite(areaId);
      toast({
        title: "已移除收藏",
        description: `${areaInfo.title} 已从我的收藏中移除`,
      });
    } else {
      const favoriteArea: FavoriteArea = {
        id: areaId,
        title: areaInfo.title,
        description: areaInfo.description,
        icon: areaInfo.icon,
        path: areaInfo.path
      };
      addFavorite(favoriteArea);
      toast({
        title: "已添加到收藏",
        description: `${areaInfo.title} 已添加到我的收藏`,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleFavorite}
      className={`gap-2 rounded-full transition-all duration-300 ${
        isInFavorites 
          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
          : 'bg-white/50 text-gray-700 hover:bg-white/80'
      }`}
    >
      {isInFavorites ? (
        <>
          <BookmarkCheck className="h-5 w-5" />
          <span>已收藏</span>
        </>
      ) : (
        <>
          <BookmarkPlus className="h-5 w-5" />
          <span>添加到我的收藏</span>
        </>
      )}
    </Button>
  );
};

export default FavoriteButton;
