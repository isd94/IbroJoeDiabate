// Déclaration et affichage d'une variable
var a;
a = 17.5
console.log(a);

// Incrémentation d'une variable

var b = 0; // b contient la valeur 0
b += 1; // b contient la valeur 1
b++; // b contient la valeur 2
console.log(b); // Affiche 2

// La notion d'expression

// c est une expression dont la valeur est le nombre 3
var c = 3;
// d est une expression dont la valeur est celle de c (ici 3)
var d = c;
// (d + 1) est une expression
// Sa valeur est celle de d augmentée de 1 (ici 4)
d = d + 1; // d contient la valeur 4
console.log(d); // Affiche 4

var e = 3 + 2 * 4; // e contient la valeur 11
e = (3 + 2) * 4; // e contient la valeur 20
console.log(e);