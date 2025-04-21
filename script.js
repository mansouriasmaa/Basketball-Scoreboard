let homeScoreEl = document.getElementById("Home-score");
let guestScoreEl = document.getElementById("guest-score");
let resetHomeScoreEl = document.getElementById("Home-score");
let resetgeustScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

// Home Score

function addOneHome() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function resetHomeScore() {
  homeScoreEl.textContent = 0;
  homeScore = 0;
}

// Guest Score

function addOneGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function resrtGuestScore() {
  guestScoreEl.textContent = 0;
  guestScore = 0;
}
