import { NotePreview } from "@/myComponents/NotePreview";

const notesData = [
    {
        title: "Ma note",
        content:
            "Je suis une note super importante, car je suis simplement la note de teste que permet de voir si l'affichage de la preview note ainsi que l'affichage de la note global est correct ou non, c'est pourquoi mon texte doit être assez long, aussi pour permettre d'afficher une partie du contenu et au clique d'un bouton afficher l'entierté de la note.\nVoili Voilou :)",
    },
    {
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
    Tailwind v4 utilisé (pas de tailwind.config.js nécessaire)
`,
    },
    {
        title: "Jamais deux sans trois",
        content: "Comme dit le proverbe, jamais deux sans trois quoi!",
    },
];

export function HomePage() {
    return (
        <div>
            <h1 className="text-4xl text-center my-4">Mes notes</h1>
            {notesData.map((card: { title: string; content: string }) => {
                return (
                    <NotePreview
                        key={card.title}
                        title={card.title}
                        content={card.content}
                    />
                );
            })}
        </div>
    );
}
