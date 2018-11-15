// Définition Objet : un objet informatique est une entité qui possède des propriétés. Chaque propriété définit une caractéristique de l'objet. Une propriété peut être une information associée à l'objet (exemple : la couleur du stylo) ou une action (exemple : la capacité du stylo à écrire).


// Création d'un objet Syntaxe littérale
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

// Création d'un objet avec un constructeur

// Constructeur MonObjet
function MonObjet() {
    // Initialisation de l'objet
    // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

// Utilisation d'un objet
// Exemple 1
console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

// Exemple 2
console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleur']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic"

// Sous forme d'expression // Exemple 1
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Exemple 2

var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");

// Notion de Méthode
// Exemple 1

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());

// Exemple 2

var perso = {}; // Création d'un objet sans aucune propriété
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;
// Renvoie la description du personnage
perso.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie et " +
        this.force + " en force";
    return description;
};

// Syntaxe Générale

var monObjet = {
    propriete1: valeur1,
    propriete2: valeur2,
    // ... ,
    methode1: function(/* ... */) {
        // ...
    },
    methode2: function(/* ... */) {
        // ...
    },
    // ...
};

console.log(monObjet.propriete1); // Affiche la propriété propriete1 de monObjet

console.log(monObjet.methode1(...)); // Affiche le résultat de l'appel de la méthode methode1 de monObjet