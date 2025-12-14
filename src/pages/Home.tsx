import { NotePreview } from "@/myComponents/NotePreview";
import type { notesType } from "@/utils/notesType";
import { useState } from "react";
import { SearchBar } from "@/myComponents/searchBar";
import { Frown } from "lucide-react";
import type { User } from "@supabase/supabase-js";

export function HomePage({
    editNote,
    deleteNote,
    notes,
    user,
}: {
    editNote: (oldNote: notesType, newNote: notesType) => void;
    deleteNote: (note: notesType) => void;
    notes: notesType[];
    user: User | null;
}) {
    const [search, setSearch] = useState("");
    // Filtre pour la search bar
    const filteredNotes = notes.filter((note) => {
        if (!search) return true;
        const lower = search.toLowerCase();
        return (
            note.title.toLowerCase().includes(lower) ||
            note.content.toLowerCase().includes(lower)
        );
    });
    // tri par date
    const sortedNotes = filteredNotes.sort((a, b) => {
        if (a.last_edit < b.last_edit) return 1;
        if (b.last_edit < a.last_edit) return -1;
        return 0;
    });
    if (!user)
        return (
            <div className="text-center text-xl mt-16 flex gap-4 justify-center">
                Pas de compte connecté <Frown />
            </div>
        );
    return (
        <div>
            <h1 className="text-4xl text-center my-4">Mes notes</h1>
            <SearchBar search={search} setSearch={setSearch} />
            {sortedNotes.length === 0 ? (
                <div className="text-center text-xl mt-16 flex gap-4 justify-center">
                    Aucune note trouvée pour {search}
                    <Frown />
                </div>
            ) : (
                sortedNotes.map((note: notesType) => (
                    <NotePreview
                        key={note.id}
                        note={note}
                        editNote={editNote}
                        deleteNote={deleteNote}
                        user={user}
                    />
                ))
            )}
        </div>
    );
}
