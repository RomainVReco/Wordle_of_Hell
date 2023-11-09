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
let firstBloc = document.createElement('p')
firstBloc.textContent= `Bravo, vous avez trouvé le mot mystère : ${motMystere}`

let secondBloc = document.createElement('p')
secondBloc.append(`Vous l'avez trouvé en ${numberOfTries} ${tentative} ! ${comment}`)

let thirdBloc = document.createElement('p')
thirdBloc.append(`Temps écoulé : ${elapsedTime[0]} ${infoMinute} et ${elapsedTime[1]} ${infoSeconde}.`)

let fourthBloc = document.createElement('p')
fourthBloc.append(`Votre score est ${score} points`)

let bloc = [firstBloc, secondBloc, thirdBloc, fourthBloc]

for (let i=0;i<bloc.length;i++){
    endGameContainer.appendChild(bloc[i])
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