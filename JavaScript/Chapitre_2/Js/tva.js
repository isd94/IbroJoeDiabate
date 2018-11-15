/*console.log("Calcul de la TVA:");
var taux = 20;
var prixHt = prompt("Entrez un prix :");
alert("La TVA est égale à : " + ((taux * prixHt)/100));*/

// Saisie du prix hors taxes
var prixHT = Number(prompt("Entrez le prix HT :"));

// Calcul du prix TTC
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);

// Affichage du résultat
console.log("Le prix TTC est de " + prixTTC + " Francs CFA");