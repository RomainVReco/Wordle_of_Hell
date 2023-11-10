// Fonction pour créer et ajouter les boutons
function ajouterBoutons() {
    
    var boutonsDiv = document.createElement("div")
    boutonsDiv.setAttribute("id","boutonsDiv")
    const boutonReplay = document.createElement('button');
    const boutonRetour = document.createElement('button');

    
    boutonReplay.textContent = 'Replay';
    boutonRetour.textContent = 'Retour Accueil';

    
    boutonReplay.classList.add('bouton', 'replay');
    boutonRetour.classList.add('bouton', 'retour');

    
    boutonReplay.addEventListener('click', function() {
      window.location.href = './index.html'; 
    });

    boutonRetour.addEventListener('click', function() {
      window.location.href = './accueil.html'; 
    });

    boutonsDiv.appendChild(boutonReplay);
    boutonsDiv.appendChild(boutonRetour);
    return boutonsDiv
}

  