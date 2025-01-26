const winCondition = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
];

let buttons = document.querySelectorAll("#button");
let newGameBtn = document.querySelector(".newGameBtn");
let restartGameBtn = document.querySelector(".restartGameBtn");
let resultBox = document.querySelector(".result");
let resultMsg = document.querySelector(".result-msg");

let circleIcon = true;

const drawGame = () => {
    resultMsg.innerText = "Draw! Play Again.";
    resultBox.classList.remove("hidden");
}

restartGameBtn.addEventListener("click", () => {
    restartGame();
});

const restartGame = () => {
    location.reload();
}

newGameBtn.addEventListener("click" , () => {
    newGame();
});
const newGame = () => {
    location.reload();
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log("Button was clicked!");
        if(circleIcon) {
        button.innerHTML = '<i class="fa-solid fa-circle-notch fa-rotate-90 text-[2rem] text-white md:text-[4rem] xl:text-[6rem]"></i>';
        circleIcon = false;
        } else {
            button.innerHTML = '<i class="fa-solid fa-play fa-rotate-270 text-[2rem] text-white md:text-[4rem] xl:text-[6rem]"></i>';
            circleIcon = true;
        }
        button.disabled = true;
        winMatch();
    });
});

const winMatch = () => {
    winCondition.forEach((cond) => {
        // console.log(cond[0],cond[1],cond[2]);
        // console.log(buttons[cond[0]].innerHTML,buttons[cond[1]].innerHTML,buttons[cond[2]].innerHTML);
        let pos1 = buttons[cond[0]].innerHTML ;
        let pos2 = buttons[cond[1]].innerHTML ;
        let pos3 = buttons[cond[2]].innerHTML ;

        if ((pos1 !== "" ) && (pos2 !== "" ) && (pos3 !== "") && (pos1 === pos2 && pos2 === pos3)) {
            showWinner(pos1);
        }

    });
}

let circle = '<i class="fa-solid fa-circle-notch fa-rotate-90 text-[2rem] text-white md:text-[4rem] xl:text-[6rem]"></i>';
let triangle = '<i class="fa-solid fa-play fa-rotate-270 text-[2rem] text-white md:text-[4rem] xl:text-[6rem]"></i>';

// let circleScore = 0;
// let triangleScore = 0;

/* const showScore = (val) => {
    if(1){
        return circleScore++;
    } else if(0) {
        return triangleScore++;
    }
    else {
        drawGame();
    }
}
*/
const disableAllButtons = () => {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

const showWinner = (pos1) => {
    if(pos1 === circle) {
        disableAllButtons();
        resultMsg.innerText = "Player Circle Win!";
        resultBox.classList.remove("hidden");

    } else if(pos1 === triangle) {
        disableAllButtons();
        resultMsg.innerText = "Player Triangle Win!";
        resultBox.classList.remove("hidden");
    }
}
