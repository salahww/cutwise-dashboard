import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuiserieSidebar } from "@/components/MenuiserieSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Plus } from "lucide-react";

interface StockItem {
  id: number;
  nom: string;
  quantite: number;
  prix: number;
  categorie: string;
}

const Stock = () => {
  const [stockItems, setStockItems] = useState<StockItem[]>([
    { id: 1, nom: "Panneau MDF 19mm", quantite: 50, prix: 45.99, categorie: "Panneaux" },
    { id: 2, nom: "Charnières 35mm", quantite: 200, prix: 2.99, categorie: "Quincaillerie" },
    { id: 3, nom: "Vis 4x30mm (boîte)", quantite: 100, prix: 9.99, categorie: "Quincaillerie" },
  ]);

  const [newItem, setNewItem] = useState<Partial<StockItem>>({
    nom: "",
    quantite: 0,
    prix: 0,
    categorie: "",
  });

  const handleAddItem = () => {
    if (newItem.nom && newItem.quantite && newItem.prix && newItem.categorie) {
      setStockItems([
        ...stockItems,
        {
          id: stockItems.length + 1,
          nom: newItem.nom,
          quantite: newItem.quantite,
          prix: newItem.prix,
          categorie: newItem.categorie,
        },
      ]);
      setNewItem({ nom: "", quantite: 0, prix: 0, categorie: "" });
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <MenuiserieSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion du Stock</h1>
          
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Ajouter un article</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  value={newItem.nom}
                  onChange={(e) => setNewItem({ ...newItem, nom: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="quantite">Quantité</Label>
                <Input
                  id="quantite"
                  type="number"
                  value={newItem.quantite}
                  onChange={(e) => setNewItem({ ...newItem, quantite: Number(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="prix">Prix</Label>
                <Input
                  id="prix"
                  type="number"
                  value={newItem.prix}
                  onChange={(e) => setNewItem({ ...newItem, prix: Number(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="categorie">Catégorie</Label>
                <Input
                  id="categorie"
                  value={newItem.categorie}
                  onChange={(e) => setNewItem({ ...newItem, categorie: e.target.value })}
                />
              </div>
            </div>
            <Button onClick={handleAddItem} className="mt-4">
              <Plus className="mr-2 h-4 w-4" /> Ajouter
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Quantité</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Catégorie</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.nom}</TableCell>
                    <TableCell>{item.quantite}</TableCell>
                    <TableCell>{item.prix}€</TableCell>
                    <TableCell>{item.categorie}</TableCell>
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

export default Stock;