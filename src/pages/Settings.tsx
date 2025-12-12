import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { SignIn } from "@/myComponents/SignIn";
import { SignOut } from "@/myComponents/SignOut";
import { SignUp } from "@/myComponents/SignUp";
import type { User } from "@supabase/supabase-js";
import { FileDown } from "lucide-react";

function ConnectionStatus({ user }: { user: User | null }) {
    if (user) return <div>Actuellement connecté avec {user.email}</div>;
    else return <div>Pas connecté</div>;
}

export function SettingsPage({ user }: { user: User | null }) {
    function downloadJson() {
        console.log("Fonction non disponible");
    }

    return (
        <div className="gap-5">
            <h1 className="text-4xl text-center my-4">Paramètres</h1>
            <Button onClick={downloadJson}>
                <FileDown /> Télécharger les notes au format JSON
            </Button>
            <Card className="gap-5 w-full mt-5 flex flex-col justify-center text-center">
                <CardHeader className="text-2xl ">Gestion du compte</CardHeader>
                <CardDescription>
                    <ConnectionStatus user={user} />
                </CardDescription>
                <CardContent className="gap-3 flex flex-col w-2/3 justify-center mx-auto">
                    <SignIn />
                    <SignUp />
                    <SignOut />
                </CardContent>
            </Card>
        </div>
    );
}
