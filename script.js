
const gameContainer = document.querySelector('.container');
const allMoleItems = document.querySelectorAll('.item');
let startGame, startTime, countDown = 20, score = 0;

const timeCount = document.getElementById('time-count');
const scoreCount = document.getElementById('score-count')

gameContainer.addEventListener('click', function(e){
   if(e.target.classList.contains('mole-clicked')){
      console.log('Wow');     
   }
});

document.addEventListener('DOMContentLoaded', () => {
   // Total game time is 20 seconds
   startTime = setInterval(() => {
      timeCount.innerText = countDown;
      countDown--;
   }, 1000);

   startGame = setInterval(() => {
      showMole();
   }, 600);
});

// Showing Mole
function showMole() {
   let moleToAppear = allMoleItems[getRandomValue()].querySelector('.mole');
   moleToAppear.classList.add('mole-appear');
   hideMole(moleToAppear);
}

function getRandomValue(){
   let rand = Math.random() * allMoleItems.length;
   return Math.floor(rand);
};