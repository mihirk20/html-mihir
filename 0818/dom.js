// const h1=document.getElementsByTagName("h1")
// console.log(h1);


"use strict"
const randomNumber1=Math.trunc(Math.random() * 6 + 1)
const randomNumber2=Math.trunc(Math.random() * 6 + 1)
console.log(randomNumber1,randomNumber2);

const image1="../0724/Images/d"+randomNumber1+".jpg";
const image2="../0724/Images/d"+randomNumber2+".jpg";


document.querySelector("#die1").setAttribute("src",image1)
document.querySelector("#die2").setAttribute("src",image2)

if(randomNumber1>randomNumber2){
    document.querySelector("h3").textContent="P1 Wins"
}
if (randomNumber1<randomNumber2 ){

    document.querySelector("h3").textContent="P2 Wins"
}
if(randomNumber1==randomNumber2){
    document.querySelector("h3").textContent="Draw"
}