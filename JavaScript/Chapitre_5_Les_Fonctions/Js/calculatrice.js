// Solution 1
function operationArthmetique(a, b) {
    var a = prompt("Entrer la valeur de A:");
    var b = prompt("Entrer la valeur de B:");
    somme = (a) + (b);
    soustraction = (a) - (b);
    multiplication = (a) * (b);
    division = (a) / (b);
    var message = "La Somme de A et B = " + somme + " " + "La Soustraction de A et B = " + soustraction + " " + "La Multiplication de A et B = " + multiplication + " " + "La Division de A par B = " + division;
    return message;
}

console.log(operationArthmetique());

// Solution 2

// Renvoie le résultat d'un calcul
function calculer(operandeGauche, operation, operandeDroite) {
    var resultat;
    switch (operation) {
    case "+":
        resultat = operandeGauche + operandeDroite;
        break;
    case "-":
        resultat = operandeGauche - operandeDroite;
        break;
    case "*":
        resultat = operandeGauche * operandeDroite;
        break;
    case "/":
        resultat = operandeGauche / operandeDroite;
        break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
