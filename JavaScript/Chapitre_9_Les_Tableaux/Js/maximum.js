var valeurs = [11, 3, 7, 2, 9, 10];

var maximux = valeurs[0];

for(var i = 1; i < valeurs.length; i++ ){
    if(valeurs[i] > maximux)
        maximux = valeurs[i];
}
console.log("le maximum du tableau est : " + maximux);