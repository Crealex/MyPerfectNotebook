import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { notesType } from "@/utils/notesType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    note: notesType;
    editNote: (oldNote: notesType, newNote: notesType) => void;
};

export function EditNotePage({ note, editNote }: Props) {
    const [content, setContent] = useState(note.content);
    const [title, setTitle] = useState(note.title);
    const navigate = useNavigate();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newNote = {
            title: title,
            content: content,
            date: new Date().toLocaleString(),
            id: Date.now(),
        };
        editNote(note, newNote);
        navigate("/");
    }
    return (
        <div className="h-screen">
            <h1 className="text-4xl text-center my-4">Édition de la note: {note.title}</h1>
            <form className="h-full" onSubmit={(e) => onSubmit(e)}>
                <Field className="h-3/4">
                    <Input
                        placeholder="Mon titre ici..."
						content={note.title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Ma note ici..."
                        className="resize-none h-3/4"
                        required
                        onChange={(e) => setContent(e.target.value)}
                    >{note.content}</Textarea>
                    <Button type="submit">Sauvegarder</Button>
                </Field>
            </form>
        </div>
    );
}
