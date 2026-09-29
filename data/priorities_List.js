/* ============================================================
   PRIORITIES LIST - Référentiel des priorités
   ------------------------------------------------------------
   Auteurs     : Raoul FOSSUA TINDO & Lovensky DERVIS
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

/* ---------- Test rapide ---------- */
console.log("=== PRIORITIES LIST ===");
console.log(prioritiesList);
