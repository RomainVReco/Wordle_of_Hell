const nombresEssais = 6;
const nombresLettres = 5;
let numberOfTry = 0;

document.getElementById('nombreEssaisAutorises').textContent = nombresEssais;

function confirmerSaisieMot () {
    if(lettre < 6) {
        alert("Pas assez de lettres");
    } else {
        verifierMot ();
        ligne += 1;
        lettre = 1;
        numberOfTry += 1;

        // Mettre à jour l'affichage :
        document.getElementById('nombresEssais').textContent = numberOfTry;
    }
}