
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import MoreAreas from "./pages/MoreAreas";
import AI from "./pages/AI";
import QuantumComputing from "./pages/QuantumComputing";
import Nanomaterials from "./pages/Nanomaterials";
import GlobalSituation from "./pages/GlobalSituation";
import Agriculture from "./pages/Agriculture";
import Finance from "./pages/Finance";
import Business from "./pages/Business";
import Stocks from "./pages/Stocks";
import Biotechnology from "./pages/Biotechnology";

// Import other area pages when they are created
/* For example:
import SpaceExploration from "./pages/SpaceExploration";
import GreenEnergy from "./pages/GreenEnergy";
etc.
*/

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/more-areas" element={<MoreAreas />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/quantum-computing" element={<QuantumComputing />} />
            <Route path="/nanomaterials" element={<Nanomaterials />} />
            <Route path="/global-situation" element={<GlobalSituation />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/business" element={<Business />} />
            <Route path="/stocks" element={<Stocks />} />
            
            {/* New area routes */}
            <Route path="/biotechnology" element={<Biotechnology />} />
            {/* Add other area routes here as they are created */}
            {/* For example:
            <Route path="/space-exploration" element={<SpaceExploration />} />
            <Route path="/green-energy" element={<GreenEnergy />} />
            etc.
            */}
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
