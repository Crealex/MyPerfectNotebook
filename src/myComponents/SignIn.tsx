import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { supabase } from "@/utils/initSupabase";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function SignIn() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function logUser(e: React.FormEvent) {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) {
            console.log("Gestion de l'erreur: " + error.message);
            return;
        }
        if (data) {
            console.log("User: " + data.user?.email + ", id: " + data.user.id);
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Se connecter!</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form onSubmit={logUser}>
                    <Field className="gap-5">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            required
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit">Valider</Button>
                    </Field>
                </form>
            </PopoverContent>
        </Popover>
    );
}
