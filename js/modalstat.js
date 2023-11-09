const boutonOuvrir3 = document.getElementById('ouvrirStat');
const modal3 = document.getElementById('maModal3');
const boutonFermer3 = document.querySelector('.fermer3');

boutonOuvrir3.addEventListener('click', function() {
    modal3.style.display = 'block';
});

boutonFermer3.addEventListener('click', function() {
    modal3.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal3) {
        modal3.style.display = 'none';
    }
});