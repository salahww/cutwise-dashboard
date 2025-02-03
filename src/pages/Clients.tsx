import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuiserieSidebar } from "@/components/MenuiserieSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

interface Client {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
}

const Clients = () => {
  const [clients] = useState<Client[]>([
    {
      id: 1,
      nom: "Jean Dupont",
      email: "jean.dupont@email.com",
      telephone: "06 12 34 56 78",
      adresse: "123 Rue de Paris, 75001 Paris"
    },
    {
      id: 2,
      nom: "Marie Martin",
      email: "marie.martin@email.com",
      telephone: "06 98 76 54 32",
      adresse: "456 Avenue des Champs-Élysées, 75008 Paris"
    }
  ]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <MenuiserieSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Gestion des Clients</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nouveau Client
            </Button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Rechercher un client</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
                  <Input id="search" className="pl-8" placeholder="Nom, email ou téléphone..." />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Adresse</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.nom}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.telephone}</TableCell>
                    <TableCell>{client.adresse}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Clients;