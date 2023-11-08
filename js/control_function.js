// import * as maGrille from './grilleJeu.js'

export function getLetterKey(letter, userWord, numberLetters) {
    if (userWord.length == numberLetters) {
        return userWord
    }
    // A décommenter quand tout sera branché
    // let tab_mot = maGrille.remplirMot(letter, userWord, numberLetters)
    else {
        userWord.push(letter)
    }
    console.log(userWord, userWord.length)
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
    let numberLetters = userWord[0].length
    if (words.includes(concatUserWord)) {
        return true
    }
    else{
        errorUserInput("Le mot n'existe pas")
        return false
    }
}
 /*
 xcvxwc
 */
// Vérifie si la saisie du contient des lettres du mot mystère et renvoie une Map
export function checkUserWord(userWord, motMystere){
    let concatUserWord = concatUserInput(userWord)
    let breakMotMystere = ''
    const userWordChecked = new Map()

    if (concatUserWord === motMystere) {
        victory()
    }
    else {
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
    }
    return userWordChecked;
}
// export function checkVictory(userWordChecked, numberLetters){
//     let correctLetters = 0
//     for (const x of userWordChecked.values()){
//         if (x[0] == 1){
//             correctLetters += 1
//         }
//     }
//     if (correctLetters == numberLetters.length){
//         return true
//     }
//     else false
// }

export function errorUserInput(string){
    alert(string)
}


