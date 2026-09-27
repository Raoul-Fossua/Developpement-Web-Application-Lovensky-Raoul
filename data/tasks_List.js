/* ============================================================
   TASKS LIST - Liste des tâches
   ------------------------------------------------------------
   Auteurs      : Raoul FOSSUA TINDO & Lovensnsky DERVIS
   Contexte    : Cours Web Programming 1.x - Étape N1
   Analogie    : AcademygoalsList (cours JS)
   MySQL       : table "tasks" - PRIMARY KEY : idTask
   ------------------------------------------------------------
   Structure   : Array d'objets JSON
   Clé étrangère : idPriority → prioritiesList.idPriority
   ============================================================ */

let tasksList = [
    {
        idtache         : "1",
        "titleTask": "calendrier universitaire Personnel (2026_2027)"
        descriptionTask : "Projets et deadlines importants du M2 SYNVA",
        idPriority      : "2",
        categoryTask    : "Mémoire M2",
        creationDateTask: "2026-08-25",
        dueDateTask     : "2027-06-30",
        statusTask      : "En cours",
        idStepTask      : "5",
        "step1" :"Sujet et problématique"
        "STEP2":        :  "dépot du projet et le choix d'un directeur de mémoire"
        "Step3"         :  "rédaction et recontre avec le directeur de mémoire" 
        "Step4"         :  "correction finale et dépot du mémoire"
        "Step5"         :  "Soutenance de mémoire"
        archivedTask    : "0",
        favoriteTask    : "1",
        tagsTask        : " très important",
        durationTask    : "12 mois",
        validTask       : "1"
    },
    {
        idTask          : "2",
        titleTask       : "Projet tutoré",
        descriptionTask : " Travail sur projet pour un commentaire ",
        idPriority      : "3",
        categoryTask    : "Gestion de projet",
        creationDateTask: "2027-03-01",
        dueDateTask     : "2026-06-30",
        statusTask      : "non débuté",
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
        descriptionTask : "Porfolio expliquant votre expérience au sein de l'entreprise",
        idPriority      : "1",
        categoryTask    : "Professionnel",
        creationDateTask: "2027-03-01",
        dueDateTask     : "2027-06-27",
        statusTask      : "A venir",
        doneTask        : "0",
        archivedTask    : "0",
        favoriteTask    : "1",
        tagsTask        : "Stage et/ou alternance",
        durationTask    : "12 mois",
        validTask       : "1"
    },
    {
        idTask          : "4",
        titleTask       : "Les deadlines des rendus finaux du semetre 1 ",
        descriptionTask : " Réussite du 1er semestre M2 SYNVA 2026-2027",
        idPriority      : "4",
        categoryTask    : "dream Perso",
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
        descriptionTask : "Certificat médical",
        idPriority      : "3",
        categoryTask    : "Social et humanité",
        creationDateTask: "2026-09-25",
        dueDateTask     : "2027-09-28",
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
