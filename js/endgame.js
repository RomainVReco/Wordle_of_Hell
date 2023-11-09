import {getElapsedTime} from './configWordle.js'

export function victory(motMystere, userTries){
   let numberOfTries = userTries
   let elapsedTime = getElapsedTime()
   let infoMinute = ''
   let infoSeconde = ''
   let tempsRestant = ((parseInt(elapsedTime[0]*60))+(parseInt(elapsedTime[1])))
   let score = calculerScore(tempsRestant, numberOfTries)

   if (elapsedTime[0] >= 1){
        infoMinute = "minute"
   }
   else infoMinute = "minutes"

   if (elapsedTime[1] >= 1){
    infoSeconde = "seconde"
    }
    else infoSeconde = "secondes"

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
`Temps écoulé : ${elapsedTime[0]} ${infoMinute} et ${elapsedTime[1]} ${infoSeconde}.`, `Votre score est ${score} points`]
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

function calculerScore(tempsRestant, nombreEssais){
    let score = (100*tempsRestant)/nombreEssais;
    return score;
};