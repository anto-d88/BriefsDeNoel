const naveBar = {

    bouton01 : "Carousel",
    bouton02 : "Liste",
    bouton03 : "Keeper",
    bouton04 : "Monster",

}

//HEADER
function generatHeader(){

    let boutonCarousel = document.createElement("button");
    boutonCarousel.innerHTML = naveBar.bouton01

    let boutonList = document.createElement("button");
    boutonList.innerHTML = naveBar.bouton02

    let boutonKeeper = document.createElement("button");
    boutonKeeper.innerHTML = naveBar.bouton03

    let boutonMonster = document.createElement("button");
    boutonMonster.innerHTML = naveBar.bouton04


    
    document.body.firstElementChild.appendChild(boutonCarousel);
    document.body.firstElementChild.appendChild(boutonList);
    document.body.firstElementChild.appendChild(boutonKeeper);
    document.body.firstElementChild.appendChild(boutonMonster);

}
generatHeader();

//
//FOOTER
const info = {
    liste01 : "<li>info</li><li>info</li><li>info</li><li>info</li>",
    liste02 : "<li>info</li><li>info</li><li>info</li><li>info</li>",
}
function generatFooter(){

    let infoFooterLeft = document.createElement("ul");
    infoFooterLeft.innerHTML = info.liste01;

    let infoFooterRight = document.createElement("ul");
    infoFooterRight.innerHTML = info.liste02;

    document.body.children[2].appendChild(infoFooterLeft);
    document.body.children[2].appendChild(infoFooterRight);

}
generatFooter();
