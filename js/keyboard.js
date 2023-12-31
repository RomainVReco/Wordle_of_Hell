import {allWords} from './words.js'
import * as mesControles from './control_function.js'
import * as configWordle from './configWordle.js'

const letters = [
    "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
    "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
    "W", "X", "C", "V", "B", "N"
]
const words = allWords()
const enter = "ENTER"
const backspace = "◄"
var userWord = []
var numberLetters = configWordle.getNumberOfLetters()
const nombreEssais = configWordle.getNomnbreEssais()
var userTries = 0
const motMystere = configWordle.getMotMystere()
var finJeu = configWordle.getFinjeu()

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
    element.addEventListener('click', function() {
        userWord = mesControles.getLetterKey(element.innerHTML, userWord, numberLetters)
    })
})

function updateKeyboardColor(checkedMap){
    allKeysKeyboard.forEach((element) => {
        for (let value of checkedMap.values()){
            console.Log
            if (element.innerHTML == value[1]){
                switch (value[0]) {
                    case 0:
                        if (element.classList.contains("mot-gris")){
                            break
                        } else {
                            element.classList.add("mot-gris")
                            break
                        }
                    case 1:
                        if (element.classList.contains("mot-jaune")){
                            element.classList.remove("mot-jaune")
                            element.classList.add("mot-vert")
                            break
                        } 
                        else if (element.classList.contains("mot-gris")) {
                            element.classList.remove("mot-gris")
                            element.classList.add("mot-vert")
                            break
                        }
                        else {
                            element.classList.add("mot-vert")
                            break
                        }
                    case 2: 
                        element.classList.add("mot-jaune")
                        break
                    default:
                        console.log("Pas de couleur assigné à la lettre du clavier")
                }
            }
        }

    })
}

function allCheck(){
    if (mesControles.checkUserWordLength(userWord, numberLetters) && (mesControles.checkWordExists(userWord, words))) {
        var userTryChecked = mesControles.checkUserWord(userWord,motMystere)
    }
    if ((userTryChecked !=undefined) && (userTryChecked.size == numberLetters)) {
        updateKeyboardColor(userTryChecked)
        userTries += 1
        document.getElementById('nombresEssais').textContent = userTries;
        finJeu = mesControles.checkVictory(userWord, motMystere, userTries)||mesControles.checkNumberOfTries(nombreEssais, userTries) ? true : false
        configWordle.setFinJeu(finJeu)
        userWord = []
    }
}

// listener clavier
document.getElementById('enter-key').addEventListener('click', function(){
    allCheck()
});

// problème de fonctionnement avec la touche entrée ==> elle permet la saisie d'une lettre aussi 
document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        event.preventDefault()
        allCheck()
    }   
});
document.getElementById('back-key').addEventListener('click', function(){
    if (userWord.length != 0) {
        userWord = mesControles.eraseLastEntry(userWord)
    }
    else {
        return
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'Backspace') {
        if (userWord.length != 0) {
            userWord = mesControles.eraseLastEntry(userWord)
        }
        else {
            return
        }
    }
});

