import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { notesType } from "@/utils/notesType";
import type { User } from "@supabase/supabase-js";
import { Frown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    notes: notesType[];
    addNote: (note: notesType) => void;
    user: User | null;
};

export function NewNotePage({ addNote, user }: Props) {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newNote = {
            title: title,
            content: content,
            date_display: new Date().toLocaleString(),
            last_edit: new Date().toISOString(),
            id: Date.now(),
            user_id: user!.id,
        };
        addNote(newNote);
        navigate("/");
    }
    if (!user)
        return (
            <div className="flex gap-2 text-center mt-10">
                Tu n'es pas connecté <Frown />
            </div>
        );
    return (
        <div className="h-screen">
            <h1 className="text-4xl text-center my-4">Nouvelle note</h1>
            <form className="h-full" onSubmit={(e) => onSubmit(e)}>
                <Field className="h-3/4">
                    <Input
                        placeholder="Mon titre ici..."
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Ma note ici..."
                        className="resize-none h-3/4"
                        required
                        onChange={(e) => setContent(e.target.value)}
                    ></Textarea>
                    <Button type="submit">Sauvegarder</Button>
                </Field>
            </form>
        </div>
    );
}
