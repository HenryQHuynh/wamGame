
const gameContainer = document.querySelector('.container');
const allMoleItems = document.querySelectorAll('.item');
let startGame, startTime, countDown = 20, score = 0;

const timeCount = document.getElementById('time-count');
const scoreCount = document.getElementById('score-count')

gameContainer.addEventListener('click', function(e){
   if(e.target.classList.contains('mole-clicked')){
      console.log('Wow');
      score++;
      scoreCount.innerHTML = score;

      const bushElem = e.target.parentElement.previousElementSibling;
      
      let textEl = document.createElement('span');
      textEl.setAttribute('class', 'whack-text');
      textEl.innerHTML = "WHACK!";
      bushElem.appendChild(textEl);

      setTimeout(() => {
         textEl.remove();
      }, 300);
   }
});

document.addEventListener('DOMContentLoaded', () => {
   // Total game time is 20 seconds
   startTime = setInterval(() => {
      timeCount.innerHTML = countDown;
      countDown--;
   }, 1000);

   startGame = setInterval(() => {
      showMole();
   }, 600);
});

// Showing Mole
function showMole() {
   if (countDown <= 0) {
      clearInterval(startGame);
      clearInterval(startTime);
      timeCount.innerHTML = "0";
   }
   let moleToAppear = allMoleItems[getRandomValue()].querySelector('.mole');
   // console.log(moleToAppear);
   moleToAppear.classList.add('mole-appear');
   hideMole(moleToAppear);
}

function getRandomValue(){
   let rand = Math.random() * allMoleItems.length;
   return Math.floor(rand);
}

// hide mole
function hideMole(moleItem){
   setTimeout(() => {
       moleItem.classList.remove('mole-appear');
   }, 1500);
}