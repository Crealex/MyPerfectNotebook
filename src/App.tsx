import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomePage } from "./pages/Home";
import { NewNotePage } from "./pages/NewNote";
import { SettingsPage } from "./pages/Settings";
import { HomeIcon, Plus, SettingsIcon } from "lucide-react";
import { ThemeProvider } from "./myComponents/themeProvider";
import { ModeToggle } from "./myComponents/ModeToggle";
import { useEffect, useState } from "react";
import type { notesType } from "./utils/notesType";
import { EditNotePage } from "./pages/editNote";
import type { User } from "@supabase/supabase-js";
import { supabase } from "./utils/initSupabase";
import { DisplayStatus } from "./myComponents/DisplayStatus";

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [notes, setNotes] = useState<notesType[]>([]);
    const [delStatus, setDelStatus] = useState(false);
    const [editStatus, setEditStatus] = useState(false);
    const [newStatus, setNewStatus] = useState(false);
    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
            console.log(event);
        });
        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        async function fetchNotes() {
            if (!user) {
                setNotes([]);
                return;
            }
            const { data, error } = await supabase
                .from("notes")
                .select("*")
                .eq("user_id", user?.id);
            if (error) {
                console.log("Erreur:" + error.message);
                return;
            }
            if (data) setNotes(data);
        }
        if (user) {
            fetchNotes();
            console.log("Note de " + user?.id + "bien chargée!");
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem("notesArray", JSON.stringify(notes));
    }, [notes]);

    async function addNote(newNote: notesType) {
        const { error } = await supabase.from("notes").insert(newNote);
        if (error) {
            console.log(
                "Erreur lors de l'ajout d'une nouvelle note: " + error.message,
            );
            return;
        }
        setNotes([newNote, ...notes]);
        console.log(newNote.title + " crée!");
        setNewStatus(true);
        setTimeout(() => setNewStatus(false), 5000);
    }

    async function deleteNote(target: notesType) {
        const { error } = await supabase
            .from("notes")
            .delete()
            .eq("id", target.id);
        if (error) {
            console.log(
                "Erreur lors de la suppresion de la note: " + error.message,
            );
            return;
        }
        setNotes(notes.filter((note: notesType) => target.id !== note.id));
        console.log(
            "Note " + target.title + " datant du " + target.date + " supprimée",
        );
        setDelStatus(true);
        setTimeout(() => setDelStatus(false), 5000);
    }

    async function editNote(oldNote: notesType, newNote: notesType) {
        const { error } = await supabase
            .from("notes")
            .update(newNote)
            .eq("id", oldNote.id);
        if (error) {
            console.log(
                "Erreur lors de l'edition d'une note: " + error.message,
            );
            return;
        }
        setNotes((prevNotes: notesType[]) =>
            prevNotes.map((note: notesType) =>
                note.id === oldNote.id ? newNote : note,
            ),
        );
        console.log("note bien modifiée!");
        setEditStatus(true);
        setTimeout(() => setEditStatus(false), 5000);
    }

    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className="min-h-screen">
                    {/* Navigation */}
                    <nav className="border-b">
                        <div className="flex justify-between p-4">
                            <div className="flex gap-4">
                                <Link to="/">
                                    <Button>
                                        <HomeIcon />
                                    </Button>
                                </Link>
                                <Link to="/new">
                                    <Button>
                                        <Plus />
                                    </Button>
                                </Link>
                                <Link to="/settings">
                                    <Button>
                                        <SettingsIcon />
                                    </Button>
                                </Link>
                            </div>
                            <ModeToggle />
                        </div>
                    </nav>

                    {/* Routes */}
                    <DisplayStatus
                        delStatus={delStatus}
                        editStatus={editStatus}
                        newStatus={newStatus}
                    />
                    <main className="max-w-3/4 mx-auto">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <HomePage
                                        notes={notes}
                                        editNote={editNote}
                                        deleteNote={deleteNote}
                                        user={user}
                                    />
                                }
                            />
                            <Route
                                path="/new"
                                element={
                                    <NewNotePage
                                        addNote={addNote}
                                        notes={notes}
                                        user={user}
                                    />
                                }
                            />
                            <Route
                                path="/settings"
                                element={<SettingsPage user={user} />}
                            />
                            <Route
                                path="/edit/:note"
                                element={
                                    <EditNotePage
                                        editNote={editNote}
                                        notes={notes}
                                        user={user}
                                    />
                                }
                            />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
