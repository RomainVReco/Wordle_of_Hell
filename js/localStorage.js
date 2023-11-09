function ajouterAuLocalStorage(cle, valeur) {
    localStorage.setItem(cle, valeur);
}

function recupererDuLocalStorage(cle) {
    let maValeur = localStorage.getItem(cle);
    return maValeur;
}

  