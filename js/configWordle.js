import {allWords} from './words.js'

const words = allWords()
const nombreEssais = 6
const time = 500
const numberOfLines = nombreEssais
const numberOfLetters = 5;
var numberOfTries = 0
var elapsedTime = 0
var finJeu = false

let shuffleInt = Math.floor(Math.random() * words.length);
const motMystere = "JUSEE"
// words[shuffleInt]
console.log("Mot mystère : "+motMystere)

export function getNomnbreEssais(){
    return nombreEssais
}

export function getTime(){
    return time
}

export function setElapsedTime(time){
    elapsedTime = time
}

export function getElapsedTime(){
    return elapsedTime
}

export function getNumberOfLines(){
    return numberOfLines
}

export function getNumberOfLetters(){
    return numberOfLetters
}

export function getMotMystere() {
    return motMystere
}

export function getNumberOfTries(){
    return numberOfTries
}

export function getFinjeu() {
    return finJeu
}

export function setFinJeu(boolean){
    finJeu = boolean
}