document.querySelector("#rock").addEventListener("click", Rock);
document.querySelector("#paper").addEventListener("click", Paper);
document.querySelector("#scissor").addEventListener("click", Scissor);
document.querySelector("#restart").addEventListener("click", Restart);

let userchoice;
let numofrounds = 0;
let win = 0,
  lose = 0,
  draw = 0;
function Rock() {
  userchoice = "rock";
  bot(userchoice);
}
function Paper() {
  userchoice = "paper";
  bot(userchoice);
}
function Scissor() {
  userchoice = "scissor";
  bot(userchoice);
}
const choices = {
  0: "rock",
  1: "paper",
  2: "scissor",
};

function Restart() {
  window.location.reload();
}

function setupsection(userchoice, choice) {
  let x = document.getElementById("components");
  x.style.display = "none";

  let ele = document.createElement("img");
  ele.src = `./images/${choices[choice]}.jfif`;
  ele.alt = `${choices[choice]}`;

  let ele2 = document.createElement("img");
  ele2.src = `./images/${userchoice}.jfif`;
  ele2.alt = `${userchoice}`;

  document.getElementById("resdiv").appendChild(ele2);
  document.getElementById("resdiv").appendChild(ele);
}

function clearbox() {
  let ele = document.querySelector("#resdiv").querySelectorAll("img");
  for (let i = 0; i < ele.length; i++) ele[i].remove();

  let x = document.getElementById("components");
  x.style.display = "flex";

  document.getElementById("result").innerHTML = "";
  numofrounds++;
}

function finalres() {
  document.getElementById("resdiv").style.display = "none";
  document.getElementById("summary").style.display = "none";

  let x = document.getElementById("result");
  if (win > lose) {
    document.getElementById("result").innerHTML = "YOU WON!!";
    x.style.fontSize = "2rem";
    x.style.color = "green";
  } else if (lose > win) {
    document.getElementById("result").innerHTML = "YOU LOSE!!";
    x.style.fontSize = "2rem";
    x.style.color = "red";
  } else {
    document.getElementById("result").innerHTML = "YOU DREW!!";
    x.style.fontSize = "2rem";
    x.style.color = "blue";
  }
}

function bot(userchoice) {
  let choice = Math.floor(Math.random() * 3);
  let botchoice = choices[choice];
  setupsection(userchoice, choice);
  if (botchoice == userchoice) {
    document.getElementById("result").innerHTML = "Draw";
    draw++;
    document.getElementById("drawsc").innerHTML = draw;
  }

  if (botchoice == "rock" && userchoice == "scissor") {
    document.getElementById("result").innerHTML = "You Lose";
    lose++;
    document.getElementById("losesc").innerHTML = lose;
  }

  if (botchoice == "rock" && userchoice == "paper") {
    document.getElementById("result").innerHTML = "You Win";
    win++;
    document.getElementById("winsc").innerHTML = win;
  }

  if (botchoice == "paper" && userchoice == "scissor") {
    document.getElementById("result").innerHTML = "You Win";
    win++;
    document.getElementById("winsc").innerHTML = win;
  }

  if (botchoice == "scissor" && userchoice == "paper") {
    document.getElementById("result").innerHTML = "You Lose";
    lose++;
    document.getElementById("losesc").innerHTML = lose;
  }

  if (botchoice == "paper" && userchoice == "rock") {
    document.getElementById("result").innerHTML = "You Lose";
    lose++;
    document.getElementById("losesc").innerHTML = lose;
  }

  if (botchoice == "scissor" && userchoice == "rock") {
    document.getElementById("result").innerHTML = "You Win";
    win++;
    document.getElementById("winsc").innerHTML = win;
  }

  setTimeout(() => {
    if (numofrounds < 4) clearbox();
    else finalres();
  }, 1000);
}
