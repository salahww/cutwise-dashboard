import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Stock from "./pages/Stock";
import Commandes from "./pages/Commandes";
import Clients from "./pages/Clients";
import Factures from "./pages/Factures";
import Optimisation from "./pages/Optimisation";
import Parametres from "./pages/Parametres";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/commandes" element={<Commandes />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/factures" element={<Factures />} />
          <Route path="/optimisation" element={<Optimisation />} />
          <Route path="/parametres" element={<Parametres />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;