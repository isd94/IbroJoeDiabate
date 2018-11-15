//Solution 1
var mois = Number(prompt("Entrez le numéro d'un mois :"));

/* Solution combinant if et switch.
Le if initial permet d'éliminer tous les mois inconnus.
Ensuite, la valeur par défaut de la variable nbJours permet d'économiser tous les tests
des mois ayant 31 jours */
if ((mois >= 1) && (mois <= 12)) {
    var nbJours = 31;
    switch (mois) {
    case 4:
    case 6:
    case 9:
    case 11:
        nbJours = 30;
        break;
    case 2:
        nbJours = 28;
        break;
    }
    console.log("Ce mois comporte " + nbJours + " jours.");
} else {
    console.log("Mois non reconnu !");
}

//Solution 2

var mois = Number(prompt("Entrez le numéro d'un mois :"));

/* Solution avec un switch.
Notez l'absence d'instructions break dans certains case : on passe ainsi d'un cas
à un autre pour tous les mois ayant le même nombre de jours, jusqu'à arriver au
case qui affiche le message approprié et fait sortir du switch.
On limite ainsi la duplication du message affiché dans le code */
switch (mois) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
    console.log("Ce mois comporte 31 jours.");
    break;
case 4:
case 6:
case 9:
case 11:
    console.log("Ce mois comporte 30 jours.");
    break;
case 2:
    console.log("Ce mois comporte 28 jours.");
    break;
default:
    console.log("Mois non reconnu !");
}

//Solution 3

var mois = Number(prompt("Entrez le numéro d'un mois :"));

// Solution avec des if
if (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 ||
    mois === 10 || mois === 12) {
    console.log("Ce mois comporte 31 jours.");
} else if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    console.log("Ce mois comporte 30 jours.");
} else if (mois === 2) {
    console.log("Ce mois comporte 28 jours.");
} else {
    console.log("Mois non reconnu !");
}