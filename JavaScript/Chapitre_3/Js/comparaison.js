//Solution 1
var nbr1 = Number(prompt("Saisir le premier nombre:"));
var nbr2 = Number(prompt("Saisir le deuxieme nombre:"));

if (nbr1 > nbr2)
    console.log(nbr1 + " " + "est supérieure à :" + nbr2);
else
    console.log(nbr1 + " " + "est inferieure à :" + nbr2);

//Solution 2
var nombre1 = Number(prompt("Entrez le nombre 1 :"));
var nombre2 = Number(prompt("Entrez le nombre 2 :"));

if (nombre1 < nombre2) {
    console.log(nombre1 + " est plus petit que " + nombre2);
} else if (nombre1 > nombre2) {
    console.log(nombre1 + " est plus grand que " + nombre2);
} else {
    console.log(nombre1 + " et " + nombre2 + " sont égaux");
}