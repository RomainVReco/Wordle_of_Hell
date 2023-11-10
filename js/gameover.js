const totalSprites = 60; // Nombre de sprites à afficher simultanément
const totalFrames = 26; // Nombre total de frames dans chaque sprite

function checkCollision(sprite, sprites) {
    const spriteRect = sprite.getBoundingClientRect();
    for (let i = 0; i < sprites.length; i++) {
        const otherSprite = sprites[i];
        if (otherSprite !== sprite) {
            const otherRect = otherSprite.getBoundingClientRect();
            if (
                spriteRect.left < otherRect.right &&
                spriteRect.right > otherRect.left &&
                spriteRect.top < otherRect.bottom &&
                spriteRect.bottom > otherRect.top
            ) {
                return true; // Il y a collision
            }
        }
    }
    return false; // Pas de collision détectée
}

function animateSprite(sprite, currentFrame) {
    const frameWidth = 100; // Largeur d'une image dans le sprite en pixels
    sprite.style.backgroundPosition = `-${currentFrame * frameWidth}px 0`;
    currentFrame = (currentFrame + 1) % totalFrames; // Permet de revenir à 0 après la dernière frame
}

export function displaySprites(sprites) {
    if (sprites.length < totalSprites) {
        const sprite = document.createElement('div');
        sprite.classList.add('sprite');
        sprite.style.backgroundImage = `url('./assets/explos_${sprites.length % totalFrames + 1}.svg')`; // Charge les sprites de explos_1 à explos_26

        let randomX, randomY, collisionDetected;

        do {
            collisionDetected = false;
            randomX = Math.floor(Math.random() * (window.innerWidth - 100));
            randomY = Math.floor(Math.random() * (window.innerHeight - 100));

            sprite.style.left = `${randomX}px`;
            sprite.style.top = `${randomY}px`;

            collisionDetected = checkCollision(sprite, sprites);
        } while (collisionDetected);

        document.getElementById('spritesContainer').appendChild(sprite);
        sprite.style.opacity = 1; // Faire apparaître le sprite avec une transition
        sprites.push(sprite);
    }

    setTimeout(() => displaySprites(sprites), 100);
}

export function startAnimation() {
    const sprites = document.querySelectorAll('.sprite');

    sprites.forEach((sprite, index) => {
        setInterval(() => animateSprite(sprite, index), 100); // Change les sprites toutes les 1000ms
    });
}

export function addDivMotMystere(motMystere){
    let motMystereDisplay = document.getElementById("motMystereDisplay");
    motMystereDisplay.innerHTML = motMystere;
}
