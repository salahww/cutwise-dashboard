import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuiserieSidebar } from "@/components/MenuiserieSidebar";

const Parametres = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <MenuiserieSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800">Paramètres</h1>
          {/* Le contenu de la page sera implémenté plus tard */}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Parametres;