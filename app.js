let gameseq=[];
let userseq = [];


let started = false;
let level = 0;


let btns = ["blue" , "red" , "orange" , "green"]; // classes name 

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function () {
    if(started == false) {
    console.log("game started !");
        started = true;


        levelup(); //function call
    }
});

function btnflash(btn) {
    btn.classList.add("btnflash");
    setTimeout(function () {
        btn.classList.remove("btnflash");
    } , 200);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    } , 200);
}

function win() {
    let body = document.querySelector("body");
    body.classList.add("win");
    setTimeout(function() {
        body.classList.remove("win")
    } , 500)
}
function loss() {
    let body = document.querySelector("body");
    body.classList.add("loss");
    setTimeout(function() {
        body.classList.remove("loss")
    } , 500)
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randomcolor  = btns[randIdx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randIdx)
    // console.log(randomcolor)
    // console.log(randombtn)
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnflash(randombtn); // function call
}

function checkans(index) {
    console.log("current level" , level);

    if(userseq[index] === gameseq[index]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelup , 1000);
            win();
        }
        
    } else {
        h2.innerHTML = `Game Over! your <b> SCORE </b> is ${level*5}. <br> highest score till now is ${level*5} <br> press any key to start again`;
        resetgame();
        loss();
    } 
    
}

// function hscore() {
//     let score = (level*5);
//     let scores =[];
//     scores.push(score);
//             return Math.max(scores);
// }


function btnpress() {
    // console.log(this);
    let btn = this; // this = which butten is pressed
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns) {
    btn.addEventListener("click" , btnpress);
   
}

function resetgame() {
    level = 0;
    gameseq = [];
    userseq =[];
    started = false;
}
