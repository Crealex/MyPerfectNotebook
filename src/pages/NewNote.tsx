import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function NewNotePage() {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    function onSubmit(e: HTMLFormElement) {
        const dataNote = {
            title: title,
            content: content,
            date: new Date().toLocaleString(),
        };
        e.preventDefault();
        localStorage.setItem(
            "note: " + dataNote.date,
            JSON.stringify(dataNote),
        );
    }
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
