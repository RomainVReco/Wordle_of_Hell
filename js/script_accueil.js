// Fonction pour générer une lettre aléatoire
function randomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
  
  // Fonction pour créer et afficher une lettre tombante
  function createFallingLetter() {
    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.style.left = `${Math.random() * window.innerWidth}px`; // Position horizontale aléatoire
    letter.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durée de l'animation aléatoire
    letter.innerHTML = randomLetter(); // Lettre aléatoire
    document.getElementById('pluieDeLettres').appendChild(letter);
  
    // Supprimer la lettre une fois qu'elle a atteint le bas
    letter.addEventListener('animationend', () => {
      letter.remove();
    });
}
  
// Création continue de lettres tombantes
setInterval(createFallingLetter, 300); // Crée une nouvelle lettre toutes les 300 millisecondes
  