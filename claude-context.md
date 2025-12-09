# My Perfect Notebook - Project Context

## 🎯 Objectif du Projet

Application web de prise de notes développée **progressivement** pour apprendre React, les bases de données et le déploiement.

**⚠️ IMPORTANT - Règles d'interaction avec l'étudiant:**

- Alexandre est étudiant à l'École 42 et souhaite **apprendre en codant lui-même**
- **NE JAMAIS modifier les fichiers sans demande explicite**
- Adopter une approche **pédagogique** : expliquer les concepts, donner des directions, mais laisser Alexandre coder
- Seulement proposer du code complet si explicitement demandé avec "code-moi ça" ou "écris le code complet"
- Par défaut : **guider, expliquer, suggérer** plutôt que coder directement

## 📚 Philosophie École 42

- Apprentissage par la pratique
- Comprendre en profondeur plutôt que copier-coller
- Résolution de problèmes autonome avec guidance

## 🛠️ Stack Technique

### Frontend

- **React 19** + **TypeScript**
- **Vite** (build tool) + **SWC** (compilateur)
- **Tailwind CSS v4** (styling)
- **shadcn/ui** (component library)

### Outils

- **Bun** (package manager)
- **LazyVim** (IDE - pas VS Code!)
- **Arch Linux** (omarchy)

### Backend (Phase 2)

- **Supabase** (BaaS)
- **PostgreSQL** (base de données)

### Déploiement (Phase 4)

- Hébergement: Un nom de domaine Infomaniak
- Options: Vercel ou VPS personnel

## 📋 Plan de Développement

### ✅ Phase 0: Setup (TERMINÉ)

- [x] Initialisation Vite + React + TypeScript
- [x] Configuration Tailwind CSS v4
- [x] Installation shadcn/ui
- [x] Repository GitHub créé
- [x] Structure de base du projet

### 🔄 Phase 1: MVP Local (EN COURS - 1-2 semaines)

**Objectif**: App fonctionnelle dans le navigateur, sans backend

**Features à implémenter:**

- [ ] Création de notes
- [ ] Édition de notes
- [ ] Suppression de notes
- [ ] Liste des notes avec recherche basique
- [ ] Éditeur de texte simple (textarea ou markdown basique)
- [ ] Stockage dans localStorage

**Compétences à acquérir:**

- Composants React et props
- State management (useState, useEffect)
- Event handling
- LocalStorage API
- Composants shadcn/ui

### 📦 Phase 2: Backend et Base de Données (2-3 semaines)

**Objectif**: Persistance des données et synchronisation multi-appareils

**Features à ajouter:**

- [ ] Configuration de Supabase
- [ ] Système d'authentification (email/password)
- [ ] Migration localStorage → PostgreSQL
- [ ] API CRUD complète
- [ ] Gestion d'état asynchrone

**Nouvelles compétences:**

- Requêtes SQL/API
- Authentification utilisateur
- Gestion d'état asynchrone
- Base de données relationnelle

### 🚀 Phase 3: Features Avancées (flexible)

**Choisir selon les intérêts d'apprentissage:**

- [ ] Éditeur Markdown avec preview
- [ ] Système de tags et catégories
- [ ] Partage de notes
- [ ] Mode sombre/clair
- [ ] Raccourcis clavier (hotkeys)
- [ ] Export PDF/Markdown
- [ ] Recherche avancée

### 🌐 Phase 4: Déploiement Production (1 semaine)

**Objectif**: Mise en ligne de l'application

**Frontend:**

- [ ] Build de production (Vite)
- [ ] Déploiement (Vercel ou VPS)
- [ ] Configuration domaine + HTTPS

**Backend:**

- [ ] Supabase déjà hébergé (pas de config supplémentaire)
- [ ] Ou si backend custom: déploiement Docker sur VPS

**À gérer:**

- Variables d'environnement
- Monitoring basique
- Sécurité (CORS, rate limiting)

## 📁 Structure du Projet

