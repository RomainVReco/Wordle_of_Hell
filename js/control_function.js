import * as maGrille from './grilleJeu.js'
import {victory, lostGame} from './endgame.js'

export function getLetterKey(letter, userWord, numberLetters) {
    if (userWord.length == numberLetters) {
        return userWord
    }
    else {
        userWord.push(letter)
        maGrille.remplirMot(letter)
    }
    return userWord
}

export function checkUserWordLength(userWord, numberLetters){
    if (userWord.length == numberLetters) {
        return true
    }
    else {
        errorUserInput(`Le mot ne fait pas ${numberLetters} lettres.`)
        return false
    }
}

// Concatene la proposition du joueur pour retourner un String
export function concatUserInput(userWord) {
    let concatUserWord = ''
    for (let x of userWord) {
        concatUserWord += x
    }
    return concatUserWord
}

// Vérifie si la saisie du joueur existe dans le référentiel
export function checkWordExists(userWord, words){
    let concatUserWord = concatUserInput(userWord)
    if (words.includes(concatUserWord)) {
        return true
    }
    else{
        errorUserInput("Le mot n'existe pas")
        return false
    }
}

// Vérifie si la saisie du contient des lettres du mot mystère et renvoie une Map
export function checkUserWord(userWord, motMystere){
    let breakMotMystere = ''
    const userWordChecked = new Map()

    for (let j=0; j<motMystere.length; j++){
        breakMotMystere += motMystere[j]
    }
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
        maGrille.updateGridColor(userWordChecked)
        return userWordChecked;
    }

export function checkNumberOfTries(numberOfTry, userTries){
    let motifDefaite = "Nombre maximum d'essais atteint !"
    if (userTries == numberOfTry ){
        lostGame(motifDefaite)
        return true
    }
    
    else false

}

export function eraseLastEntry(userWord){
    if (userWord.length != 0)  {
        userWord.pop()
        maGrille.effacerLettre()
        return userWord
    }
    else return
}

export function errorUserInput(string){
    alert(string)
}

export function checkVictory(userWord, motMystere, userTries) {
    let concatUserWord = concatUserInput(userWord)
    if (concatUserWord === motMystere) {
        victory(motMystere, userTries)
        return true
    }
    else return false
}


