import { NotePreview } from "@/myComponents/NotePreview";
import type { notesType } from "@/utils/notesType";
import { useState } from "react";
import { SearchBar } from "@/myComponents/searchBar";
import { Frown } from "lucide-react";

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
        if (!search) return true;
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
            {filteredNotes.length === 0 ? (
                <div className="text-center text-xl mt-16 flex gap-4 justify-center">
                    Aucune note trouvée pour {search}
                    <Frown />
                </div>
            ) : (
                filteredNotes.map((note: notesType) => (
                    <NotePreview
                        key={note.id}
                        note={note}
                        editNote={editNote}
                        deleteNote={deleteNote}
                    />
                ))
            )}
        </div>
    );
}
