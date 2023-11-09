import {allWords} from './words.js'
import './control_function.js'
import './keyboard.js'
import './chrono.js'
import './grilleJeu.js'
import './rules.js'
import './trycompter.js'

const letters = [
    "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
    "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
    "W", "X", "C", "V", "B", "N"
]
const words = allWords()
const enter = "ENTER"
const backspace = "◄"
var userProposition = []
var numberLetters = 5
const nombreEssais = 6
const nombreLettres = 5

// genererGrille(nombreEssais, nombreLettres)
// displayKeyboard() 

genererGrille(nombreEssais, nombreLettres);

