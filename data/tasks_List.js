/* ============================================================
   TASKS LIST - Liste des tâches
   ------------------------------------------------------------
   Auteur      : Raoul FOSSUA TINDO & Lovensnsky DERVIS
   Contexte    : Cours Web Programming 1.x - Étape N1
   Analogie    : movieList (cours JS)
   MySQL       : table "tasks" - PRIMARY KEY : idTask
   ------------------------------------------------------------
   Structure   : Array d'objets JSON
   Clé étrangère : idPriority → prioritiesList.idPriority
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

/* ---------- Test rapide ---------- */
console.log("=== TASKS LIST ===");
console.log(tasksList);