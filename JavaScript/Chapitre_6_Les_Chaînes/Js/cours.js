// Propriété LENGTH
// Exemple 1
console.log("ABC".length); // Affiche 3
console.log("Je suis une chaîne".length); // Affiche 18

// Exemple 2

var mot = "Kangourou";
var longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // Affiche 9

// Méthode Miniscule-Majuscule

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // Affiche "bora-bora"
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"  

// Comparaision
console.log("Azerty" === "azerty"); // Affiche false à cause du A majuscule

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q majuscule
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true

// Acceder au caractère d'un mot

var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

// Parcourir une chaine caractère par caractère
var prenom = "Odile";
for (var i = 0; i < prenom.length; i++) {
    console.log(prenom[i]);
}