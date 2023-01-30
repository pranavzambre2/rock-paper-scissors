let rps = ['rock', 'paper', 'scissors'];
let score = 0;
const scoreselect = document.querySelectorAll('#score p')[0];

function condition(player) {
    let output = ""
    let computer = rps[(Math.floor(Math.random() * 3))];
    if (computer == player) {
        output = "MATCH TIE"
    }
    else if ((player == "rock" && computer == "scissors")) {
        output = "YOU WIN"
        score++;
    }
    else if (player == "scissors" && computer == "paper") {
        output = "YOU WIN"
        score++;
    }
    else if (player == "paper" && computer == "rock") {
        output = "YOU WIN"
        score++;
    }
    else {
        output = "YOU LOST"
    }
    scoreselect.innerHTML = score
    details(player, computer, output)
}

function details(a, b, c) {
    document.querySelector(".options").innerHTML = 

    ` <div class="match-details">

<div>
    <div class ="you-picked">YOU PICKED</div>
    <button class="yp-style ${a}" ><img src="${a}.png" alt="error"></button>
</div>

<div>
    <div class="result">${c}</div>
    <div class="result" style="font-size: 25px;">AGAINST PC</div>
    <button class="pa-btn" onclick="playAgain()">Play Again</button>
</div>

<div>
<div class ="pc-picked">PC PICKED</div>
    <button class="pp-style ${b}"><img src="${b}.png" alt="error"></button>
</div>

</div>`

}

function playAgain() {
    document.querySelector(".options").innerHTML = ` 
    <div>
    <img src="line1.png" class="line1" alt="line">
    <img src="line2.png" class="line2" alt="line">
    <img src="line3.png" class="line3" alt="line">
    <button class="scissors" onclick="condition('scissors')"><img src="scissors.png"
            alt="scissors"></button>
    <button class="rock" onclick="condition('rock')"><img src="rock.png" alt="rock"></button>
    <button class="paper" onclick="condition('paper')"><img src="paper.png" alt="paper"></button>
</div> `
}

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}