//Solution 1
var jour = prompt("Saisissez un jour de la semaine:");
var j1 = "lundi";
var j2 = "mardi";
var j3 = "mercredi";
var j4 = "jeudi";
var j5 = "vendredi";
var j6 = "samedi";
var j7 = "dimanche";

switch (jour){
    case j1 :
        console.log("Demain nous serons:" + " " + j2);
        break;
    case j2 :
        console.log("Demain nous serons:" +  " " + j3);
        break;
    case j3 :
        console.log("Demain nous serons:" +  " " + j4);
        break;
    case j4 :
        console.log("Demain nous serons:" +  " " + j5);
        break;
    case j5 :
        console.log("Demain nous serons:" +  " " + j6);
        break;
    case j6 :
        console.log("Demain nous serons:" +  " " + j7);
        break;
    case j7 :
        console.log("Demain nous serons:" +  " " + j1);
        break;
    default:
    console.log("Le jour saisie est incorrect !");
                
}

//Solution 2

var jour = prompt("Entrez un jour de la semaine :");

// Solution avec un if
if (jour === "lundi") {
    console.log("Demain, nous serons mardi");
} else if (jour === "mardi") {
    console.log("Demain, nous serons mercredi");
} else if (jour === "mercredi") {
    console.log("Demain, nous serons jeudi");
} else if (jour === "jeudi") {
    console.log("Demain, nous serons vendredi");
} else if (jour === "vendredi") {
    console.log("Demain, nous serons samedi");
} else if (jour === "samedi") {
    console.log("Demain, nous serons dimanche");
} else if (jour === "dimanche") {
    console.log("Demain, nous serons lundi");
} else {
    console.log("Jour non reconnu !");
}

//Solution 3

var jour = prompt("Entrez un jour de la semaine :");

// Solution avec un switch
switch (jour) {
case "lundi":
    console.log("Demain, nous serons mardi");
    break;
case "mardi":
    console.log("Demain, nous serons mercredi");
    break;
case "mercredi":
    console.log("Demain, nous serons jeudi");
    break;
case "jeudi":
    console.log("Demain, nous serons vendredi");
    break;
case "vendredi":
    console.log("Demain, nous serons samedi");
    break;
case "samedi":
    console.log("Demain, nous serons dimanche");
    break;
case "dimanche":
    console.log("Demain, nous serons lundi");
    break;
default:
    console.log("Jour non reconnu !");
}


