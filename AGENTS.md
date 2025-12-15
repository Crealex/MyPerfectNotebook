# AGENTS.md - My Perfect Notebook

## Règles d'Interaction (IMPORTANT)

- Alexandre (École 42) veut **apprendre en codant lui-même**
- **NE JAMAIS modifier les fichiers sans demande explicite**
- **Guider, expliquer, suggérer** — pas coder directement
- Code complet uniquement si demandé avec "code-moi ça"

## Stack Technique

- **Frontend**: React 19 + TypeScript + Vite + SWC
- **Styling**: Tailwind CSS v4 + shadcn/ui (new-york, slate)
- **Backend**: Supabase + PostgreSQL
- **Outils**: Bun, LazyVim, Arch Linux

## Commandes

```bash
bun run dev          # Dev server
bun run build        # Production build
bun run lint         # ESLint
bunx shadcn@latest add [component]
```

## Structure

```
src/
├── components/ui/   # shadcn/ui
├── myComponents/    # Composants custom
├── pages/           # Pages (Home, NewNote, editNote, Settings)
├── utils/           # Types (notesType.ts) + Supabase init
├── lib/utils.ts     # cn() helper
└── App.tsx          # Routes principales
```

## Style de Code

- Alias `@/*` pour imports src
- 4 espaces, points-virgules obligatoires
- PascalCase composants, camelCase variables
- `cn()` pour classes conditionnelles
- Try/catch pour async, typage strict TypeScript

## État Actuel

**Phase 3** — Features Avancées

**En cours**: Système de tags (voir `todos.md`)

**Fait**: Auth, CRUD Supabase, RLS, Mode sombre, Tri par date

**Voir aussi**: `roadmap.md` (historique), `todos.md` (tâches)
