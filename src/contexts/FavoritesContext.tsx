
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the type for a favorite area
export interface FavoriteArea {
  id: number;
  title: string;
  description: string;
  icon: string;
  path: string;
}

interface FavoritesContextType {
  favorites: FavoriteArea[];
  addFavorite: (area: FavoriteArea) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteArea[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (e) {
        console.error('Failed to parse favorites from localStorage:', e);
      }
    } else {
      // Set default favorites for demo purposes
      const defaultFavorites: FavoriteArea[] = [
        {
          id: 1,
          title: "纳米材料",
          description: "纳米材料的研究进展与应用前景",
          icon: "nano",
          path: "/nanomaterials"
        },
        {
          id: 2,
          title: "国际形势",
          description: "全球地缘政治与经济发展趋势",
          icon: "global",
          path: "/global-situation"
        },
        {
          id: 3,
          title: "农业领域",
          description: "现代农业技术与可持续发展",
          icon: "agriculture",
          path: "/agriculture"
        }
      ];
      setFavorites(defaultFavorites);
      localStorage.setItem('favorites', JSON.stringify(defaultFavorites));
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (area: FavoriteArea) => {
    if (!favorites.some(fav => fav.id === area.id)) {
      setFavorites([...favorites, area]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some(fav => fav.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
