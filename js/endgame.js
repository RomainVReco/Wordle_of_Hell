import {getElapsedTime, getMotMystere, getTime} from './configWordle.js'
import * as gameOver from './gameover.js'

export function victory(motMystere, userTries){
   let numberOfTries = userTries
   let elapsedTime = getElapsedTime()
   let infoMinute = ''
   let infoSeconde = ''
   let tempsRestant = ((parseInt(elapsedTime[0]*60))+(parseInt(elapsedTime[1])))
   let score = calculerScore(tempsRestant, numberOfTries)
   let tempsEcoule = getTime()-tempsRestant
   let minutes = Math.floor(tempsEcoule / 60);
   let secondes = tempsEcoule % 60;

   if (parseInt(minutes) >= 1){
        infoMinute = "minutes"
   }
   else infoMinute = "minute"

   if (parseInt(secondes) >= 1){
    infoSeconde = "secondes"
    }
    else infoSeconde = "seconde"

   let comment =''
   switch (numberOfTries){
    case 1:
        comment = "Coup de chance ou don de prescience :) ?"
        break
    case 5:
        comment = "C'était moins une !"
        break
    case 6:
        comment = "Mieux vaut tard que jamais :D !"
        break
    default:
        comment = "Chapeau !"
   }

   let tentative = ''
   if (numberOfTries==1) {
    tentative = "tentative"
   }
   else tentative = "tentatives"

let keyboardContainer = document.getElementById('keyboard-container')
let endGameContainer = document.createElement('div')
endGameContainer.classList.add('contenu-modal-victory')

let blocText = [`Bravo, vous avez trouvé le mot mystère : ${motMystere}`, `Vous l'avez trouvé en ${numberOfTries} ${tentative} ! ${comment}`,
`Temps écoulé : ${minutes} ${infoMinute} ${secondes} ${infoSeconde}.`, `Votre score est ${score} points`]
let blocList = []

for (let i=0; i<blocText.length;i++){
    let bloc = document.createElement('p')
    bloc.append(blocText[i])
    bloc.classList.add('victory-p')
    blocList.push(bloc)
}

for (let i=0;i<blocList.length;i++){
    endGameContainer.appendChild(blocList[i])
}
let replay = ajouterBoutonsReplay()
endGameContainer.appendChild(replay)

let regle = document.querySelector(".reglesDuJeu")
let nombreEssais = document.querySelector('.nombreDEssais')
let timer = document.querySelector('.timer')

regle.remove()
nombreEssais.remove()
timer.remove()

console.log('endGameContainer : '+ endGameContainer.innerHTML)
keyboardContainer.innerHTML=''
keyboardContainer.append(endGameContainer)

}

export function lostGame(motifDefaite){
    let motMystere = getMotMystere()
    console.log("Je suis dans lostgame()")
    console.log("Motif defaite")

    let keyboardContainer = document.getElementById('keyboard-container')
    let endGameContainer = document.createElement('div')
    endGameContainer.classList.add('contenu-modal-victory')

    let blocText = [`Perdu ! ${motifDefaite}`, `Le mot mystère était : ${motMystere}`]
    let blocList = []

    for (let i=0; i<blocText.length;i++){
        let bloc = document.createElement('p')
        bloc.append(blocText[i])
        bloc.classList.add('victory-p')
        blocList.push(bloc)
    }

    for (let i=0;i<blocList.length;i++){
        endGameContainer.appendChild(blocList[i])
    }

    let replay = ajouterBoutonsReplay()
    endGameContainer.appendChild(replay)
    // gameOver.addDivMotMystere(motMystere)

    let regle = document.querySelector(".reglesDuJeu")
    let nombreEssais = document.querySelector('.nombreDEssais')
    let timer = document.querySelector('.timer')

    regle.remove()
    nombreEssais.remove()
    timer.remove()

    console.log('endGameContainer : '+ endGameContainer.innerHTML)
    keyboardContainer.innerHTML=''
    keyboardContainer.append(endGameContainer)
    gameOver.addSpriteScriptAndStyle()
    }

function calculerScore(tempsRestant, nombreEssais){
    let score = (100*tempsRestant)/nombreEssais;
    return score;
};

function ajouterBoutonsReplay() {
    var boutonsDiv = document.createElement("div")
    boutonsDiv.setAttribute("id","boutonsDiv")
    const boutonReplay = document.createElement('button');
    const boutonRetour = document.createElement('button');
    
    boutonReplay.textContent = 'Replay';
    boutonRetour.textContent = 'Retour Accueil';

    boutonReplay.classList.add('bouton', 'replay');
    boutonRetour.classList.add('bouton', 'retour');

    boutonReplay.addEventListener('click', function() {
      window.location.href = './index.html'; 
    });

    boutonRetour.addEventListener('click', function() {
      window.location.href = './accueil.html'; 
    });

    boutonsDiv.appendChild(boutonReplay);
    boutonsDiv.appendChild(boutonRetour);
    return boutonsDiv
}