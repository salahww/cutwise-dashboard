import { Card } from "@/components/ui/card";
import { Package, AlertTriangle, XCircle } from "lucide-react";

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
        <div className="text-sm text-gray-500">Dernière mise à jour: {new Date().toLocaleDateString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-menuiserie-100 p-3 rounded-lg">
              <Package className="h-6 w-6 text-menuiserie-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500">En stock</p>
              <p className="text-2xl font-bold text-gray-800">20</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Stock faible</p>
              <p className="text-2xl font-bold text-gray-800">4</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Rupture de stock</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Valeur totale du stock</h2>
        <p className="text-4xl font-bold text-menuiserie-400">10,200,323 €</p>
      </Card>
    </div>
  );
}