let timerElement = document.getElementById("timer");
let defuserElement = document.getElementById("defuser");

let successOpeartion = "Congratulations! You Did it!!!"
let opeartionFailed = "BOOM!!";

let countdown = 10;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerElement.textContent = countdown;

    if(countdown === 0) {
    timerElement.textContent = opeartionFailed;
    timerElement.style.backgroundColor = "aqua";
    clearInterval(intervalId);
    }
}, 1000);

defuserElement.addEventListener("keydown", function(event) {

    let bombDefuserText = defuserElement.value;
    if(event.key === "Enter" && bombDefuserText === "Mani" && countdown !== 0){
        timerElement.textContent =successOpeartion;
        timerElement.style.backgroundColor = "aqua";
        timerElement.style.color = "Green";
        clearInterval(intervalId);
    } 
    
});