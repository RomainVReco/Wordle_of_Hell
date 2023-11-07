const letters = [
    "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
    "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
    "W", "X", "C", "V", "B", "N"
]

const enter = "ENTER"
const backspace = "◄"

function displayLetters(){
    let new_key
    let keyboard = document.getElementById('keyboard')
    for (let i = 0; i < letters.length; i++) {
        new_key = document.createElement('div')
        new_key.classList.add('letter')
        new_key.setAttribute('id', letters[i])
        new_key.append(letters[i])
        keyboard.append(new_key)
    }
    let enter_key = document.createElement('div')
    enter_key.classList.add('enter')
    enter_key.setAttribute('id', enter)
    enter_key.append(enter)
    keyboard.append(enter_key)

    let backspace_key = document.createElement('div')
    backspace_key.classList.add('backspace')
    backspace_key.setAttribute('id', backspace)
    backspace_key.append(backspace)
    keyboard.append(backspace_key)
}

displayLetters()