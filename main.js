let menu = document.getElementById("menu");
let mainbox = document.getElementById("mainbox");
let body1 = document.getElementsByTagName("body");
let bg = document.getElementById("bg");
let n1 = document.getElementById("home");
let khung1 = document.getElementById("khungCoTyPhu");
let khung2 = document.getElementById("khungCaNgua");
let sangCaNgua = document.getElementById("sangCaNgua");
let sangCotyphu = document.getElementById("sangCotyphu");



sangCaNgua.addEventListener("click",() => {
    // window.location.replace("./caNgua/caNgua.html");
    window.location.replace("./loadingCaNgua/newload.html");
})
sangCotyphu.addEventListener("click", () =>{
    window.location.replace("./loadingMonopoly/newload.html");
})



function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function openFunction(){
    menu.style.width="300px";
    mainbox.style.marginLeft="300px";
}

function closeFunction(){
    menu.style.width="0px";
    mainbox.style.marginLeft="0px";
    mainbox.innerHTML="&#9776;";
}


const home = document.getElementById("home");
const typhu = document.getElementById("typhu");
const cangua = document.getElementById("cangua");

home.onclick = function home() {
    menu.style.width="0px";
    mainbox.style.marginLeft="0px";
    khung1.style.transition = "all 1s";
    khung1.style.opacity = "0";
    khung2.style.transition = "all 1s";
    khung2.style.opacity = "0";
    bg.style.opacity = "1";
    mainbox.style.color = "white";
    document.body.style.transition = "all 1s";
    document.body.style.background = "rgb(48, 109, 216)";
    khung1.style.display = "none";
    khung2.style.display = "none";
}

typhu.onclick = function typhu() {

    menu.style.width="0px";
    mainbox.style.marginLeft="0px";
    mainbox.innerHTML="&#9776;";
    bg.style.opacity = "0";
    khung1.style.opacity = "1";
    khung1.style.transition = "all 2s";
    khung2.style.opacity = "0";
    mainbox.style.color = "rgb(255, 94, 0)";
    mainbox.style.color = "black";
    document.body.style.transition = "all 1s";
    document.body.style.background = " rgb(255, 94, 0)";
    khung1.style.display = "flex";
    khung2.style.display = "none";
}

cangua.onclick = function cangua() {
    menu.style.width="0px";
    mainbox.style.marginLeft="0px";
    mainbox.style.color = "#26de81";
    mainbox.style.color = "black";
    mainbox.innerHTML="&#9776;";
    bg.style.opacity = "0";
    khung1.style.opacity = "0";
    khung2.style.opacity = "1";
    khung2.style.transition = "all 2s";
    document.body.style.background = "chartreuse";
    document.body.style.transition = "all 1s";
    khung1.style.display = "none";
    khung2.style.display = "flex";

}



