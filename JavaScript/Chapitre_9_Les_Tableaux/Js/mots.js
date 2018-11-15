var mots = [];

var motAsaisir = "";
while (motAsaisir !== "stop") {
    motAsaisir = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (motAsaisir !== "stop") {
        mots.push(motAsaisir);
    }
}

mots.forEach(function (motAsaisir) {
    console.log(motAsaisir);
});