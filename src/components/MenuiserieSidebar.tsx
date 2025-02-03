import { Home, Package, ShoppingCart, Users, FileText, Settings, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";
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
    group: "Principal",
    items: [
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
    ],
  },
  {
    group: "Gestion",
    items: [
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
    ],
  },
  {
    group: "Outils",
    items: [
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
    ],
  },
];

export function MenuiserieSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-xl font-bold text-menuiserie-400">MenuiPro</h1>
          <p className="text-sm text-menuiserie-300">Gestion de Menuiserie</p>
        </div>
        {menuItems.map((group) => (
          <SidebarGroup key={group.group}>
            <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={item.url} 
                        className="flex items-center gap-2 hover:text-menuiserie-400 transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}