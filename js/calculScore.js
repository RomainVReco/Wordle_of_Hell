// tempsRestant
// numberOfTry
// Fonction qui calcule le score en fonction du temps restant en secondes et du nombre d'esssais du jour :

function calculerScore(tempsRestant, nombreEssais){
    let score = (100*tempsRestant)/nombreEssais;
    return score;
};

// console.log(calculerScore(250, 1));
// console.log(calculerScore(250, 2));
// console.log(calculerScore(200, 4));
// console.log(calculerScore(200, 5));


