export function victory(motMystere){
   let numberOfTries = getNumberOfTries()
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

   let elapsedTime = getElapsedTime()
   let motMystere = motMystere
   let keyboardContainer = document.getElementById('keyboard-container')
   let endGameContainer = document.createElement('div')
   let firstBloc = document.createElement('p')
   firstBloc.append(`Bravo, vous avez trouvé le mot mystère : ${motMystere}`)
   let secondBloc = document.createElement('p')
   secondBloc.append(`Vous l'avez trouvé en ${numberOfTries} tentatives ! ${comment}`)
   let thirdBloc = document.createElement('p')
   thirdBloc.append(`Temps écoulé : ${elapsedTime}.`)

   endGameContainer.appendChild(firstBloc, secondBloc, thirdBloc)



}