export function addDivMotMystere(motMystere) {
  console.log("Je suis dans la fonction addDivMotMystere")
  var motMystereDisplay = document.getElementById("motMystereDisplay");
  motMystereDisplay.innerHTML = motMystere;
  console.log(motMystereDisplay.innerHTML)
}

export function createSpriteImage() {
  const newDiv = document.createElement('div');
  newDiv.className = 'random-image';

  const newImg = document.createElement('img');
  newImg.style.width = '80px';
  newImg.style.height = '80px';
  newImg.className = 'sprite';
  newImg.src = './assets/explos_1.svg';

  newDiv.appendChild(newImg);

  let randomX, randomY;
  do {
    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * window.innerHeight);
  } while (isOverlap(randomX, randomY));

  newDiv.style.left = randomX + 'px';
  newDiv.style.top = randomY + 'px';

  const spritesContainer = document.getElementById('spritesContainer');
  spritesContainer.appendChild(newDiv);

  animateSprite(newImg);
}

function animateSprite(imgElement) {
  let currentFrame = 1;
  const spriteInterval = setInterval(function () {
    currentFrame = (currentFrame % 26) + 1;
    imgElement.src = `./assets/explos_${currentFrame}.svg`;
  }, 100);
}

function isOverlap(x, y) {
  const elements = document.getElementsByClassName('random-image');
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rect = element.getBoundingClientRect();
    if (
      x < rect.right &&
      x + 50 > rect.left &&
      y < rect.bottom &&
      y + 50 > rect.top
    ) {
      return true; // Il y a une superposition
    }
  }
  return false;
}

export function repeatSpriteCreation() {
  setInterval(createSpriteImage, 300); // Crée une image avec sprite à chaque intervalle de 300 millisecondes
}
