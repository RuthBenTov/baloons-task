"use strict";
let ballon = document.querySelector(".ballon");
ballon.addEventListener("click", onClick);
let xPosition = Math.round(Math.random() * 80);
let score = document.querySelector(".score");
let ctrScore = 0;
let life = 3;
ballon.style.left = `${xPosition}%`;
// function onClick(){
//     ballon.style.animation = 'none';
//     ballon.offsetLeft;
//     ballon.style.animation = "ballonRiseUp 5s ease-in-out infinite ,ballonRotate 4s ease-in-out infinite";
//     xPosition = Math.round(Math.random()*80)
//     ballon.style.left = `${xPosition}%`
//     ctrScore+=10
//     score.textContent = `score: ${ctrScore}`
// }
let;
