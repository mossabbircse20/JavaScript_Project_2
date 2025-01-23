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

let circleIcon = true;

const restartGame = () => {
    console.log("Game restarted!");
}

const newGame = () => {
    console.log("New Game started!");
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Button was clicked!");
        if(circleIcon) {
        button.innerHTML = '<i class="fa-solid fa-circle-notch fa-rotate-90 text-[2rem] text-white md:text-[4rem] xl:text-[6rem]"></i>';
        circleIcon = false;
        } else {
            button.innerHTML = '<i class="fa-solid fa-play fa-rotate-270 text-[2rem] text-white md:text-[4rem] xl:text-[6rem]"></i>';
            circleIcon = true;
        }
        button.disabled = true;
    });
});
