import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { notesType } from "@/utils/notesType";
import type { User } from "@supabase/supabase-js";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
    editNote: (oldNote: notesType, newNote: notesType) => void;
    notes: notesType[];
	user: User | null;
};

export function EditNotePage({ notes, editNote, user }: Props) {
    const navigate = useNavigate();
    const { note: noteId } = useParams<{ note: string }>();

    const note =
        notes.find((e: notesType) => e.id.toString() === noteId) ?? null;
    const [content, setContent] = useState(note?.content);
    const [title, setTitle] = useState(note?.title);
    if (note == null) {
        navigate("/new");
        return <div>Not found...</div>;
    }

    // ! apres une variable dit au compilateur: c'est sur qu'elle existe
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newNote = {
            title: title!,
            content: content!,
            date: new Date().toLocaleString(),
            id: note!.id!,
			user_id: user!.id
        };
        editNote(note!, newNote);
        navigate("/");
    }
    return (
        <div className="h-screen">
            <h1 className="text-4xl text-center my-4">
                Édition de la note: {note?.title}
            </h1>
            <form className="h-full" onSubmit={(e) => onSubmit(e)}>
                <Field className="h-3/4">
                    <Input
                        placeholder="Mon titre ici..."
                        value={title}
                        contentEditable={true}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Ma note ici..."
                        className="resize-none h-3/4"
                        defaultValue={content}
                        required
                        onChange={(e) => setContent(e.target.value)}
                    ></Textarea>
                    <Button type="submit">Sauvegarder</Button>
                </Field>
            </form>
        </div>
    );
}
