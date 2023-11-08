// Définition des variables et des constantes :
const elementsTouches = document.querySelectorAll("button");
let ligne = 1;
let lettre = 1;
const motMystere = "super";
const elementsMot = document.querySelectorAll(".ligneMot")
let finJeu = false;
let win = false;

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