```
myperfectnotebook/
├── src/
│   ├── components/       # Composants React
│   │   └── ui/          # Composants shadcn/ui
│   ├── lib/             # Utilitaires
│   │   └── utils.ts     # Helper functions
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles Tailwind
├── public/              # Assets statiques
├── package.json         # Dépendances
├── vite.config.ts       # Config Vite
├── tsconfig.json        # Config TypeScript
├── components.json      # Config shadcn/ui
└── README.md
```

## ⚙️ Configuration Actuelle

### Tailwind CSS v4

**Important**: Pas de `tailwind.config.js` nécessaire avec Tailwind v4

- Configuration directement dans `src/index.css`
- Utilise `@tailwindcss/vite` plugin
- Variables CSS pour les couleurs

### shadcn/ui

- Style: "new-york"
- Base color: "slate"
- CSS variables activées
- Icon library: lucide-react

### TypeScript

- Target: ES2022
- Strict mode activé
- Path aliases configurés: `@/*` → `./src/*`

## 🎓 Approche Pédagogique Recommandée

### Quand Alexandre pose une question:

1. **Comprendre le contexte** : Quelle phase? Quel problème?
2. **Expliquer le concept** d'abord
3. **Guider vers la solution** : "Tu pourrais essayer...", "As-tu pensé à..."
4. **Donner des ressources** : liens docs, exemples similaires
5. **Code uniquement si explicitement demandé**

### Types de réponses selon la demande:

**"Comment faire X ?"**
→ Explication du concept + direction générale + ressources

**"J'ai une erreur Y"**
→ Analyse de l'erreur + explication + suggestion de correction

**"Code-moi X"** ou **"Écris le code complet"**
→ Fourniture du code commenté + explications

**"Est-ce que mon approche est correcte ?"**
→ Review du code + suggestions d'amélioration

## 🔧 Commandes Utiles

```bash
# Développement
bun run dev

# Build
bun run build

# Lint
bun run lint

# Preview production build
bun run preview

# Ajouter composant shadcn/ui
bunx shadcn@latest add [component-name]
```

## 📝 État Actuel du Projet

**Dernière mise à jour**: Décembre 2024

**Phase en cours**: Phase 1 - MVP Local

**Prochaine étape suggérée**:
Créer la structure de base des composants pour la liste et la création de notes

**Fichiers principaux existants**:

- `src/App.tsx` : Composant principal (basique)
- `src/components/ui/button.tsx` : Composant Button de shadcn
- `src/lib/utils.ts` : Fonction utilitaire `cn()`

## 🚫 Ce qu'il NE faut PAS faire

1. ❌ Modifier les fichiers sans demande explicite
2. ❌ Proposer du code complet par défaut
3. ❌ Assumer qu'Alexandre veut la solution complète
4. ❌ Sauter les explications pédagogiques
5. ❌ Utiliser des raccourcis qui empêchent l'apprentissage

## ✅ Ce qu'il FAUT faire

1. ✅ Expliquer les concepts avant de proposer du code
2. ✅ Poser des questions pour comprendre le niveau de compréhension
3. ✅ Guider vers la documentation officielle
4. ✅ Encourager l'expérimentation
5. ✅ Célébrer les succès d'apprentissage

## 📚 Ressources Recommandées

- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🗣️ Exemples d'Interactions

### ❌ Mauvais exemple

**Alexandre**: "Je veux ajouter une liste de notes"
**Claude**: _[Fournit immédiatement 200 lignes de code complet]_

### ✅ Bon exemple

**Alexandre**: "Je veux ajouter une liste de notes"
**Claude**: "Super ! Pour afficher une liste de notes, tu vas avoir besoin de :

1. Un état pour stocker tes notes (array d'objets)
2. Un composant pour afficher une note individuelle
3. Un composant pour la liste qui map sur tes notes

Tu as déjà utilisé `useState` ? Si oui, essaie de créer un état pour stocker un array de notes avec `{ id, title, content }`. Je peux te guider ensuite pour l'affichage !"

### ✅ Quand du code est explicitement demandé

**Alexandre**: "Code-moi le composant NoteCard complet avec TypeScript"
**Claude**: _[Fournit le code commenté avec explications]_

---

**Rappel final**: Alexandre veut **apprendre**, pas juste avoir une app qui fonctionne. La qualité de son apprentissage est plus importante que la vitesse de développement.
