# Étape 1 — Analyse des propriétés (1A)

**Auteurs** : Raoul FOSSUA TINDO & Lovensky DERVIS  
**Contexte** : Cours Web Programming 1.x — Projet To Do List  
**Étape** : N1  (Structure des données au format JSON)

---

## Question posée

> *"Déterminez les propriétés qui caractérisent une tâche, en plus du titre (ou libellé) de la tâche, indépendamment de sa priorité pour l'instant. Quelles autres propriétés pouvez-vous imaginer ?"*

---

## Propriétés identifiées (14)

### Famille 1 — Identification

| # | Propriété | Type | Rôle |
|---|---|---|---|
| 1 | `idTask` | String | **Clé primaire** (identifiant unique) |
| 2 | `titleTask` | String | **Libellé** de la tâche |
| 3 | `descriptionTask` | String | Détail optionnel |

### Famille 2 — Classement

| # | Propriété | Type | Rôle |
|---|---|---|---|
| 4 | `idPriority` | String | **Clé étrangère** → `prioritiesList.idPriority` |
| 5 | `categoryTask` | String | Classement thématique |
| 6 | `tagsTask` | String | Mots-clés séparés par `;` |
| 7 | `favoriteTask` | String (`"0"`/`"1"`) | Tâche favorite |

### Famille 3 — Planification

| # | Propriété | Type | Rôle |
|---|---|---|---|
| 8 | `creationDateTask` | String (ISO) | Date de création |
| 9 | `dueDateTask` | String (ISO) | Date d'échéance |
| 10 | `durationTask` | String | Durée estimée |

### Famille 4 — État & Suivi

| # | Propriété | Type | Rôle |
|---|---|---|---|
| 11 | `statusTask` | String (enum) | `todo`, `en_cours`, `done`, `cancel` |
| 12 | `doneTask` | String (`"0"`/`"1"`) | Tâche accomplie |
| 13 | `archivedTask` | String (`"0"`/`"1"`) | Tâche archivée |
| 14 | `validTask` | String (`"0"`/`"1"`) | Activation logique |

---

## Analogie MySQL

| Propriété JSON | Rôle MySQL |
|---|---|
| `idTask` | PRIMARY KEY |
| `idPriority` | FOREIGN KEY → `priorities.idPriority` |
| `validTask` | Flag d'activation logique |

---

## Conventions du professeur respectées

| Convention | Exemple prof | Notre application |
|---|---|---|
| Clé primaire | `idMovie`, `idCategory` | `idTask`, `idPriority` |
| Libellé | `titleMovie` | `titleTask` |
| Clé étrangère | `idCategory` dans `movieList` | `idPriority` dans `tasksList` |
| Flag d'activation | `validMovie`, `validCategory` | `validTask`, `validPriority` |
| IDs en String | `"1"`, `"2"` | `"1"`, `"2"` |
