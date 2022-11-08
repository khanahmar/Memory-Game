const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = true;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();

  function checkForMatch() {
    if (firstCard.dataset.farmework === secondCard.dataset.farmework)
      disableCards();
    return;
  }

  unflipCard();
  lockBoard = true;

  // Disable Cards function
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  // Unflip card funciton
  function unflipCard() {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      lockBoard = false;
    }, 1500);
  }
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
