import { NotePreview } from "@/myComponents/NotePreview";
import type { notesType } from "@/utils/notesType";
import { useState } from "react";
import { SearchBar } from "@/myComponents/searchBar";

export function HomePage({
    editNote,
    deleteNote,
    notes,
}: {
    editNote: (oldNote: notesType, newNote: notesType) => void;
    deleteNote: (note: notesType) => void;
    notes: notesType[];
}) {
    const [search, setSearch] = useState("");
    const filteredNotes = notes.filter((note) => {
        if (!search) return note;
        const lower = search.toLowerCase();
        return (
            note.title.toLowerCase().includes(lower) ||
            note.content.toLowerCase().includes(lower)
        );
    });
    return (
        <div>
            <h1 className="text-4xl text-center my-4">Mes notes</h1>
            <SearchBar search={search} setSearch={setSearch} />
            {filteredNotes.map((note: notesType) => {
                return (
                    <NotePreview
                        key={note.id}
                        note={note}
                        editNote={editNote}
                        deleteNote={deleteNote}
                    />
                );
            })}
        </div>
    );
}
