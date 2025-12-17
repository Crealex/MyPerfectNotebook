# Roadmap - My Perfect Notebook

## Objectif du Projet

Application web de prise de notes pour apprendre React, bases de données et déploiement.

---

## Phase 0: Setup ✅

- Initialisation Vite + React + TypeScript
- Configuration Tailwind CSS v4
- Installation shadcn/ui
- Repository GitHub créé

---

## Phase 1: MVP Local ✅

**Objectif**: App fonctionnelle dans le navigateur, sans backend

**Features**:
- Création, édition, suppression de notes
- Liste des notes avec recherche basique
- Éditeur de texte simple
- Stockage dans localStorage

**Compétences acquises**:
- Composants React et props
- State management (useState, useEffect)
- Event handling
- LocalStorage API
- Composants shadcn/ui

---

## Phase 2: Backend et Base de Données ✅

**Objectif**: Persistance des données et synchronisation multi-appareils

**Features**:
- Configuration Supabase (projet créé, client initialisé)
- Table `notes` avec RLS (Row Level Security)
- Policies pour sécuriser le CRUD
- Authentification (SignIn, SignUp, SignOut)
- Migration localStorage → PostgreSQL
- API CRUD complète (fetchNotes, addNote, editNote, deleteNote)
- Notifications utilisateur (DisplayStatus component)

**Compétences acquises**:
- Requêtes SQL/API avec Supabase
- Authentification utilisateur (sessions, tokens)
- Gestion d'état asynchrone (Promises, async/await)
- Base de données relationnelle (PostgreSQL)
- Row Level Security (RLS) et policies
- Listeners et subscriptions (onAuthStateChange)

---

## Phase 3: Features Avancées 🚧 (EN COURS)

**Fait**:
- [x] Mode sombre/clair
- [x] Tri des notes par dernière modification
- [x] Type `notesType` avec `tags: Tag[]`
- [x] Colonne `tags` (jsonb) dans Supabase
- [x] Affichage des tags dans `NotePreview`
- [x] Composant `TagsInput` (création à la volée + choix couleur)
- [x] Intégration `TagsInput` dans NewNote

**En cours** (voir `todos.md`):
- [ ] Intégration `TagsInput` dans editNote
- [ ] Filtrage par tags dans Home

**Planifié**:
- [ ] Éditeur Markdown avec preview
- [ ] Export PDF/Markdown

---

## Phase 4: Déploiement Production

**Frontend**:
- Build de production (Vite)
- Déploiement (Vercel ou VPS)
- Configuration domaine Infomaniak + HTTPS

**Backend**:
- Supabase déjà hébergé

**À gérer**:
- Variables d'environnement
- Monitoring basique
- Sécurité (CORS, rate limiting)

---

## Ressources

- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase Docs](https://supabase.com/docs)
