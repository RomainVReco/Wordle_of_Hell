import {allWords} from './words.js'
import * as mesControles from './control_function.js'

const letters = [
    "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
    "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
    "W", "X", "C", "V", "B", "N"
]
const words = allWords()
const enter = "ENTER"
const backspace = "◄"
var userWord = []
var numberLetters = 5
const nombreEssais = 6
const nombreLettres = 5

function displayKeyboards(){
    let keyboard = document.getElementById('keyboard')
    for (let i = 0; i < letters.length; i++) {
        let new_key = document.createElement('button')
        new_key.classList.add('letter')
        new_key.setAttribute('tag', letters[i])
        new_key.setAttribute('id', 'letter-key')
        new_key.append(letters[i])
        keyboard.appendChild(new_key)
    }
    let enter_key = document.createElement('button')
     enter_key.classList.add('enter')
     enter_key.setAttribute('tag', enter)
     enter_key.setAttribute('id', 'enter-key')
     enter_key.append(enter)
     keyboard.append(enter_key)

    let backspace_key = document.createElement('button')
    backspace_key.classList.add('backspace')
    backspace_key.setAttribute('tag', backspace)
    backspace_key.setAttribute('id', 'back-key')
    backspace_key.append(backspace)
    keyboard.append(backspace_key)
}

displayKeyboards()

var allKeysKeyboard = document.querySelectorAll('.letter')

// Récupération via un forEach des valeurs des touches du clavier :
allKeysKeyboard.forEach((element) => {
    element.addEventListener("click", function() {
        userWord = mesControles.getLetterKey(element.innerHTML, userWord, numberLetters)
    });
});

console.log(userWord)


// listener clavier
document.getElementById('enter-key').addEventListener('click', function(){
    if (mesControles.checkWordExists()) {
        mesControles.checkUserWord()
    }
    else mesControles.errorUserInput("Le mot n'existe pas")
});

document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        mesControles.checkUserWord()
    }
});
document.getElementById('back-key').addEventListener('click', function(){
        eraseLastEntry()
});
document.addEventListener('keydown', function(event){
    if (event.key === 'Backspace') {
        eraseLastEntry()
    }
});

