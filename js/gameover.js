// Fonction pour créer une image avec animation de sprites
    function createSpriteImage() {
      // Crée une nouvelle div
      var newDiv = document.createElement('div');

      // Ajoute une classe à la div pour le style
      newDiv.className = 'random-image';

      // Crée une nouvelle image
      var newImg = document.createElement('img');

      // Définir la taille de l'image (ajustez selon vos besoins)
      newImg.style.width = '80px';
      newImg.style.height = '80px';

      // Ajouter la classe 'sprite' pour activer l'animation
      newImg.className = 'sprite';

      // Définir la source de l'image (première image)
      newImg.src = './assets/explos_1.svg';

      // Ajoute l'image à la div
      newDiv.appendChild(newImg);

      // Génère des positions x et y aléatoires sans superposition
      var randomX, randomY;
      do {
        randomX = Math.floor(Math.random() * window.innerWidth);
        randomY = Math.floor(Math.random() * window.innerHeight);
      } while (isOverlap(randomX, randomY));

      // Définir la position de la div en fonction des positions aléatoires
      newDiv.style.left = randomX + 'px';
      newDiv.style.top = randomY + 'px';

      // Ajoute la div au corps du document
      document.body.appendChild(newDiv);

      // Active l'animation de sprites
      animateSprite(newImg);
    }

    // Fonction pour activer l'animation de sprites
    function animateSprite(imgElement) {
      var currentFrame = 1;

      // Définir l'intervalle pour changer les images
      var spriteInterval = setInterval(function () {
        currentFrame++;
        if (currentFrame > 26) {
          // Réinitialiser à la première image après la dernière image
          currentFrame = 1;
        }

        // Mettre à jour la source de l'image pour afficher la prochaine image
        imgElement.src = './assets/explos_' + currentFrame + '.svg';
      }, 100); // Ajustez la vitesse d'animation selon vos besoins
    }

    function isOverlap(x, y) {
      // Vérifie s'il y a une superposition avec une autre image
      var elements = document.getElementsByClassName('random-image');
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var rect = element.getBoundingClientRect();
        if (
          x < rect.right &&
          x + 50 > rect.left &&
          y < rect.bottom &&
          y + 50 > rect.top
        ) {
          // Il y a une superposition
          return true;
        }
      }
      return false;
    }

    // Appeler la fonction pour répéter la création d'images avec sprites
    repeatSpriteCreation();

    // Fonction pour répéter la création d'images avec sprites
    function repeatSpriteCreation() {
      // Crée une image avec sprite à chaque intervalle de 5 secondes
      setInterval(function () {
        createSpriteImage();
      }, 300); // Intervalle de 5 secondes
    }
