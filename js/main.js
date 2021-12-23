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

const imageCarousel = {
    
    image : '<img src="../img/image01.jpg" alt="street_fighter"><img src="../img/image02.png" alt="street_fighter"><img src="../img/image03.jpg" alt="street_fighter">',
    boutLeft : '<p><</p>',
    boutRight : '<p>></p>'
}

function generatCarousel(){

    let boxCarousel = document.createElement("section")
    let boxImage = document.createElement("figure");
    boxImage.innerHTML = imageCarousel.image;
    let boutonLeft = document.createElement("button");
    boutonLeft.innerHTML = imageCarousel.boutLeft;
    let boutonRight = document.createElement("button");
    boutonRight.innerHTML = imageCarousel.boutRight;


    document.body.children[1].appendChild(boxCarousel);
    boxCarousel.appendChild(boxImage);
    boxCarousel.appendChild(boutonLeft);
    boxCarousel.appendChild(boutonRight);

}
generatCarousel();

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
