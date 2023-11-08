
let tempsRestant = 300;
const elementChrono = document.getElementById('chrono');

// Fonction pour mettre à jour et afficher le chrono
function actualiserChrono() {
    const minutes = Math.floor(tempsRestant / 60);
    let secondes = tempsRestant % 60;

    // Ajoute un zéro devant les secondes si elles sont inférieures à 10
    if (secondes < 10) {
        secondes = '0' + secondes;
    }
    // Affichage du chrono
    elementChrono.innerHTML = `<i class="fa-solid fa-clock"></i><br><br> ${minutes}:${secondes}`;

    // Décrémente le temps
    tempsRestant--;

    // Si le temps est écoulé
    if (tempsRestant < 0) {
        finJeu = true;
        gameOver = true;
        // alert('Perdu ! Le mot mystère était : ' + motMystere); pour contrôle
        clearInterval(chrono);
        elementChrono.innerHTML = "Temps écoulé ! Game Over";
        // Autres actions à effectuer une fois le temps écoulé
        // Par exemple : gameOver = true; ou exécuter une fonction gameOver()
    }
}
// Appel de la fonction toutes les 1 seconde pour mettre à jour le chrono
const chrono = setInterval(actualiserChrono, 1000);