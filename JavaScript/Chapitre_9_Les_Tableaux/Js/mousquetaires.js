// Tableaux des mousquetaires
var TheMousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les 3 mousquetaires!")
for (var i = 0; i < TheMousquetaires.length; i++) {
    console.log(TheMousquetaires[i]);
}

TheMousquetaires.push("D'Artagnan");

console.log("A présent, ils sont quatres!")

TheMousquetaires.forEach(function (mousquetaire) {
    console.log(mousquetaire);
});

