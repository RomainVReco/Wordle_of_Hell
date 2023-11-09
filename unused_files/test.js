var a = []
var b
console.log(a)
console.log(b)

function testFin(){
let numberOfTries = 5
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

let elapsedTime = 5
let motMystere = "Jambon"
let keyboardContainer = document.getElementById('keyboard-container')
    
console.log('keyboardContainer : '+ keyboardContainer.innerHTML)
let endGameContainer = document.createElement('div')
endGameContainer.classList.add('contenu-modal')
let firstBloc = document.createElement('p')
firstBloc.textContent= `Bravo, vous avez trouvé le mot mystère : ${motMystere}`
console.log('firstBloc : '+ firstBloc.innerHTML)

let secondBloc = document.createElement('p')
secondBloc.append(`Vous l'avez trouvé en ${numberOfTries} tentatives ! ${comment}`)
console.log('secondBloc : '+ secondBloc.innerHTML)

let thirdBloc = document.createElement('p')
thirdBloc.append(`Temps écoulé : ${elapsedTime}.`)
console.log('thirdBloc : '+ thirdBloc.innerHTML)

let bloc = [firstBloc, secondBloc, thirdBloc]

for (let i=0;i<3;i++){
    endGameContainer.appendChild(bloc[i])
}

let regle = document.querySelector(".timer")
console.log(regle)
let nombreEssais = document.querySelector('.nombreDEssais')
let timer = document.querySelector('.reglesDuJeu')

regle.remove()
nombreEssais.remove()
timer.remove()

console.log('endGameContainer : '+ endGameContainer.innerHTML)
keyboardContainer.innerHTML=''
keyboardContainer.append(endGameContainer)
}

testFin()