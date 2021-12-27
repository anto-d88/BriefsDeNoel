const naveBar = {

    bouton01: "Carousel",
    bouton02: "Liste",
    bouton03: "Keeper",
    bouton04: "Monster",

}

//HEADER************************************************************
function generatHeader() {

    let boutonCarousel = document.createElement("button");
    boutonCarousel.setAttribute("class", "sectcar")
    boutonCarousel.innerHTML = naveBar.bouton01

    let boutonList = document.createElement("button");
    boutonList.setAttribute("class","list")
    boutonList.innerHTML = naveBar.bouton02

    let boutonKeeper = document.createElement("button");
    boutonKeeper.setAttribute("class", "keep");
    boutonKeeper.innerHTML = naveBar.bouton03

    let boutonMonster = document.createElement("button");
    boutonMonster.setAttribute("class", "monst");
    boutonMonster.innerHTML = naveBar.bouton04



    document.body.firstElementChild.appendChild(boutonCarousel);
    document.body.firstElementChild.appendChild(boutonList);
    document.body.firstElementChild.appendChild(boutonKeeper);
    document.body.firstElementChild.appendChild(boutonMonster);

}
generatHeader();


//FOOTER***********************************************************
const info = {
    liste01: "<li class='info'>Infos contact:</li><li>Robles Soler</li><li>Antonio</li><li>Simplon haut de france</li>",
    liste02: "<li>07.82.76.03.31</li><li>59200</li><li>Tourcoing</li><li>antonio_robles_88@outlook.com</li>",
}
function generatFooter() {

    let infoFooterLeft = document.createElement("ul");
    infoFooterLeft.innerHTML = info.liste01;

    let infoFooterRight = document.createElement("ul");
    infoFooterRight.innerHTML = info.liste02;

    document.body.children[2].appendChild(infoFooterLeft);
    document.body.children[2].appendChild(infoFooterRight);

}
generatFooter();
//SECTION CAROUSEL + LISTE + KEEP + MONSTRE

// function generatSection(){


// }

//CAROUSEL***************************************************************
const imageCarousel = {

    image01: '<img class="active" src="../img/image01.jpg" alt="street_fighter"><img src="../img/image02.png" alt="street_fighter"><img src="../img/image03.jpg" alt="street_fighter">',
    boutLeft: '<p class="left"><</p>',
    boutRight: '<p class="right">></p>'
}

function generatCarousel() {

    let mainCarousel = document.createElement("section");
    mainCarousel.setAttribute("class", "car");
    let fondCarousel = document.createElement("section");
    fondCarousel.setAttribute("class", "fond");
    let Box = document.createElement("figure");
    Box.setAttribute("class", "carousel");
    Box.innerHTML = imageCarousel.image01;
    let boxButleft = document.createElement("section");
    boxButleft.setAttribute("class", "butleft")
    boxButleft.innerHTML = imageCarousel.boutLeft;
    let boxButright = document.createElement("section");
    boxButright.setAttribute("class", "butleft")
    boxButright.innerHTML = imageCarousel.boutRight;
    let boxbut = document.createElement("section");
    boxbut.setAttribute("class", "boxButton")

    document.body.children[1].appendChild(mainCarousel);
    mainCarousel.appendChild(fondCarousel);
    fondCarousel.appendChild(boxbut);
    boxbut.appendChild(boxButleft);
    boxbut.appendChild(boxButright);
    fondCarousel.appendChild(Box);

}
generatCarousel();

//CLICK DES  BOUTONS DU CAROUSEL**********************************************

const item = document.querySelectorAll("img");
const nomSlide = item.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");

let count = 0;

function slideSuivante() {
    item[count].classList.remove("active");

    if (count < nomSlide - 1) {
        count++;
    }
    else {
        count = 0;
    }
    item[count].classList.add("active")
}

suivant.addEventListener('click', slideSuivante);

function slidePrecedente() {
    item[count].classList.remove("active");

    if (count > 0) {
        count--;
    }
    else {
        count = nomSlide - 1;
    }
    item[count].classList.add("active")
}

precedent.addEventListener('click', slidePrecedente);

//LISTE DE COURSE***************************************************

let listeDeCourse = document.createElement("section");
listeDeCourse.setAttribute("class", "li");

document.body.children[1].appendChild(listeDeCourse);

//KEEPER**********************************************************

let keeper = document.createElement("section");
keeper.setAttribute("class", "ke");

document.body.children[1].appendChild(keeper);

//MONSTER************************************************************

let monster = document.createElement("section");
monster.setAttribute("class", "mo");

document.body.children[1].appendChild(monster);


// APPEL DES DIFFERENTE SECTIONS*******************************************************

const sectionCarousel = document.querySelector(".sectcar");
const sectionList = document.querySelector(".list");
const sectionKeep = document.querySelector(".keep");
const sectionMonster = document.querySelector(".monst");

sectionCarousel.onclick = function () {
    let sectCar = document.querySelector(".car");
    document.querySelector(".li").style.display = "none"
    document.querySelector(".ke").style.display = "none"
    document.querySelector(".mo").style.display = "none"
    sectCar.style.display = "flex";
}
sectionList.onclick = function () {
    let sectLi = document.querySelector(".li");
    document.querySelector(".car").style.display = "none";
    document.querySelector(".ke").style.display = "none";
    document.querySelector(".mo").style.display = "none";
    sectLi.style.display = "block";
}
sectionKeep.onclick = function () {
    let sectKeep = document.querySelector(".ke");
    document.querySelector(".car").style.display = "none";
    document.querySelector(".li").style.display = "none";
    document.querySelector(".mo").style.display = "none";
    sectKeep.style.display = "block";
}
sectionMonster.onclick = function () {
    let sectMonster = document.querySelector(".mo");
    document.querySelector(".car").style.display = "none";
    document.querySelector(".li").style.display = "none";
    document.querySelector(".ke").style.display = "none";
    sectMonster.style.display = "block";
}