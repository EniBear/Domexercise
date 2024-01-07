//*1*//
document.getElementById("container");
//*2*//
document.querySelector("#container")
//*3*//
document.querySelectorAll(".second")
//*4*//
document.querySelector("ol .third");
//*5*//
let cont = document.querySelector("#container");

cont.innerText = "Hello";
//*6*//
let foot = document.querySelector(".footer");
foot.className += "main";
//*7*//
let fooot = document.querySelector(".footer");
fooot.classList.remove("main");
//*8*//
let list = document.createElement("li");
//*9*//
newlist.innerText = "four"
//*10*//
let list = document.querySelector("ul");
list.appendChild(newLi);
//*11*//
let Ol = document.querySelectorAll("ol li");

for (let i = 0; i < Ol.length; i++) {
    Ol[i].style.backgroundColor = "green";
}
//*12*//
let foot = document.querySelector(".footer");
foot.remove();