import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuiserieSidebar } from "@/components/MenuiserieSidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <MenuiserieSidebar />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;