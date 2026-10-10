# FrontEnd — Projet To Do List

**Auteurs** : Raoul FOSSUA TINDO & Lovensky DERVIS  
**Contexte** : Cours Web Programming M2 SYNVA Unistra  
**Étape** : N1 — Structure des données JSON (1A → 1E)

---

## 📋 Description

Application **To Do List** Front-End (HTML, CSS, JavaScript, API LocalStorage).

Le projet se déroule en **3 grandes étapes** :

- **Étape 1** : Données JSON (sous-étapes **1A à 1E**)  


/to_do_list
│
├── /étape 1A
│ └── step 1A_Structure_d_UNE_tâche.json
│
├── /étape 1B
│ └── step 1B_Priorités.json
│
├── /étape 1C
│ ├── step 1Ca_Echéances.json
│ ├── step 1Cb_Accomplissement.json
│ └── step 1Cc_Statuts.json
│
├── /étape 1D
│ └── step 1D_Catégories.json
│
├── /étape 1E
│ └── step 1E_HTML_+_tests.html
│
└── README.md

 

## 🗂️ Organisation des dossiers — Étape 1

| Dossier | Fichier | Rôle |
|---|---|---|
| `/étape 1A` | `step 1A_Structure_d_UNE_tâche.json` | Structure d'une tâche |
| `/étape 1B` | `step 1B_Priorités.json` | Priorités (Critère 1) |
| `/étape 1C` | `step 1Ca_Echéances.json` | Échéances (Critère 2a) |
| `/étape 1C` | `step 1Cb_Accomplissement.json` | Niveaux d'accomplissement (Critère 2b) |
| `/étape 1C` | `step 1Cc_Statuts.json` | Statuts (Critère 2c) |
| `/étape 1D` | `step 1D_Catégories.json` | Catégories (regroupe les statuts) |
| `/étape 1E` | `step 1E_HTML_+_tests.html` | Page HTML + tests + LocalStorage |

---

## 🔗 Relation PK / FK (Étape 1)

| Table | Clé primaire | Clés étrangères |
|---|---|---|
| `prioritiesList` (1B) | `idPriority` | — |
| `echeancesListe` (1Ca) | `idEcheance` | `idTask` |
| `accomplissementListe` (1Cb) | `idAccomplissement` | `idTask` |
| `statusList` (1Cc) | `idStatus` | — |
| `categoriesList` (1D) | `idCategory` | `idStatus` |
| `tasksList` (1E) | `idTask` | `idPriority` → prioritiesList<br>`idCategory` → categoriesList<br>`idEcheance` → echeancesListe<br>`idAccomplissement` → accomplissementListe |

---

## 🚀 Utilisation (Étape 1)

1. Ouvrir `étape 1E/step 1E_HTML_+_tests.html` dans un navigateur
2. Ouvrir la console **(F12)** pour voir :
   - Les données brutes de chaque fichier JSON
   - La relation **PK/FK** entre les tâches et les critères
   - La **sérialisation LocalStorage** (`stringify` / `parse`)

---

## 🎯 Prochaines étapes

1. **Étape 2A** — Formulaire HTML **statique** (version Mobile)
2. **Étape 2B** — Formulaire HTML **dynamique** (JS + JSON)
3. **Étape 3** — Application complète (LocalStorage + dashboard)


