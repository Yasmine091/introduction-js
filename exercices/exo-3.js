// Exports
export {part10};

// Exercice 1 - Tableau des mois de l'année
let calendrier = [
     "Janvier",
     "Février",
     "Mars",
     "Avril",
     "Mai",
     "Juin",
     "Julliet",
     "Aout",
     "Septembre",
     "Octobre",
     "Novembre",
     "Décembre"
];

let departements = {
    "02" : "Aisne",
    "59" : "Nord",
    "60" : "Oise",
    "62" : "Pas-de-Calais",
    "80" : "Somme"
};

function part8() {
    for(let i = 0; i < calendrier.length; i++){
        console.log(calendrier[i]);
    }
}

function part9() {
    for(var i in departements){
        console.log(departements[i]);
    }
}


function part10() {
    for(var i in departements){
        console.log(i + " - " + departements[i]);
    }
}