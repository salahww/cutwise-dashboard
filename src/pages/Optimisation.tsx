import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuiserieSidebar } from "@/components/MenuiserieSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Schéma de validation pour le formulaire
const optimisationSchema = z.object({
  panneauLongueur: z.string().transform(Number),
  panneauLargeur: z.string().transform(Number),
  pieces: z.array(z.object({
    longueur: z.number(),
    largeur: z.number(),
    quantite: z.number(),
  })),
});

type OptimisationFormData = z.infer<typeof optimisationSchema>;

const Optimisation = () => {
  const { toast } = useToast();
  const [pieces, setPieces] = useState<{ longueur: number; largeur: number; quantite: number; }[]>([]);
  const [resultat, setResultat] = useState<string | null>(null);

  const form = useForm<OptimisationFormData>({
    resolver: zodResolver(optimisationSchema),
    defaultValues: {
      panneauLongueur: "",
      panneauLargeur: "",
      pieces: [],
    },
  });

  const ajouterPiece = () => {
    setPieces([...pieces, { longueur: 0, largeur: 0, quantite: 1 }]);
  };

  const optimiserDecoupe = (data: OptimisationFormData) => {
    // Algorithme simple d'optimisation (à améliorer)
    let surfaceTotale = 0;
    const surfacePanneau = data.panneauLongueur * data.panneauLargeur;

    pieces.forEach(piece => {
      surfaceTotale += piece.longueur * piece.largeur * piece.quantite;
    });

    const nombrePanneaux = Math.ceil(surfaceTotale / surfacePanneau);
    
    setResultat(`Nombre de panneaux nécessaires: ${nombrePanneaux}`);
    
    toast({
      title: "Optimisation terminée",
      description: `Calcul effectué pour ${pieces.length} types de pièces différentes.`,
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <MenuiserieSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Optimisation de Découpe</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(optimiserDecoupe)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="panneauLongueur"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Longueur du panneau (mm)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="panneauLargeur"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Largeur du panneau (mm)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Liste des pièces à découper</h3>
                    {pieces.map((piece, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4">
                        <div>
                          <Label>Longueur (mm)</Label>
                          <Input
                            type="number"
                            value={piece.longueur}
                            onChange={(e) => {
                              const newPieces = [...pieces];
                              newPieces[index].longueur = Number(e.target.value);
                              setPieces(newPieces);
                            }}
                          />
                        </div>
                        <div>
                          <Label>Largeur (mm)</Label>
                          <Input
                            type="number"
                            value={piece.largeur}
                            onChange={(e) => {
                              const newPieces = [...pieces];
                              newPieces[index].largeur = Number(e.target.value);
                              setPieces(newPieces);
                            }}
                          />
                        </div>
                        <div>
                          <Label>Quantité</Label>
                          <Input
                            type="number"
                            value={piece.quantite}
                            onChange={(e) => {
                              const newPieces = [...pieces];
                              newPieces[index].quantite = Number(e.target.value);
                              setPieces(newPieces);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={ajouterPiece}
                    className="w-full"
                  >
                    Ajouter une pièce
                  </Button>

                  <Button type="submit" className="w-full">
                    Calculer l'optimisation
                  </Button>
                </form>
              </Form>

              {resultat && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <h3 className="text-lg font-medium text-green-800">Résultat de l'optimisation</h3>
                  <p className="text-green-700">{resultat}</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Optimisation;