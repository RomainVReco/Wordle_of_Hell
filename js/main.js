// import * as maGrille from './grilleJeu.js'
import {allWords} from './words.js'
import './control_function.js'
import './keyboard.js'
import './chrono.js'
import './grilleJeu.js'
import './rules.js'
import './trycompter.js'
import * as monKeyboard from './keyboard.js'


const letters = [
    "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
    "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
    "W", "X", "C", "V", "B", "N"
]
const words = allWords()
const nombreEssais = 6
const nombreLettres = 5


// genererGrille(nombreEssais, nombreLettres)
// displayKeyboard() 

genererGrille(nombreEssais, nombreLettres);

