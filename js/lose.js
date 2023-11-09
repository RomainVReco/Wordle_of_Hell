function verifierConditionsLose (nbEssais, timer) {
    
    if (timer === 0) {
      var divPerduTemps = document.createElement("div");
      divPerduTemps.textContent = "Vous avez perdu car le temps est écoulé.";
      document.body.appendChild(divPerduTemps);
    }
  
    if (nbEssais === 6) {
      var divPerduEssais = document.createElement("div");
      divPerduEssais.textContent = "Vous avez perdu car vous avez épuisé les 6 tentatives.";
      document.body.appendChild(divPerduEssais);
    }
}