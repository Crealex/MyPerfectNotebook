import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/initSupabase";

export function SignOut() {
    async function onClick() {
        const { error } = await supabase.auth.signOut();
        if (error) console.log("Impossible de se deconnecter" + error.message);
    }
    return <Button onClick={onClick}>Se déconnecter...</Button>;
}
