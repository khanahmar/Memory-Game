const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let first, secondCard;

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
