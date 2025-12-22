import { NotePreview } from "@/myComponents/NotePreview";
import type { notesType, tagsType } from "@/utils/notesType";
import { useState } from "react";
import { SearchBar } from "@/myComponents/searchBar";
import { Frown } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { TagsFilter } from "@/myComponents/TagsFilter";
import { getAvailableTags } from "@/utils/getAvailableTags";

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
    const [tagsFilter, setTagsFilter] = useState<tagsType[]>([]);
    //Filtre des tags
    const filteredTags = notes.filter((note) => {
        if (!tagsFilter.at(0)) return true;
        return note.tags.some((tag) =>
            tagsFilter.some((filtre) => filtre.name === tag.name),
        );
    });
    // Filtre pour la search bar
    const filteredNotes = filteredTags.filter((note) => {
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
            <div className="flex gap-2">
                <SearchBar search={search} setSearch={setSearch} />
                <TagsFilter
                    tagsFilter={tagsFilter}
                    setTagsFilter={setTagsFilter}
                    tags={getAvailableTags(notes)}
                />
            </div>
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
