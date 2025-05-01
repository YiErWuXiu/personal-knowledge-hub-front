
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import AI from "./pages/AI";
import QuantumComputing from "./pages/QuantumComputing";
import Nanomaterials from "./pages/Nanomaterials";
import GlobalSituation from "./pages/GlobalSituation";
import Agriculture from "./pages/Agriculture";

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
          <Route path="/ai" element={<AI />} />
          <Route path="/quantum-computing" element={<QuantumComputing />} />
          <Route path="/nanomaterials" element={<Nanomaterials />} />
          <Route path="/global-situation" element={<GlobalSituation />} />
          <Route path="/agriculture" element={<Agriculture />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
