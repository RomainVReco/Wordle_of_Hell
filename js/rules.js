const boutonOuvrir = document.getElementById('ouvrirRegles');
const modal = document.getElementById('maModal');
const boutonFermer = document.querySelector('.fermer');

boutonOuvrir.addEventListener('click', function() {
    modal.style.display = 'block';
});

boutonFermer.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});