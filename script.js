const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progressBarMultiplier = 100 / (circles.length - 1);
let currentActive = 0;

next.addEventListener('click', () => {
  console.log(circles.length);
  if (currentActive < circles.length - 1) currentActive++;
  addActiveClass();
  updateProgress();
});

prev.addEventListener('click', () => {
  removeActiveClass();
  if (currentActive > 0) currentActive--;
  updateProgress();
});

function removeActiveClass() {
  circles[currentActive].classList.remove('active');
}

function addActiveClass() {
  circles[currentActive].classList.add('active');
}

function moveProgressBar() {
  progress.style.width = currentActive * progressBarMultiplier + '%';
}

function toggleButtonsEnabled() {
  next.disabled = currentActive === circles.length - 1;
  prev.disabled = currentActive === 0;
}

function updateProgress() {
  addActiveClass();
  moveProgressBar();
  toggleButtonsEnabled();
}
