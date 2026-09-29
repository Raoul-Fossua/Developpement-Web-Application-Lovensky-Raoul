/* ============================================================
   TO DO LIST - Fichier maître
   ------------------------------------------------------------
   Auteurs     : Raoul FOSSUA TINDO & Lovensky DERVIS
   Contexte    : Cours Web Programming 1.x - Étape N1
   Rôle        : Assemble priorities_List + tasks_List + tests
   ------------------------------------------------------------
   Prérequis (ordre de chargement HTML) :
     1. priorities_List.js
     2. tasks_List.js
     3. to_do_List_Data.js (ce fichier)
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
        priorityName : "Urgente et importante",
        priorityLevel: "4",
        priorityColor: "#8B0000",
        validPriority: "1"
    },
    {
        idPriority   : "2",
        priorityName : "Importante",
        priorityLevel: "3",
        priorityColor: "#DC3545",
        validPriority: "1"
    },
    {
        idPriority   : "3",
        priorityName : "Moyenne",
        priorityLevel: "2",
        priorityColor: "#FFC107",
        validPriority: "1"
    },
    {
        idPriority   : "4",
        priorityName : "Peu importante",
        priorityLevel: "1",
        priorityColor: "#28A745",
        validPriority: "1"
    },
    {
        idPriority   : "5",
        priorityName : "À déléguer",
        priorityLevel: "2",
        priorityColor: "#17A2B8",
        validPriority: "1"
    },
    {
        idPriority   : "6",
        priorityName : "Délais non-négociables",
        priorityLevel: "4",
        priorityColor: "#6F42C1",
        validPriority: "1"
    },
    {
        idPriority   : "7",
        priorityName : "En attente / Bloquée",
        priorityLevel: "1",
        priorityColor: "#6C757D",
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
        titleTask       : "Calendrier universitaire personnel (2026-2027)",
        descriptionTask : "Projets et deadlines importants du M2 SYNVA",
        idPriority      : "2",
        categoryTask    : "Mémoire M2",
        creationDateTask: "2026-08-25",
        dueDateTask     : "2027-06-30",
        statusTask      : "en_cours",
        doneTask        : "0",
        archivedTask    : "0",
        favoriteTask    : "1",
        tagsTask        : "très important",
        durationTask    : "12 mois",
        validTask       : "1"
    },
    {
        idTask          : "2",
        titleTask       : "Projet tutoré",
        descriptionTask : "Travail sur projet pour un commentaire",
        idPriority      : "3",
        categoryTask    : "Gestion de projet",
        creationDateTask: "2026-03-01",
        dueDateTask     : "2026-06-30",
        statusTask      : "todo",
        doneTask        : "0",
        archivedTask    : "0",
        favoriteTask    : "0",
        tagsTask        : "Project owner",
        durationTask    : "3 mois",
        validTask       : "1"
    },
    {
        idTask          : "3",
        titleTask       : "Rapport de Stage",
        descriptionTask : "Portfolio expliquant votre expérience au sein de l'entreprise",
        idPriority      : "1",
        categoryTask    : "Professionnel",
        creationDateTask: "2027-03-01",
        dueDateTask     : "2027-06-27",
        statusTask      : "todo",
        doneTask        : "0",
        archivedTask    : "0",
        favoriteTask    : "1",
        tagsTask        : "Stage et/ou alternance",
        durationTask    : "12 mois",
        validTask       : "1"
    },
    {
        idTask          : "4",
        titleTask       : "Deadlines des rendus finaux du semestre 1",
        descriptionTask : "Réussite du 1er semestre M2 SYNVA 2026-2027",
        idPriority      : "4",
        categoryTask    : "Développement personnel",
        creationDateTask: "2026-09-25",
        dueDateTask     : "2027-09-26",
        statusTask      : "done",
        doneTask        : "1",
        archivedTask    : "1",
        favoriteTask    : "0",
        tagsTask        : "Personal development",
        durationTask    : "12 mois",
        validTask       : "1"
    },
    {
        idTask          : "5",
        titleTask       : "Projet E-Learning",
        descriptionTask : "Création d'une plateforme e-learning",
        idPriority      : "3",
        categoryTask    : "Social et humanité",
        creationDateTask: "2026-09-25",
        dueDateTask     : "2027-09-28",
        statusTask      : "cancel",
        doneTask        : "0",
        archivedTask    : "1",
        favoriteTask    : "0",
        tagsTask        : "social;education",
        durationTask    : "12 mois",
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
    );

    console.log(`Task "${item.titleTask}" has priority "${foundPriority.priorityName}" (level ${foundPriority.priorityLevel})`);
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
