import * as maGrille from './grilleJeu.js'

export function getLetterKey(letter, userWord, numberLetters) {
    if (userWord.length == numberLetters) {
        return 
    }
    let tab_mot = maGrille.remplirMot(letter, userWord, numberLetters)
    console.log(userWord)
    return tab_mot

}

// Concatene la proposition du joueur pour retourner un String
export function concatUserInput(userWord) {
    let concatUserWord = ''
    for (let x of userWord) {
        concatUserWord += x
    }
    console.log(concatUserWord)
    return concatUserWord
}

// Vérifie si la saisie du joueur existe dans le référentiel
export function checkWordExists(concatUserWord, words){
    if ((words.includes(concatUserWord))) {
        return true
    }
    else return false
}

// Vérifie si la saisie du contient des lettres du mot mystère et renvoie une Map
export function checkUserWord(words, userWord, motMystere){
    let breakMotMystere = ''
    const userWordChecked = new Map()

    for (let j=0; j<motMystere.length; j++){
        breakMotMystere += motMystere[j]
    }
    console.log(breakMotMystere)

    for (let i=0; i<motMystere.length; i++){
        if (breakMotMystere[i]==userWord[i]) {
            userWordChecked.set(i, [1,userWord[i]])
        }
        else if (motMystere.includes(userWord[i])){
            userWordChecked.set(i, [2, userWord[i]])
        }
        else if (!(motMystere.includes(userWord[i]))) {
            userWordChecked.set(i, [0, userWord[i]])
        }
    }
    return userWordChecked
}

export function checkVictory(userWordChecked, numberLetters, endGame, victory){
    let conditionsVictoire = []
    let correctLetters = 0
    for (const x of userWordChecked.values){
        if (x[0] == 1){
            correctLetters += 1
        }
    }
    if (correctLetters == numberLetters.length){
        endGame = true;
        victory = false;
        let conditionsVictoire = [endGame, victory]
    }
    return conditionsVictoire
}

export function errorUserInput(string){
    alert(string)
}


