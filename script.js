const messages = [
  "No",
  "Himanyyyy come onn",
  "You're hurting me 💔",
  "I take such good care of kuromi no 🥺",
  "Please?? 🥺",
  "Pleaseeeeeeeeeee 💔",
  "You hate me no 💔😔"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;

  const container = document.querySelector(".buttons");
  const maxX = container.clientWidth - noButton.offsetWidth;
  const maxY = container.clientHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}

function handleYesClick() {
  window.location.href = "yes.html";
}


