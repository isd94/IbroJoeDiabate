/*
-Une fonction qui ne renvoie pas de valeur est parfois appelée une procédure.

-Une Variables locales: Ce sont les variables déclarées dans le corps d'une fonction.

-La Portée d'une variable: On nomme portée d'une variable l'ensemble des endroits où elle est accessible. La portée d'une variable locale se limite au corps de la fonction dans laquelle elle est déclarée.

-Un Paramètre: Un paramètre est une information dont une fonction a besoin pour jouer son rôle. Les paramètres d'une fonction sont définis entre parenthèses juste après le nom de la fonction. On peut ensuite utiliser leur valeur dans le corps de la fonction. 

-Un argument: On appelle argument la valeur donnée à un paramètre lors d'un appel.



*/


function direBonjour() {
    console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");

// Seconde Variante

function direBonjour() {
    return "Bonjour !";
}

console.log("Début du programme");
var resultat = direBonjour();
console.log(resultat);
console.log("Fin du programme");

// Troisième Variante

function direBonjour() {
    return "Bonjour !";
}

console.log(direBonjour()); // Affiche "Bonjour !"

// Quatrième variante

function direBonjour() {
    var message = "Bonjour !";
    return message;
}

console.log(direBonjour());

// Fonction avec Paramètre

function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));



