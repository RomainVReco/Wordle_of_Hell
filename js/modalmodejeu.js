const boutonOuvrir2 = document.getElementById('ouvrirMode');
const modal2 = document.getElementById('maModal2');
const boutonFermer2 = document.querySelector('.fermer2');

boutonOuvrir2.addEventListener('click', function() {
    modal2.style.display = 'block';
});

boutonFermer2.addEventListener('click', function() {
    modal2.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        modal2.style.display = 'none';
    }
});