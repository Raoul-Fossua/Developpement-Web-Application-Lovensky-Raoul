/* ============================================================
   PRIORITIES LIST - Référentiel des priorités
   ------------------------------------------------------------
   Auteur      : Raoul FOSSUA TINDO & Lovensnsky DERVIS
   Contexte    : Cours Web Programming 1.x - Étape N1
   Analogie    : categoryList (cours JS)
   MySQL       : table "priorities" - PRIMARY KEY : idPriority
   ------------------------------------------------------------
   Structure   : Array d'objets JSON
   Utilisé par : tasks_List.js (clé étrangère idPriority)
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

/* ---------- Test rapide ---------- */
console.log("=== PRIORITIES LIST ===");
console.log(prioritiesList);