markdown
# To Do List  (Projet Developpement-Web-Application)

**Auteurs** : Raoul FOSSUA TINDO & Lovensky DERVIS  
**Contexte** : Cours DeveloppementWeb et Applications 
**Étape** : N1  (Structure des données JSON)  
**Date** : 2026-09-29  
**Version** : 1.0.0

---

## 📋 Description du projet

Application **To Do List** entièrement **Front-End** (HTML5, CSS3, JavaScript, API LocalStorage).  
Le projet se déroule en **4 étapes** et permet de gérer des tâches avec :

- Un **système de priorités** (référentiel séparé)
- Un **formulaire de saisie** (statique puis dynamique)
- Un **enregistrement** dans le **LocalStorage**
- Un **dashboard** de gestion (édition, archivage, notification)

Aucune base de données MySQL n'est utilisée : toutes les données sont stockées côté navigateur.

---

## 🎯 Objectifs pédagogiques

- Maîtriser les **structures JSON** (Array d'objets)
- Comprendre la relation **clé primaire / clé étrangère** (PK/FK)
- Manipuler l'**API LocalStorage** (`setItem`, `getItem`, `stringify`, `parse`)
- Créer un **formulaire HTML5** accessible et responsive
- Développer une interface de gestion ergonomique (dashboard)

---

## 📁 Organisation des fichiers
/to_do_list
│
├── /data
│ ├── priorities_List.js ← 1B : Référentiel des priorités
│ ├── tasks_List.js ← 1C : Liste des tâches
│ └── to_do_List_Data.js ← 1D : Fichier complet (1B + 1C + tests)
│
├── /docs
│ └── etape_1_to_do_list.md ← 1A : Analyse des propriétés
│
└── README.md

text

---

## 🎯 Étapes du projet

| Étape | Livrable | Statut |
|---|---|---|
| **N1** | Structure JSON (1A, 1B, 1C, 1D) | ✅ Terminé |
| **N2** | Formulaire de saisie (statique + dynamique) | ⏳ À venir |
| **N3** | Enregistrement LocalStorage | ⏳ À venir |
| **N4** | Gestion des tâches (dashboard) | ⏳ À venir |

---

## 📊 Modèle de données

### 🟢 Référentiel : `prioritiesList` (7 priorités)

**Clé primaire** : `idPriority`

| Propriété | Type | Rôle |
|---|---|---|
| `idPriority` | String | Clé primaire |
| `priorityName` | String | Libellé de la priorité |
| `priorityLevel` | String | Niveau (1 à 4) pour tri |
| `priorityColor` | String | Couleur hexadécimale |
| `validPriority` | String | Flag d'activation (`"0"` / `"1"`) |

**Les 7 priorités** :

| id | priorityName | priorityLevel | priorityColor |
|---|---|---|---|
| 1 | Urgente et importante | 4 | `#8B0000` |
| 2 | Importante | 3 | `#DC3545` |
| 3 | Moyenne | 2 | `#FFC107` |
| 4 | Peu importante | 1 | `#28A745` |
| 5 | À déléguer | 2 | `#17A2B8` |
| 6 | Délais non-négociables | 4 | `#6F42C1` |
| 7 | En attente / Bloquée | 1 | `#6C757D` |

---

### 🔵 Entité : `tasksList` (5 tâches)

**Clé primaire** : `idTask`  
**Clé étrangère** : `idPriority` → `prioritiesList.idPriority`

| Propriété | Type | Rôle |
|---|---|---|
| `idTask` | String | Clé primaire |
| `titleTask` | String | Libellé de la tâche |
| `descriptionTask` | String | Détail optionnel |
| `idPriority` | String | Clé étrangère |
| `categoryTask` | String | Classement thématique |
| `creationDateTask` | String (ISO) | Date de création |
| `dueDateTask` | String (ISO) | Date d'échéance |
| `statusTask` | String | `todo`, `en_cours`, `done`, `cancel` |
| `doneTask` | String | Flag (`"0"` / `"1"`) |
| `archivedTask` | String | Flag (`"0"` / `"1"`) |
| `favoriteTask` | String | Flag (`"0"` / `"1"`) |
| `tagsTask` | String | Mots-clés séparés par `;` |
| `durationTask` | String | Durée estimée |
| `validTask` | String | Flag d'activation (`"0"` / `"1"`) |

**Les 5 tâches** :

| id | titleTask | idPriority | statusTask |
|---|---|---|---|
| 1 | Calendrier universitaire personnel (2026-2027) | 2 | en_cours |
| 2 | Projet tutoré | 3 | todo |
| 3 | Rapport de Stage | 1 | todo |
| 4 | Deadlines des rendus finaux du semestre 1 | 4 | done |
| 5 | Projet E-Learning | 3 | cancel |

---

## 🔗 Relation PK/FK
prioritiesList.idPriority   ←  tasksList.idPriority
(PRIMARY KEY)                     (FOREIGN KEY)

text

Exemple d'utilisation (comme `movieList` / `categoryList` du cours) :

```javascript
tasksList.forEach(function(item) {
    let searchedIdPriority = item.idPriority;
    let foundPriority = prioritiesList.find(
        priorityElement => priorityElement.idPriority == searchedIdPriority
    );
    console.log(`Task "${item.titleTask}" has priority "${foundPriority.priorityName}"`);
});
🚀 Utilisation
1️⃣ Chargement des données
Dans une page HTML, charger les 3 fichiers dans l'ordre :

html
<script src="data/priorities_List.js"></script>
<script src="data/tasks_List.js"></script>
<script src="data/to_do_List_Data.js"></script>
2️⃣ Vérification dans la console (F12)
Ouvrir la console du navigateur pour voir les tests :

text
=== PRIORITIES LIST ===
(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

=== TASKS LIST ===
(5) [{…}, {…}, {…}, {…}, {…}]

=== RELATION PK/FK ===
Task "Calendrier universitaire personnel (2026-2027)" has priority "Importante" (level 3)
Task "Projet tutoré" has priority "Moyenne" (level 2)
Task "Rapport de Stage" has priority "Urgente et importante" (level 4)
Task "Deadlines des rendus finaux du semestre 1" has priority "Peu importante" (level 1)
Task "Projet E-Learning" has priority "Moyenne" (level 2)

=== SÉRIALISATION LOCALSTORAGE ===
Type après stringify : string
Type après getItem  : string
Type après parse    : object
(5) [{…}, {…}, {…}, {…}, {…}]
🧪 Tests effectués (Étape N1)
Test	Description	Statut
3.1	Affichage brut des priorités et tâches	✅
3.2	Relation PK/FK (find + forEach)	✅
3.3	Sérialisation LocalStorage (stringify / parse)	✅
🛠️ Technologies utilisées
Technologie	Usage
HTML5	Structure sémantique
CSS3	Mise en page (Grid, Flexbox)
JavaScript	Logique applicative, manipulation DOM
JSON	Format de données
LocalStorage API	Persistance côté navigateur
✅ Conventions respectées
Convention	Exemple (cours)	Notre application
Clé primaire	idMovie, idCategory	idTask, idPriority
Libellé	titleMovie	titleTask
Clé étrangère	idCategory	idPriority
Flag d'activation	validMovie, validCategory	validTask, validPriority
Format des IDs	String ("1")	String ("1")
Structure	Array d'objets JSON	Array d'objets JSON
Sérialisation	JSON.stringify() / JSON.parse()	Idem
📚 Ressources
MDN Web Docs : https://developer.mozilla.org/fr/

JSON officiel : https://www.json.org/json-en.html

LocalStorage API : https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage

Array.find() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find

Array.forEach() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

👥 Auteurs
Raoul FOSSUA TINDO

Lovensky DERVIS

📅 Historique des versions
Version	Date	Description
1.0.0	2026-09-29	Étape N1 terminée : structure JSON, référentiel, entités, tests
📌 Prochaines étapes
N2 : Formulaire de saisie (statique + dynamique)

N3 : Enregistrement LocalStorage

N4 : Dashboard de gestion des tâches

© 2026 — Raoul FOSSUA TINDO & Lovensky DERVIS
Cours DeveloppementWeb et Applications
