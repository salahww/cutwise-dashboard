import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuiserieSidebar } from "@/components/MenuiserieSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Eye } from "lucide-react";
import { useState } from "react";

interface Commande {
  id: number;
  client: string;
  date: string;
  montant: number;
  statut: string;
}

const Commandes = () => {
  const [commandes] = useState<Commande[]>([
    {
      id: 1,
      client: "Jean Dupont",
      date: "2024-02-20",
      montant: 1250.00,
      statut: "En cours"
    },
    {
      id: 2,
      client: "Marie Martin",
      date: "2024-02-19",
      montant: 850.00,
      statut: "Terminée"
    }
  ]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <MenuiserieSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Gestion des Commandes</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nouvelle Commande
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {commandes.map((commande) => (
                  <TableRow key={commande.id}>
                    <TableCell>{commande.client}</TableCell>
                    <TableCell>{new Date(commande.date).toLocaleDateString()}</TableCell>
                    <TableCell>{commande.montant.toFixed(2)}€</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        commande.statut === "Terminée" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {commande.statut}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
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

export default Commandes;