import {getFinjeu, getTime, setElapsedTime, setFinJeu} from './configWordle.js'

let tempsRestant = getTime();
const elementChrono = document.getElementById('chrono');


// Fonction pour mettre à jour et afficher le chrono
function actualiserChrono() {
    const minutes = Math.floor(tempsRestant / 60);
    let secondes = tempsRestant % 60;
    let finJeu = getFinjeu()

    // Ajoute un zéro devant les secondes si elles sont inférieures à 10
    if (secondes < 10) {
        secondes = '0' + secondes;
    }
    // Affichage du chrono
    elementChrono.innerHTML = `<i class="fa-solid fa-clock"></i><br><br> ${minutes}:${secondes}`;

    // Décrémente le temps
    if (tempsRestant>0 && finJeu == false){
        tempsRestant--;
        console.log(affichageTempsJeu(tempsRestant))
        setElapsedTime(affichageTempsJeu(tempsRestant))
    }


    // Si le temps est écoulé
    if (tempsRestant == 0) {
        elementChrono.innerHTML = `<i class="fa-solid fa-clock"></i><br><br> Temps écoulé !`; 
        setFinJeu(true)
        lostGame(tempsRestant, motifDefaite)

    }
}
// Appel de la fonction toutes les 1 seconde pour mettre à jour le chrono
const chrono = setInterval(actualiserChrono, 1000);

function affichageTempsJeu (tempsRestant){
    const minutes = Math.floor(tempsRestant / 60);
    let secondes = tempsRestant % 60;
    const resultat = [minutes,secondes]
    return resultat
}