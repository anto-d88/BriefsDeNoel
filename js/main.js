//HEADER************************************************************
{
const naveBar = {

    bouton01: "Carousel",
    bouton02: "Liste",
    bouton03: "Keeper",
    bouton04: "Monster",

}


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

}
//FOOTER***********************************************************
{
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

}
//CAROUSEL***************************************************************
{
const imageCarousel = {

    image01: '<img class="active" src="img/image01.jpg" alt="street_fighter"><img src="img/image02.png" alt="street_fighter"><img src="img/image03.jpg" alt="street_fighter">',
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

}
//LISTE DE COURSE***************************************************

{
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
}
//KEEPER**********************************************************
{
function generatKeeper(){
    
let keeper = document.createElement("section");
keeper.setAttribute("class", "ke");
let titleKeeper = document.createElement("h1");
titleKeeper.innerHTML = "Score Keeper";
let scoreJ1toJ2 = document.createElement("h3");
scoreJ1toJ2.innerHTML = "Score:";
let pTo = document.createElement("span");
pTo.setAttribute("class", "to");
pTo.innerHTML = " to ";
let scoreJ1 = document.createElement("span");
scoreJ1.setAttribute("id", "scoreJ1");
scoreJ1.innerHTML = 0;
let scoreJ2 = document.createElement("span");
scoreJ2.setAttribute("id", "scoreJ2");
scoreJ2.innerHTML = 0;
let boxbutkeeper = document.createElement("section");
boxbutkeeper.setAttribute("class", "butKeeper");
let boutJ1 = document.createElement("button");
boutJ1.setAttribute("id", "btJ1");
boutJ1.innerHTML = "JOUEUR 1";
let boutJ2 = document.createElement("button");
boutJ2.setAttribute("id", "btJ2");
boutJ2.innerHTML = "JOUEUR 2";
let resetKeeper = document.createElement("button");
resetKeeper.setAttribute("id", "reset");
resetKeeper.innerHTML = "Reset";
let scoreChoi = document.createElement("input");
scoreChoi.setAttribute("type", "number");
scoreChoi.setAttribute("id", "limit");
scoreChoi.setAttribute("value", 0);
let vinqueur = document.createElement("h3");
vinqueur.innerHTML = "The winner is:";
let afficheV = document.createElement("span");
afficheV.setAttribute("id", "winner");
afficheV.innerHTML = 0;





document.body.children[1].appendChild(keeper);
keeper.appendChild(titleKeeper);
keeper.appendChild(scoreChoi);
keeper.appendChild(scoreJ1toJ2);
scoreJ1toJ2.appendChild(scoreJ1);
scoreJ1toJ2.appendChild(pTo);
scoreJ1toJ2.appendChild(scoreJ2);
keeper.appendChild(boxbutkeeper);
boxbutkeeper.appendChild(boutJ1);
boxbutkeeper.appendChild(resetKeeper);
boxbutkeeper.appendChild(boutJ2);
keeper.appendChild(vinqueur);
vinqueur.appendChild(afficheV);
}
generatKeeper();


// FONCTION SCORE KEEPER**************************************


let but1 = document.querySelector("#btJ1");
let pl1 = document.querySelector("#scoreJ1");
let scoreValueJ1 = 0;

let but2 = document.querySelector("#btJ2");
let pl2 = document.querySelector("#scoreJ2");
let scoreValueJ2 = 0;

let reset = document.querySelector("#reset");

let inputChange = document.querySelector("#limit");

let winner = document.querySelector("#winner");

but1.addEventListener("click", function() {
    let limit = document.querySelector("#limit").value;
    scoreValueJ1++;
    pl1.innerHTML = scoreValueJ1;
    if( scoreValueJ1 == limit || ( scoreValueJ1>scoreValueJ2 && scoreValueJ1>limit)){
        pl1.classList.add("green");
        but1.setAttribute("disabled", "true");
        but2.setAttribute("disabled", "true");
        printWin();
    }
});

but2.addEventListener("click", function(){
    let limit = document.querySelector("#limit").value;
    scoreValueJ2++;
    pl2.innerHTML = scoreValueJ2;
    if( scoreValueJ2 == limit || ( scoreValueJ2 > scoreValueJ1 && scoreValueJ2 > limit)){
        pl2.classList.add("green");
        but1.setAttribute("disabled", "true");
        but2.setAttribute("disabled", "true");
        printWin();

    }
});

reset.addEventListener("click", function() {
    but1.removeAttribute("disabled");
    but2.removeAttribute("disabled");

    pl1.classList.remove("green");
    pl2.classList.remove("green");

    scoreValueJ1 = 0;
    scoreValueJ2 = 0;

    pl1.innerHTML = scoreValueJ1;
    pl2.innerHTML = scoreValueJ2;

    document.querySelector("#limit").value = 0;
    
    winner.innerHTML = "";
});

inputChange.addEventListener("change", function () {
    
    pl1.innerHTML = 0;
    pl2.innerHTML = 0;
    
});

function printWin() {
    
    if( scoreValueJ1 > scoreValueJ2){
        winner.innerHTML = "Player 1";
        winner.classList.add("green");
    }
    else{
        winner.innerHTML = "Player 2";
        winner.classList.add("green");
    }
}
}

//MONSTER************************************************************

{
let monster = document.createElement("section");
monster.setAttribute("class", "mo");
let sectTitle = document.createElement("section");
sectTitle.setAttribute("class", "sectTitle");
let you = document.createElement("h2");
you.innerHTML = "You!";
let monstre = document.createElement("h2");
monstre.innerHTML = "Monster!"
let barreVie = document.createElement("section");
barreVie.setAttribute("class", "sctbar")
let vieY = document.createElement("section");
vieY.setAttribute("id", "vieY")
let barY = document.createElement("article");
barY.setAttribute("id", "barY");
barY.innerHTML = "100%";
let vieM = document.createElement("section");
vieM.setAttribute("id", "vieM")
let barM = document.createElement("article");
barM.setAttribute("id", "barM");
barM.innerHTML = "100%";
let sectBut = document.createElement("section");
sectBut.setAttribute("class", "sctBut");
let Dem = document.createElement("button");
Dem.setAttribute("id", "dem");
Dem.innerHTML = "DEMARRER";
let butJeu = document.createElement("section");
butJeu.setAttribute("class", "butJeu");
let attNorm = document.createElement("button");
attNorm.setAttribute("id", "attNorm");
attNorm.innerHTML = "ATTACK";
let attSpec = document.createElement("button");
attSpec.setAttribute("id", "attSpec");
attSpec.innerHTML = "SPECIAL ATTACK";
let soin = document.createElement("button");
soin.setAttribute("id", "soin");
soin.innerHTML = "HEAL";
let aban = document.createElement("button");
aban.setAttribute("id", "aban");
aban.innerHTML = "GIVE UP";

document.body.children[1].appendChild(monster);
monster.appendChild(sectTitle);
sectTitle.appendChild(you);
sectTitle.appendChild(monstre);
monster.appendChild(barreVie);
barreVie.appendChild(vieY);
barreVie.appendChild(vieM);
vieY.appendChild(barY);
vieM.appendChild(barM);
monster.appendChild(sectBut);
sectBut.appendChild(Dem);
sectBut.appendChild(butJeu);
butJeu.appendChild(attNorm);
butJeu.appendChild(attSpec);
butJeu.appendChild(soin);
butJeu.appendChild(aban);


//FONCTION MONSTER***********((((((??????EN COUR??????)))))*******************************************

Dem.addEventListener("click", function(){
    document.querySelector("#dem").style.display = "none";
    document.querySelector(".butJeu").style.display = "flex";
    soinsY();
    soinsM();
})

aban.addEventListener("click", function(){
    document.querySelector(".butJeu").style.display = "none";
    document.querySelector("#dem").style.display = "flex";
})

attNorm.addEventListener("click", function () {
    
    attYou();
})
attSpec.addEventListener("click", function () {
    
    attYou();
})
soin.addEventListener("click", function () {
    
    soinsY();
    soinsM();
})

function attRandom(min, max) {
    return Math.max(Math.floor(Math.random() * max) + 1, min)
}
function soinsY() {
    let j = 0;
  if (j == 0) {
    j = 1;
    let elem = document.querySelector("#barY");
    let width = "" ;
    let id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
function soinsM() {
    let j = 0;
  if (j == 0) {
    j = 1;
    let elem = document.querySelector("#barM");
    let width = "" ;
    let id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
function attYou() {
    let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.querySelector("#barM");
    let width = 100 ;
    let id = setInterval(frame, 1);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        i = 0;
        attMonster();
      } else {
        width--
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
function attMonster() {
    let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.querySelector("#barY");
    let width = 100 ;
    let id = setInterval(frame, 1);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        i = 0;
      } else {
        width--;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
}
// APPEL DES DIFFERENTE SECTIONS*******************************************************

{
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
}
