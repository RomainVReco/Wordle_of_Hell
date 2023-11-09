function verifierPairOuImpair(tableau) {   
    if (tableau.length === 0 || tableau.length % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

function creerDivTourJoueur() {

    let conteneurTourJoueur = document.createElement("div");
    conteneurTourJoueur.classList.add("conteneurTourJoueur");
    conteneurTourJoueur.style.display = "flex";
    conteneurTourJoueur.style.justifyContent = "space-between";
    conteneurTourJoueur.style.alignItems = "center";

    let joueur1 = document.createElement("div");
    joueur1.classList.add("joueur1");
    joueur1.textContent = "Tour joueur 1";
  
    let joueur2 = document.createElement("div");
    joueur2.classList.add("joueur2");
    joueur2.textContent = "Tour joueur 2";
  
    conteneurTourJoueur.appendChild(joueur1);
    conteneurTourJoueur.appendChild(joueur2);
  
    document.body.appendChild(conteneurTourJoueur);
}

creerDivTourJoueur();

function modifierBackgroundPlayer(valeur) {
    let joueur1 = document.querySelector('.joueur1');
    let joueur2 = document.querySelector('.joueur2');
  
    if (valeur === "pair") {
        joueur1.style.backgroundColor = "green";
        joueur2.style.backgroundColor = "red";
    } else if (valeur === "impair") {
        joueur1.style.backgroundColor = "red";
        joueur2.style.backgroundColor = "green";
    }
}


function determinerGagnant(win, valeur) {
    if (win === true) {
      if (valeur === "pair") {
        return "joueur 1";
      } else if (valeur === "impair") {
        return "joueur 2";
      }
    }
}
