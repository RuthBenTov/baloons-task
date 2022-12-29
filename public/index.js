"use strict";
console.log("js connected");
//----------------------------------------------variables------------------------------------------------------------------------
let balloon = document.querySelector("#balloon");
let goldenBalloon = document.querySelector("#goldenBalloon");
var yPos = 101;
let xPosition = Math.round(Math.random() * 80);
let score = document.querySelector(".score");
let startBtn = document.querySelector(".startBtn");
let ctrScore = 0;
let life = 3;
let lifeLevel = document.querySelector(".lifeLevel");
let audioBack = document.querySelector(".audioBack");
let popSound = document.querySelector(".popSound");
let errorSound = document.querySelector(".errorSound");
let hundredSound = document.querySelector(".hundredSound");
//----------------------------------------------events-----------------------------------------------------------------------------------------------------------
startBtn.addEventListener("click", onStart);
balloon.addEventListener("click", onClick);
goldenBalloon.addEventListener("click", goldenClicked);
//----------------------------------------------function----------------------------------------------------------------------------------------------------------
function onStart() {
    audioBack.play();
    startBtn.style.display = "none";
    myMove();
}
let id;
function myMove() {
    xPosition = Math.round(Math.random() * 80);
    balloon.style.left = `${xPosition}%`;
    yPos = 101; //ותוודאי שהשורות האלה קיימות לך טוב
    balloon.style.top = `${yPos}vh`; //וגם זו 
    id = null;
    clearInterval(id);
    id = setInterval(frame, 180);
    function frame() {
        if (yPos == -35) {
            clearInterval(id);
            balloonOver();
        }
        else {
            yPos--;
            balloon.style.top = yPos + 'vh';
        }
    }
}
function balloonOver() {
    life--;
    lifeLevel.textContent = `${life}`;
    errorSound.play();
    if (life > 0)
        myMove();
    else {
        balloon.remove();
        audioBack.pause();
        if (confirm(`GAME-OVER\n you earn ${ctrScore} score`)) {
            location.reload();
        }
        startBtn.style.display = "block";
        life = 4;
        ctrScore = 0;
    }
}
function onClick() {
    myMove();
    ctrScore += 10;
    score.textContent = `score: ${ctrScore}`;
    popSound.play();
    if (ctrScore > 10 && ctrScore % 100 === 0) {
        hundredSound.play();
        goldenRiseUp();
    }
}
//----------------------------------------------golden functions--------------------------------------------------------------------------------------------
function goldenRiseUp() {
    xPosition = Math.round(Math.random() * 80);
    goldenBalloon.style.left = `${xPosition}%`;
    yPos = 101;
    goldenBalloon.style.top = `${yPos}vh`;
    id = null;
    clearInterval(id);
    id = setInterval(frame, 100);
    function frame() {
        if (yPos == -30) {
            clearInterval(id);
        }
        else {
            yPos--;
            goldenBalloon.style.top = yPos + 'vh';
        }
    }
}
function goldenClicked() {
    yPos = 101;
    goldenBalloon.style.top = `${yPos}vh`;
    ctrScore += 50;
    score.textContent = `score: ${ctrScore}`;
    hundredSound.play();
}
