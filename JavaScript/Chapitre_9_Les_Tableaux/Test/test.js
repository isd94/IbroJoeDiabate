function soustraction(nombre1, nombre2) {
   return nombre2 - nombre1;
}
console.log(soustraction(5, 7));


var etudiant = {
    nom: "Michel",
    prenom: "Joseph"
};
console.log(etudiant.prenom + etudiant.nom);


var a = {
    prop1: "toto"
};
var b = Object.create(a);
b.prop2 = "titi";
var c = Object.create(b);
c.prop3 = "tutu";
console.log(c.prop1);


var valeurs = [8, 9, 24, 35, 40, 54];
console.log(valeurs[1] + valeurs[5]);

var emp1 = {
    nom: "Ochon",
    prenom: "Paul"
};
var emp2 = {
    nom: "Diossy",
    prenom: "Daisy"
};
var employes = [emp1, emp2];
console.log(employes[1].prenom);