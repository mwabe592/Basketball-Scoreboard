let addOne = document.getElementById("guest-btn-1");
let scoreTally = document.getElementById("home-score-tally");
let guestScoreTally = document.getElementById("guest-score-tally");
let homeScore = 0;
let guestScore = 0;

function increaseScoreByOne() {
  homeScore += 1;
  scoreTally.textContent = homeScore;
}

function increaseScoreByTwo() {
  homeScore += 2;
  scoreTally.textContent = homeScore;
}
function increaseScoreByThree() {
  homeScore += 3;
  scoreTally.textContent = homeScore;
}
function increaseGuestScoreByTwo() {
  guestScore += 2;
  guestScoreTally.textContent = guestScore;
}

function increaseGuestScoreByOne() {
  guestScore += 1;
  guestScoreTally.textContent = guestScore;
}

function increaseGuestScoreByThree() {
  guestScore += 3;
  guestScoreTally.textContent = guestScore;
}
