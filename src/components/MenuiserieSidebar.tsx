import { Home, Package, ShoppingCart, Users, FileText, Settings, BarChart2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/",
  },
  {
    title: "Stock",
    icon: Package,
    url: "/stock",
  },
  {
    title: "Commandes",
    icon: ShoppingCart,
    url: "/commandes",
  },
  {
    title: "Clients",
    icon: Users,
    url: "/clients",
  },
  {
    title: "Factures",
    icon: FileText,
    url: "/factures",
  },
  {
    title: "Optimisation",
    icon: BarChart2,
    url: "/optimisation",
  },
  {
    title: "Paramètres",
    icon: Settings,
    url: "/parametres",
  },
];

export function MenuiserieSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-xl font-bold text-menuiserie-400">MenuiPro</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}