// Solution 1
// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var prenom = prompt("Entrer votre prénom:");
    var nom = prompt("Entrer votre nom");
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

console.log(direBonjour());

// Solution 2

// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var p = prompt("Entrez votre prénom :");
var n = prompt("Entrez votre nom :");
console.log(direBonjour(p, n));