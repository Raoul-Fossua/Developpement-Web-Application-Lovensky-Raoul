# Application To Do List — Projet Front-End

**Auteurs :** Raoul FOSSUA TINDO & Lovensky DERVIS
**Contexte :** Cours de Développement Web et Applications — Master 2 SYNVA, Université de Strasbourg
**Étape actuelle :** Étape 1 — Structure des données (1A à 1E)

## 🌐 Application en ligne

👉 [Accéder à l'application sur AlwaysData](https://lovensky.alwaysdata.net/step1E.html)

**Fichier principal en ligne :** `step1E.html`

## 📋 Présentation

Ce projet consiste à développer une application **To Do List** en HTML, CSS et JavaScript.

La première étape porte sur la modélisation et la manipulation des données représentant les tâches, les priorités, les échéances, les niveaux d'accomplissement, les statuts et les catégories.

Les données sont manipulées en JavaScript, avec l'utilisation de JSON et de `localStorage` pour illustrer leur sérialisation, leur récupération et leur persistance dans le navigateur.

## 🗂️ Organisation des fichiers

```text
to_do_list/
├── étape 1A/
│   └── step 1A_Structure_d_UNE_tâche.json
├── étape 1B/
│   └── step 1B_Priorités.json
├── étape 1C/
│   ├── step 1Ca_Echéances.json
│   ├── step 1Cb_Accomplissement.json
│   └── step 1Cc_Statuts.json
├── étape 1D/
│   └── step 1D_Catégories.json
├── étape 1E/
│   └── step 1E_HTML_+_tests.html
└── README.md
```

## 🗂️ Organisation des sous-étapes

| Sous-étape | Contenu               | Objectif                                                  |
| ---------- | --------------------- | --------------------------------------------------------- |
| 1A         | Structure d'une tâche | Définir les propriétés d'une tâche                        |
| 1B         | Priorités             | Définir les niveaux de priorité                           |
| 1C-a       | Échéances             | Représenter les dates limites                             |
| 1C-b       | Accomplissement       | Définir les niveaux d'avancement                          |
| 1C-c       | Statuts               | Définir les statuts des tâches                            |
| 1D         | Catégories            | Organiser les tâches par catégorie                        |
| 1E         | HTML et tests         | Manipuler les données et tester les relations entre elles |

## 🧪 Manipulations réalisées

* Création et manipulation de tableaux et d'objets JavaScript
* Affichage des données avec `console.log()`
* Conversion des objets en JSON avec `JSON.stringify()`
* Reconstruction des objets avec `JSON.parse()`
* Recherche d'éléments avec `.find()`
* Enregistrement avec `localStorage.setItem()`
* Récupération avec `localStorage.getItem()`

## 🚀 Utilisation

1. Ouvrir le fichier HTML correspondant à l'étape 1E, localement ou via l'application en ligne.
2. Ouvrir les outils de développement du navigateur avec **F12**.
3. Accéder à la console pour examiner les données et les résultats des manipulations.

## 🎯 Prochaines étapes

* **Étape 2A :** formulaire HTML statique, version mobile.
* **Étape 2B :** formulaire HTML dynamique utilisant JavaScript et JSON.
* **Étape 3 :** application complète avec persistance des données et tableau de bord.
