import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuiserieSidebar } from "@/components/MenuiserieSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Search } from "lucide-react";
import { useState } from "react";

interface Facture {
  id: number;
  numero: string;
  client: string;
  date: string;
  montant: number;
  statut: "Payée" | "En attente";
}

const Factures = () => {
  const [factures] = useState<Facture[]>([
    {
      id: 1,
      numero: "FACT-2024-001",
      client: "Jean Dupont",
      date: "2024-02-20",
      montant: 1250.00,
      statut: "Payée"
    },
    {
      id: 2,
      numero: "FACT-2024-002",
      client: "Marie Martin",
      date: "2024-02-19",
      montant: 850.00,
      statut: "En attente"
    }
  ]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <MenuiserieSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Gestion des Factures</h1>
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Rechercher une facture</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
                  <Input id="search" className="pl-8" placeholder="Numéro de facture ou nom du client..." />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Numéro</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {factures.map((facture) => (
                  <TableRow key={facture.id}>
                    <TableCell>{facture.numero}</TableCell>
                    <TableCell>{facture.client}</TableCell>
                    <TableCell>{new Date(facture.date).toLocaleDateString()}</TableCell>
                    <TableCell>{facture.montant.toFixed(2)}€</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        facture.statut === "Payée" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {facture.statut}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
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

export default Factures;