// Solution 1
// Renvoie le carré d'un nombre
function carre(x) {
  for(var x = 0; x <= 10; x++){
      resultat = x * x;
      console.log("Le carré de" + " " + x + " "+ "est égale à :" + resultat);
      
  }
}
console.log(carre());

//console.log(carre(0)); // Doit afficher 0
//console.log(carre(2)); // Doit afficher 4
//console.log(carre(5)); // Doit afficher 25


// Solution 2
// Renvoie le carré d'un nombre
function carre(x) {
    return x * x;
}

console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25

for (var i = 0; i <= 10; i++) {
    console.log(carre(i));
}