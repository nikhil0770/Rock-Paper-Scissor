document.querySelector("#rock").addEventListener("click", Rock);
document.querySelector("#paper").addEventListener("click", Paper);
document.querySelector("#scissor").addEventListener("click", Scissor);

let userchoice;
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

function bot(userchoice) {
  let choice = Math.floor(Math.random() * 3);
  let botchoice = choices[choice];
  setupsection(userchoice, choice);
  if (botchoice == userchoice)
    document.getElementById("result").innerHTML = "Draw";

  if (botchoice == "rock" && userchoice == "scissor")
    document.getElementById("result").innerHTML = "You Lose";

  if (botchoice == "rock" && userchoice == "paper")
    document.getElementById("result").innerHTML = "You Win";

  if (botchoice == "paper" && userchoice == "scissor")
    document.getElementById("result").innerHTML = "You Win";

  if (botchoice == "scissor" && userchoice == "paper")
    document.getElementById("result").innerHTML = "You Lose";

  if (botchoice == "paper" && userchoice == "rock")
    document.getElementById("result").innerHTML = "You Lose";

  if (botchoice == "scissor" && userchoice == "rock")
    document.getElementById("result").innerHTML = "You Win";
}
