
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Biotech from "./pages/Biotech";
import RenewableEnergy from "./pages/RenewableEnergy";
import SpaceExploration from "./pages/SpaceExploration";
import DataScience from "./pages/DataScience";
import Blockchain from "./pages/Blockchain";
import Cybersecurity from "./pages/Cybersecurity";
import Robotics from "./pages/Robotics";
import Healthcare from "./pages/Healthcare";
import MaterialsScience from "./pages/MaterialsScience";
import OceanScience from "./pages/OceanScience";
import ClimateChange from "./pages/ClimateChange";
import SmartCities from "./pages/SmartCities";
import EduTech from "./pages/EduTech";
import SportsScience from "./pages/SportsScience";
import Psychology from "./pages/Psychology";
import MusicArts from "./pages/MusicArts";
import VirtualReality from "./pages/VirtualReality";
import FoodTech from "./pages/FoodTech";
import Transportation from "./pages/Transportation";
import Linguistics from "./pages/Linguistics";
import Philosophy from "./pages/Philosophy";
import Astrophysics from "./pages/Astrophysics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
          <Route path="/biotech" element={<Biotech />} />
          <Route path="/renewable-energy" element={<RenewableEnergy />} />
          <Route path="/space-exploration" element={<SpaceExploration />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/robotics" element={<Robotics />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/materials-science" element={<MaterialsScience />} />
          <Route path="/ocean-science" element={<OceanScience />} />
          <Route path="/climate-change" element={<ClimateChange />} />
          <Route path="/smart-cities" element={<SmartCities />} />
          <Route path="/edu-tech" element={<EduTech />} />
          <Route path="/sports-science" element={<SportsScience />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/music-arts" element={<MusicArts />} />
          <Route path="/virtual-reality" element={<VirtualReality />} />
          <Route path="/food-tech" element={<FoodTech />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/linguistics" element={<Linguistics />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/astrophysics" element={<Astrophysics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
