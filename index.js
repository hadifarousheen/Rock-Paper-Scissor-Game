const playerName = document.querySelector(".player-name");

const playNowButton = document.querySelector(".play-now");

const startAlert = document.querySelector(".start-alert");

let pname;

playerName.addEventListener("input", (e) => {
  pname = e.target.value;
  localStorage.setItem("pname", pname);
});

let count = 3;
playNowButton.addEventListener("click", () => {
  if (pname) {
    const id = setInterval(function () {
      startAlert.innerText = `GAME STARTS  IN ${count--}`;
      if (count == -1) {
        clearInterval(id);

        
        window.location.href="./game.html"
      }
    }, 1000);
  } else {
    startAlert.innerText = "Enter Your Name Player...";
  }
});
