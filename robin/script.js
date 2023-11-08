// Définition des variables et des constantes :

// Pour cleaner le HTML :
const nombresEssais = 6;
const nombresLettres = 5;
let numberOfTry = 0;

const elementsTouches = document.querySelectorAll("button");
let ligne = 1;
let lettre = 1;
const motMystere = "super";
const elementsMot = document.querySelectorAll(".ligneMot")
let tempsRestant = 300;
const elementChrono = document.getElementById('chrono');
let finJeu = false;
let win = false;
let gameOver = false;



const boutonOuvrir = document.getElementById('ouvrirRegles');
const modal = document.getElementById('maModal');
const boutonFermer = document.querySelector('.fermer');

document.getElementById('nombreEssaisAutorises').textContent = nombresEssais;

boutonOuvrir.addEventListener('click', function() {
    modal.style.display = 'block';
});

boutonFermer.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Pour cleaner le HTML :
// Fonction pour générer la grille en fonction du nombre d'essais et de lettres :
// function genererGrille(nombresLignes, nombresLettres) {
//     let conteneurMots = document.createElement('div');
//     conteneurMots.classList.add('conteneurMots');

//     for (let i = 0; i < nombresLignes; i++) {
//         let ligneMot = document.createElement('div');
//         ligneMot.classList.add('ligneMot');s

//         for (let j = 0; j < nombresLettres; j++) {
//             let mot = document.createElement('div');
//             mot.classList.add('mot');
//             ligneMot.appendChild(mot);
//         }
//         conteneurMots.appendChild(ligneMot);
//     }
//     return conteneurMots;
// }
// const resultatGrille = genererGrille(nombresEssais, nombresLettres);
// const divConteneurMots = document.querySelector('.conteneurMots');
// divConteneurMots.appendChild(resultatGrille);

// Récupération via un forEach des valeurs des touches du clavier :
elementsTouches.forEach((element) => {
    element.addEventListener("click", function() {
        pressionTouche (element.attributes["data-key"].value)
    });
});



function remplirMot (clef) {
    // console.log(elementsMot); pour contrôle console
    if (lettre < 6) {
        elementsMot[ligne - 1].querySelectorAll(".mot")[lettre - 1].innerText = clef;
        lettre += 1;
    }
}

function verifierMot () {
    const elementsLettre = elementsMot[ligne - 1].querySelectorAll(".mot")
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
    } else if (ligne === 6) {
        finJeu = true;
        // alert('Perdu ! Le mot mystère était : ' + motMystere); pour contrôle
        // Faire la bascule sur l'écran game over
    }
}

function confirmerSaisieMot () {
    if(lettre < 6) {
        alert("Pas assez de lettres");
    } else {
        verifierMot ();
        ligne += 1;
        lettre = 1;
        numberOfTry += 1;

        // Mettre à jour l'affichage :
        document.getElementById('nombresEssais').textContent = numberOfTry;
    }
}

function effacerLettre () {
    const elementsLettre = elementsMot[ligne - 1].querySelectorAll(".mot");
    // console.log(elementsLettre); pour contrôle console

    for (let index = elementsLettre.length -1; index >= 0; index--) {
        // console.log(elementsLettre[index].innerText); pour contrôle console
        const element = elementsLettre[index];
        if (element.innerText !== '') {
            element.innerText = '';
            lettre -= 1;
            break;
        }
    }
}


// Fonction pour les touches du clavier :
function pressionTouche (clef) {
    // console.log(clef); pour contrôle console
    if (!finJeu) {
        if(clef.toLowerCase() === 'enter') {
            confirmerSaisieMot ();
        } else if (clef.toLowerCase() === 'del') {
            effacerLettre ();
        } else {
            remplirMot (clef);
        }
    }
    // else....   
}

// Fonction pour mettre à jour et afficher le chrono
function actualiserChrono() {
    const minutes = Math.floor(tempsRestant / 60);
    let secondes = tempsRestant % 60;

    // Ajoute un zéro devant les secondes si elles sont inférieures à 10
    if (secondes < 10) {
        secondes = '0' + secondes;
    }
    // Affichage du chrono
    elementChrono.innerHTML = `<i class="fa-solid fa-clock"></i><br><br> ${minutes}:${secondes}`;

    // Décrémente le temps
    tempsRestant--;

    // Si le temps est écoulé
    if (tempsRestant < 0) {
        finJeu = true;
        gameOver = true;
        // alert('Perdu ! Le mot mystère était : ' + motMystere); pour contrôle
        clearInterval(chrono);
        elementChrono.innerHTML = "Temps écoulé ! Game Over";
        // Autres actions à effectuer une fois le temps écoulé
        // Par exemple : gameOver = true; ou exécuter une fonction gameOver()
    }
}
// Appel de la fonction toutes les 1 seconde pour mettre à jour le chrono
const chrono = setInterval(actualiserChrono, 1000);

