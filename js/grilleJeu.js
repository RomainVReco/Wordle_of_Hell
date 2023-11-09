import * as configWordle from './configWordle.js'
// Définition des variables et des constantes :

// Pour cleaner le HTML :
const nombresEssais = configWordle.getNomnbreEssais();
const nombresLettres = configWordle.getNumberOfLetters();

let numLigne = 1;
let numCase = 1;
const motMystere = "super";


document.getElementById('nombreEssaisAutorises').textContent = nombresEssais;


// Fonction pour générer la grille en fonction du nombre d'essais et de lettres :
function genererGrille(nombresEssais, nombresLettres) {
    let parent = document.querySelector('.motsJoueur');
    let conteneurMots = document.createElement('div');
    conteneurMots.classList.add('conteneurMots');

    for (let i = 0; i < nombresEssais; i++) {
        console.log("je suis dans la ligne")
        let ligneMot = document.createElement('div');
        ligneMot.classList.add('ligneMot');
        for (let j = 0; j < nombresLettres; j++) {
            console.log("je suis dans la colonne")
            let mot = document.createElement('div');
            mot.classList.add('mot');
            ligneMot.append(mot);
        }
        conteneurMots.append(ligneMot);
    }
    parent.append(conteneurMots);
}
genererGrille(nombresEssais, nombresLettres);
const elementsMot = document.querySelectorAll(".ligneMot");

export function remplirMot (clef) {
    // console.log(elementsMot); pour contrôle console
    if (numCase <= nombresLettres) {
        elementsMot[numLigne - 1].querySelectorAll(".mot")[numCase - 1].innerText = clef;
        numCase += 1;
    }
}

export function effacerLettre () {
    const elementsLettre = elementsMot[numLigne - 1].querySelectorAll(".mot");

    for (let index = elementsLettre.length -1; index >= 0; index--) {
        console.log(elementsLettre[index].innerText); 
        const element = elementsLettre[index];
        if (element.innerText !== '') {
            element.innerText = '';
            numCase -= 1;
            break;
        }
    }
}

function verifierMot () {
    const elementsLettre = elementsMot[numLigne - 1].querySelectorAll(".mot")
    let compteurLettresCorrectes = 0;

    elementsLettre.forEach((element, index) => {
        const indexDesLettresDuMotMystere = motMystere.toLowerCase().indexOf(element.innerText.toLowerCase());
        // console.log(indexDesLettresDuMotMystere); pour contrôle console
        if (indexDesLettresDuMotMystere === index) {
            compteurLettresCorrectes += 1;
            element.classList.add("mot-vert");
        } else if (indexDesLettresDuMotMystere > 0) {
            element.classList.add("mot-jaune");
        } else {
            element.classList.add("mot-gris");
        }
    }); 
    if (compteurLettresCorrectes === 5) {
        finJeu = true;
        win = true;
        // alert('Victoire'); pour contrôle
        // Faire la bascule sur l'écran de victoire
    } else if (numLigne === 6) {
        finJeu = true;
        // alert('Perdu ! Le mot mystère était : ' + motMystere); pour contrôle
        // Faire la bascule sur l'écran game over
    }
}