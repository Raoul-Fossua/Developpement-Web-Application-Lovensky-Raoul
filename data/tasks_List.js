/* ============================================================
   TASKS LIST - Liste des tâches
   ------------------------------------------------------------
   Auteurs       : Raoul FOSSUA TINDO & Lovensky DERVIS
   Contexte      : Cours DeveloppementWeb et Applications - Étape N1
   Analogie      : cours JS
   MySQL         : table "tasks" - PRIMARY KEY : idTask
   ------------------------------------------------------------
   Structure     : Array d'objets JSON
   Clé étrangère : idPriority → prioritiesList.idPriority
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

/* ---------- Test rapide ---------- */
console.log("=== TASKS LIST ===");
console.log(tasksList);
