window.onload = () => {
    const modale = document.querySelector("#modale");
    const close = document.querySelector(".close");
    const links = document.querySelectorAll(".galerie a");
    
    // On ajoute l'écouteur click sur les liens
    for(let link of links){
        link.addEventListener("click", function(e){
            // On désactive le comportement des liens
            e.preventDefault();

            // On ajoute l'image du lien cliqué dans la modale
            const image = modale.querySelector(".modal-content img");
            image.src = this.href;

            // On affiche la modale
            modale.classList.add("show");
        });
    }
    
    // On active le bouton close
    close.addEventListener("click", function(){
        modale.classList.remove("show");
    });

    // On ferme au clic sur la modale
    modale.addEventListener("click", function(){
        modale.classList.remove("show");
    });
}