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

const initialNotes = [
    {
        id: 1,
        date: "10.12.2025 18:50:42",
        title: "Ma note",
        content:
            "Je suis une note super importante, car je suis simplement la note de teste que permet de voir si l'affichage de la preview note ainsi que l'affichage de la note global est correct ou non, c'est pourquoi mon texte doit être assez long, aussi pour permettre d'afficher une partie du contenu et au clique d'un bouton afficher l'entierté de la note.\nVoili Voilou :)",
    },
    {
        id: 2,
        date: "10.12.2025 18:50:42",
        title: "Roadmap",
        content: `
My Perfect Notebook
Vue d'ensemble

Application web de prise de notes développée progressivement pour apprendre React, les bases de données et le déploiement.
Stack Technique

    Frontend: React 19 + TypeScript
    Build: Vite + SWC
    Styling: Tailwind CSS v4 + shadcn/ui
    Package Manager: Bun
    Backend (futur): Supabase
    IDE: Lazyvim

Plan de développement
Phase 1: MVP Local (1-2 semaines)

    Interface CRUD notes basique
    Éditeur texte simple
    Liste + recherche basique
    Sauvegarde localStorage
    Pas de backend nécessaire

Phase 2: Backend + DB (2-3 semaines)

    Configuration Supabase
    Authentification email/password
    Migration localStorage → PostgreSQL
    API CRUD complète

Phase 3: Features avancées (flexible)

    Éditeur Markdown avec preview
    Système de tags/catégories
    Partage de notes
    Mode sombre
    Raccourcis clavier
    Export PDF/Markdown

Phase 4: Production (1 semaine)

    Build optimisé Vite
    Déploiement Vercel ou VPS
    Configuration domaine + HTTPS

État actuel

✅ Setup initial complété (Vite + React + TypeScript + Tailwind v4) ✅ shadcn/ui configuré ✅ Repository GitHub créé 🔄 Prêt à commencer Phase 1 - MVP
Notes techniques

    Utilise LazyVim (pas VS Code)
    Environnement: Arch Linux (omarchy)
    Tailwind v4 utilisé (pas de tailwind.config.js nécessaire)`,
    },
    {
        id: 3,
        date: "10.12.2025 18:52:42",
        title: "Jamais deux sans trois",
        content:
            "Comme le dit ce fameux proverbe, jamais deux notes écrite en dur sans une troisième!",
    },
];

function App() {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notesArray");
        return saved ? JSON.parse(saved) : initialNotes;
    });

    useEffect(() => {
        localStorage.setItem("notesArray", JSON.stringify(notes));
    }, [notes]);

    function addNote(newNote: notesType) {
        setNotes([newNote, ...notes]);
        console.log(newNote.title + "crée!");
    }

    function deleteNote(target: notesType) {
        setNotes(notes.filter((note: notesType) => target.id !== note.id));
        console.log(
            "Note " + target.title + " datant du " + target.date + " supprimée",
        );
    }

    function editNote(oldNote: notesType, newNote: notesType) {
        setNotes((prevNotes: notesType[]) =>
            prevNotes.map((note: notesType) =>
                note.id === oldNote.id ? newNote : note,
            ),
        );
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
                    <main className="max-w-3/4 mx-auto">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <HomePage
                                        notes={notes}
                                        editNote={editNote}
                                        deleteNote={deleteNote}
                                    />
                                }
                            />
                            <Route
                                path="/new"
                                element={
                                    <NewNotePage
                                        addNote={addNote}
                                        notes={notes}
                                    />
                                }
                            />
                            <Route
                                path="/settings"
                                element={<SettingsPage />}
                            />
                            <Route
                                path="/edit/:note"
                                element={
                                    <EditNotePage
                                        editNote={editNote}
                                        notes={notes}
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
