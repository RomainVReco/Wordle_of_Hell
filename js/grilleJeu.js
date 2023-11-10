import * as configWordle from './configWordle.js'
// Définition des variables et des constantes :

// Pour cleaner le HTML :
const nombresEssais = configWordle.getNomnbreEssais();
const nombresLettres = configWordle.getNumberOfLetters();
const motMystere = configWordle.getMotMystere();

let numLigne = 1;
let numCase = 1;



document.getElementById('nombreEssaisAutorises').textContent = nombresEssais;


// Fonction pour générer la grille en fonction du nombre d'essais et de lettres :
function genererGrille(nombresEssais, nombresLettres) {
    let parent = document.querySelector('.motsJoueur');
    let conteneurMots = document.createElement('div');
    conteneurMots.classList.add('conteneurMots');

    for (let i = 0; i < nombresEssais; i++) {
        let ligneMot = document.createElement('div');
        ligneMot.classList.add('ligneMot');
        for (let j = 0; j < nombresLettres; j++) {
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
    if (numCase <= nombresLettres) {
        elementsMot[numLigne - 1].querySelectorAll(".mot")[numCase - 1].innerText = clef;
        numCase += 1;
    }
}

export function effacerLettre () {
    const elementsLettre = elementsMot[numLigne - 1].querySelectorAll(".mot");
    
    for (let index = elementsLettre.length -1; index >= 0; index--) {
        const element = elementsLettre[index];
        if (element.innerText !== '') {
            element.innerText = '';
            numCase -= 1;
            break;
        }
    }
}

export function updateGridColor (userWord) {
    const elementsLettre = elementsMot[numLigne - 1].querySelectorAll(".mot")

    for (let i=0; i<motMystere.length; i++){
        if (elementsLettre[i].innerText==motMystere[i]) {
            elementsLettre[i].classList.add("mot-vert");
        }
        else if (motMystere.includes(elementsLettre[i].innerText)){
            elementsLettre[i].classList.add("mot-jaune");
        }
        else if (!(motMystere.includes(elementsLettre[i].innerText))) {
            elementsLettre[i].classList.add("mot-gris");
        } 
    } 
    updateLineCase()
}

function updateLineCase(){
    numLigne += 1
    numCase = 1
}