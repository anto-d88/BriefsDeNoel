
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
    boutonList.setAttribute("class", "list")
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


function generatLsteDeCours() {
    let listeDeCourse = document.createElement("section");
    listeDeCourse.setAttribute("class", "li");
    listeDeCourse.setAttribute("id", "mySect");
    let boxTitleLi = document.createElement("section");
    boxTitleLi.setAttribute("class", "entete");
    let titleList = document.createElement("h2");
    titleList.innerHTML = "Liste de Course";
    let espaceText = document.createElement("input");
    espaceText.setAttribute("type", "text");
    espaceText.setAttribute("id", "myText");
    espaceText.setAttribute("placeholder", "Title...");
    let boutAddList = document.createElement("span");
    boutAddList.setAttribute("onclick", "newElemList()");
    boutAddList.setAttribute("class", "addBtn");
    boutAddList.innerHTML = "Add"

    let listeUl = document.createElement("ul");
    listeUl.setAttribute("id", "myList");
    listeUl.setAttribute("class", "uliste");


    document.body.children[1].appendChild(listeDeCourse);
    listeDeCourse.appendChild(boxTitleLi);
    boxTitleLi.appendChild(titleList);
    boxTitleLi.appendChild(espaceText);
    boxTitleLi.appendChild(boutAddList);
    listeDeCourse.appendChild(listeUl);
}
generatLsteDeCours();

//NOUVEL ELEMENT DE LIST***************
function newElemList() {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "nli");
    let inputText = document.getElementById("myText").value;
    let textLi = document.createTextNode(inputText);
    newLi.appendChild(textLi);
    if (inputText === '') {
        alert("Ecrivez dans le champs Title...");
    }
    else {
        document.getElementById("myList").appendChild(newLi);
    }
    document.getElementById("myText").value = "";

    // BOUTON DE SUPPRESSION************


    let nodeList = document.getElementsByClassName("nli");
    for (i = 0; i < nodeList.length; i++) {
        let span = document.createElement("SPAN");
        let croi = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(croi);
        nodeList[i].appendChild(span);
    }

    // //CLICK SUPRESSION DE LI*************
    let close = document.getElementsByClassName("close");
    for (let j = 0; j < close.length; j++) {
        close[j].onclick = function () {
            let parents = this.parentElement;
            parents.style.display = "none";
        }
    }
    //SYMBOLE V POUR ELEMENT COCHER**************
    let cocher = document.querySelector(".uliste");
    cocher.addEventListener("click", function (petitV) {
        if (petitV.target.tagName === "LI") {
            petitV.target.classList.toggle("checked");
        }
    }, false);

}

//KEEPER**********************************************************

function generatKeeper(){
    
let keeper = document.createElement("section");
keeper.setAttribute("class", "ke");
let titleKeeper = document.createElement("h2");
titleKeeper.setAttribute("class", "titleKeeper");
titleKeeper.innerHTML = "Score Keeper";
//AJOUTER UN INPUT DE TYPE NUMBER ICI AVEC UN ID
let scoreJ1 = document.createElement("h3");
scoreJ1.setAttribute("id", "scoreJ1");
scoreJ1.innerHTML = 0;
let scoreJ2 = document.createElement("h3");
scoreJ2.setAttribute("id", "scoreJ2");
scoreJ2.innerHTML = 0;
let boutJ1 = document.createElement("button");
boutJ1.setAttribute("onclick", "clickJ1()");
boutJ1.innerHTML = "JOUEUR 1";
let boutJ2 = document.createElement("button");
boutJ2.setAttribute("onclick", "clickJ2()");
boutJ2.innerHTML = "JOUEUR 2";
let resetKeeper = document.createElement("button");
resetKeeper.setAttribute("onclick", "clickRst()");
resetKeeper.innerHTML = "Reset";





document.body.children[1].appendChild(keeper);
keeper.appendChild(titleKeeper);
keeper.appendChild(boutJ1);
keeper.appendChild(scoreJ1);
keeper.appendChild(scoreJ2);
keeper.appendChild(boutJ2);
keeper.appendChild(resetKeeper);
}
generatKeeper();
// INCREMENTATION + RESET**************************************

let scoreValue = 0;

function clickJ1() {
    scoreValue = 0;
    keeperJ1(++scoreValue) 
}
function clickRst() {
    scoreValue = 0;
    keeperJ1(scoreValue);
    keeperJ2(scoreValue);
}
function keeperJ1(valeurJ1) {
    document.getElementById("scoreJ1").innerHTML = valeurJ1
}
function clickJ2() {
    scoreValue = 0;
    keeperJ2(++scoreValue) 
}

function keeperJ2(valeurJ2) {
    document.getElementById("scoreJ2").innerHTML = valeurJ2
}
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