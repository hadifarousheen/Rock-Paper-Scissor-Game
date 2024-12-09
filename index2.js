document.addEventListener("DOMContentLoaded", () => {
  const displayName = document.querySelector(".display-name");
  let savedname = localStorage.getItem("pname");
  displayName.innerText = `${savedname} SELECT ANY ONE FROM BELOW`;
});

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

let playeroption = 0;
let computerscore = 0;
let userscore = 0;

const computerimage = document.querySelector(".computer-image");

const playerimage = document.querySelector(".player-image");

const gamestatus = document.querySelector(".game-status");

const userscoredisplay = document.querySelector(".user-score");
const computerscoredisplay = document.querySelector(".computer-score");

const goback = document.querySelector(".go-back");

const imagesobj = {
  1: "./rock.png",
  2: "./paper2.png",
  3: "./scissor.png",
};

rock.addEventListener("click", () => {
  playerimage.src = "./rock.png";
  const computeroption = Math.floor(Math.random() * 3) + 1;
  playeroption = 1;
  computerimage.src = imagesobj[computeroption];
  const result = determinewiner(playeroption, computeroption);
  gamestatus.innerText = result;
  computerscoredisplay.innerText = computerscore;
  userscoredisplay.innerText = userscore;
});

paper.addEventListener("click", () => {
  playerimage.src = "./paper2.png";
  const computeroption = Math.floor(Math.random() * 3) + 1;
  playeroption = 2;
  computerimage.src = imagesobj[computeroption];
  const result = determinewiner(playeroption, computeroption);
  gamestatus.innerText = result;
  computerscoredisplay.innerText = computerscore;
  userscoredisplay.innerText = userscore;
});

scissor.addEventListener("click", () => {
  playerimage.src = "./scissor.png";
  const computeroption = Math.floor(Math.random() * 3) + 1;
  playeroption = 3;
  computerimage.src = imagesobj[computeroption];
  const result = determinewiner(playeroption, computeroption);
  gamestatus.innerText = result;
  computerscoredisplay.innerText = computerscore;
  userscoredisplay.innerText = userscore;
});

function determinewiner(playeroption, computeroption) {
  if (computeroption == playeroption) {
    return "DRAW";
  } else if (
    (computeroption == 1 && playeroption == 2) ||
    (computeroption == 2 && playeroption == 3) ||
    (computeroption == 3 && playeroption == 1)
  ) {
    userscore++;
    return "✨YOU WON✨";
  } else {
    computerscore++;
    return "COMP WON";
  }
}

goback.addEventListener("click", () => {
  window.location.href="./index.html"
});
