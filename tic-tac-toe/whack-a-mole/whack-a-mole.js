// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!");

let cells = document.querySelectorAll("td");

let whackSound = new Audio("whack-audio.wav");

let clickCounter = 0;

function showMole() {
  cells.forEach((cell) => (cell.innerHTML = ""));

  let cellRandom = cells[Math.floor(Math.random() * cells.length)];

  let moleIMG = document.createElement("img");
  moleIMG.src = "mole.PNG";

  moleIMG.addEventListener("click", () => {
    whackSound.play();
    console.log('Ow!');
    clickCounter++;
    if(clickCounter >= 10) {
    clearInterval(gameInterval);
    alert('you win!');
    }
  });
  

  cellRandom.appendChild(moleIMG);
}

let gameInterval = setInterval(showMole, 1000);
