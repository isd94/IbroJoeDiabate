//Solution 1
/*var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0
};

console.log(perso.nom + " a " + perso.sante + " points de vie," + " " + perso.force + " en force et" + " " + perso.xp +" "+ "points d'exprérience" );

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.nom + " a " + perso.sante + " points de vie," + " " + perso.force + " en force et" + " " + perso.xp +" "+ "points d'exprérience" );*/

//Solution 2

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie(s)," +
            this.force + " en force(s) et " + this.xp + " points d'expérience(s) ";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log("Aurora vient d'être toucher par une flêche !");
console.log("Aurora vient de manger un coeur !");
console.log(perso.decrire());


