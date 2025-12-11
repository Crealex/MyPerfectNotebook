import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function SettingsPage() {
    function downloadJson() {
        console.log("Fonction non disponible");
    }
    return (
        <div>
            <h1 className="text-4xl text-center my-4">Paramètres</h1>
            <Button onClick={downloadJson}>
                <FileDown /> Télécharger les notes au format JSON
            </Button>
        </div>
    );
}
