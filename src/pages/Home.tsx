import { NotePreview } from "@/myComponents/NotePreview";
import type { notesType } from "@/utils/notesType";

export function HomePage({
    editNote,
    deleteNote,
    notes,
}: {
    editNote: (oldNote: notesType, newNote: notesType) => void;
    deleteNote: (note: notesType) => void;
    notes: notesType[];
}) {
    return (
        <div>
            <h1 className="text-4xl text-center my-4">Mes notes</h1>
            {notes.map((note: notesType) => {
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
