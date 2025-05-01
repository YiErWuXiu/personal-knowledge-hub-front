
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "./pages/Login";
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
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            
            <Route path="/favorites" element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            } />
            
            <Route path="/more-areas" element={
              <ProtectedRoute>
                <MoreAreas />
              </ProtectedRoute>
            } />
            
            <Route path="/ai" element={
              <ProtectedRoute>
                <AI />
              </ProtectedRoute>
            } />
            
            <Route path="/quantum-computing" element={
              <ProtectedRoute>
                <QuantumComputing />
              </ProtectedRoute>
            } />
            
            <Route path="/nanomaterials" element={
              <ProtectedRoute>
                <Nanomaterials />
              </ProtectedRoute>
            } />
            
            <Route path="/global-situation" element={
              <ProtectedRoute>
                <GlobalSituation />
              </ProtectedRoute>
            } />
            
            <Route path="/agriculture" element={
              <ProtectedRoute>
                <Agriculture />
              </ProtectedRoute>
            } />
            
            <Route path="/finance" element={
              <ProtectedRoute>
                <Finance />
              </ProtectedRoute>
            } />
            
            <Route path="/business" element={
              <ProtectedRoute>
                <Business />
              </ProtectedRoute>
            } />
            
            <Route path="/stocks" element={
              <ProtectedRoute>
                <Stocks />
              </ProtectedRoute>
            } />
            
            <Route path="/biotechnology" element={
              <ProtectedRoute>
                <Biotechnology />
              </ProtectedRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
