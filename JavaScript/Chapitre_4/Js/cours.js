//Boucle While
console.log("Début du programme");
var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    nombre++;
}
console.log("Fin du programme");

var lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}


//Boucle For

var compteur;
for (compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
 }

var lettre = "";
for (; lettre !== "X";) {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}