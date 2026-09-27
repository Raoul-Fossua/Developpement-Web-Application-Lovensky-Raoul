/* ============================================================
   TO DO LIST - Fichier maître
   ------------------------------------------------------------
   Auteur      : Raoul FOSSUA TINDO & Lovensnsky DERVIS
   Contexte    : Cours Web Programming 1.x - Étape N1
   Rôle        : Assemble priorities_List + tasks_List + tests
   ------------------------------------------------------------
   Dépendances :
     - priorities_List.js  (référentiel des priorités)
     - tasks_List.js       (entités des tâches)
   ============================================================ */


/* ============================================================
   1. RÉFÉRENTIEL : PRIORITÉS
   ------------------------------------------------------------
   Copie conforme de priorities_List.js
   Clé primaire : idPriority
   ============================================================ */

let prioritiesList = [
    {
        idPriority   : "1",
        priorityName : "Urgente",
        priorityLevel: "4",
        priorityColor: "#8B0000",
        priorityIcon : "🚨",
        validPriority: "1"
    },
    {
        idPriority   : "2",
        priorityName : "Importante",
        priorityLevel: "3",
        priorityColor: "#DC3545",
        priorityIcon : "🔴",
        validPriority: "1"
    },
    {
        idPriority   : "3",
        priorityName : "Moyenne",
        priorityLevel: "2",
        priorityColor: "#FFC107",
        priorityIcon : "🟡",
        validPriority: "1"
    },
    {
        idPriority   : "4",
        priorityName : "Peu importante",
        priorityLevel: "1",
        priorityColor: "#28A745",
        priorityIcon : "🟢",
        validPriority: "1"
    }
];


/* ============================================================
   2. ENTITÉ : TÂCHES
   ------------------------------------------------------------
   Copie conforme de tasks_List.js
   Clé primaire   : idTask
   Clé étrangère  : idPriority → prioritiesList.idPriority
   ============================================================ */

let tasksList = [
    {
        idTask          : "1",
        titleTask       : "Préparer le TP HTML5",
        descriptionTask : "Créer le formulaire d'inscription",
        idPriority      : "2",
        categoryTask    : "Etudes",
        creationDateTask: "2026-09-25T09:00:00+01:00",
        dueDateTask     : "2026-10-02T23:59:00+01:00",
        statusTask      : "doing",
        doneTask        : "0",
        archivedTask    : "0",
        favoriteTask    : "1",
        tagsTask        : "HTML5;TP;urgent",
        durationTask    : "120",
        validTask       : "1"
    },
    {
        idTask          : "2",
        titleTask       : "Réviser le CSS Grid",
        descriptionTask : "grid-template-columns, gap, minmax",
        idPriority      : "3",
        categoryTask    : "Etudes",
        creationDateTask: "2026-09-25T10:15:00+01:00",
        dueDateTask     : "2026-09-30T23:59:00+01:00",
        statusTask      : "todo",
        doneTask        : "0",
        archivedTask    : "0",
        favoriteTask    : "0",
        tagsTask        : "CSS;Grid",
        durationTask    : "60",
        validTask       : "1"
    },
    {
        idTask          : "3",
        titleTask       : "Envoyer le CV école santé",
        descriptionTask : "PDF + lettre de motivation",
        idPriority      : "1",
        categoryTask    : "Administratif",
        creationDateTask: "2026-09-25T11:30:00+01:00",
        dueDateTask     : "2026-09-27T18:00:00+01:00",
        statusTask      : "todo",
        doneTask        : "0",
        archivedTask    : "0",
        favoriteTask    : "1",
        tagsTask        : "CV;candidature",
        durationTask    : "30",
        validTask       : "1"
    },
    {
        idTask          : "4",
        titleTask       : "Faire les courses",
        descriptionTask : "Liste sur le frigo",
        idPriority      : "4",
        categoryTask    : "Perso",
        creationDateTask: "2026-09-25T08:00:00+01:00",
        dueDateTask     : "2026-09-26T19:00:00+01:00",
        statusTask      : "done",
        doneTask        : "1",
        archivedTask    : "1",
        favoriteTask    : "0",
        tagsTask        : "maison",
        durationTask    : "45",
        validTask       : "1"
    },
    {
        idTask          : "5",
        titleTask       : "Appeler le médecin",
        descriptionTask : "Certificat médical",
        idPriority      : "3",
        categoryTask    : "Sante",
        creationDateTask: "2026-09-25T14:00:00+01:00",
        dueDateTask     : "2026-09-28T12:00:00+01:00",
        statusTask      : "cancel",
        doneTask        : "0",
        archivedTask    : "1",
        favoriteTask    : "0",
        tagsTask        : "santé;medical",
        durationTask    : "15",
        validTask       : "1"
    }
];


/* ============================================================
   3. TESTS
   ------------------------------------------------------------
   3.1  Affichage brut
   3.2  Relation PK/FK (comme movieList / categoryList)
   3.3  Sérialisation LocalStorage (stringify / parse)
   ============================================================ */

/* ---------- 3.1 Affichage brut ---------- */

console.log("=== PRIORITÉS ===");
console.log(prioritiesList);

console.log("=== TÂCHES ===");
console.log(tasksList);


/* ---------- 3.2 Relation PK/FK ---------- */

console.log("=== RELATION PK/FK ===");

tasksList.forEach(function(item) {
    let searchedIdPriority = item.idPriority;
    let foundPriority = prioritiesList.find(
        priorityElement => priorityElement.idPriority == searchedIdPriority
    ).priorityName;

    console.log(`Task "${item.titleTask}" has priority "${foundPriority}"`);
});


/* ---------- 3.3 Sérialisation LocalStorage ---------- */

console.log("=== SÉRIALISATION LOCALSTORAGE ===");

// stringify : objet → chaîne
let tasksListString = JSON.stringify(tasksList);
console.log("Type après stringify : " + typeof tasksListString);

// Écriture dans le localStorage
localStorage.setItem("tasksList", tasksListString);

// Lecture depuis le localStorage
let tasksListStringFromLocalStorage = localStorage.getItem("tasksList");
console.log("Type après getItem  : " + typeof tasksListStringFromLocalStorage);

// parse : chaîne → objet
let tasksListJSONfromString = JSON.parse(tasksListStringFromLocalStorage);
console.log("Type après parse    : " + typeof tasksListJSONfromString);
console.log(tasksListJSONfromString);