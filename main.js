let myDiv = document.querySelector('#buttons');
let myChoice;
let computerAnswer;
let startGame = document.getElementById('startGame');
let myPTag = document.getElementById('results');
let userChoice = document.getElementById('userChoice');

myDiv.addEventListener('click', function(a){
  myChoice = a.target.id;
  userChoice.textContent = "Your choice: " + myChoice;
})

startGame.addEventListener('click', function(){
  myPTag.textContent = myGame();
});

// 1st Condition ====> 
function guessAnswer() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.33){
    computerAnswer = "rock";
  }else if (randomNumber <= 0.66){
    computerAnswer = "paper";
  }else {
    computerAnswer = "scissors";
  }
  return computerAnswer;
}

// 2nd Condition ====>
function myGame(){
  guessAnswer();
  if (myChoice == computerAnswer){
    return "Tie! Rematch?";
  }//1st roll!
  else if(myChoice == 'paper'){
    if (computerAnswer == 'rock'){
      return "Paper beats rock! You win!";
    }else {
      return "Scissors beats paper! You lose!";
    }
    // 2nd roll!
  }else if(myChoice == 'rock'){
    if (computerAnswer == 'scissors'){
      return "Rock beats scissors! You win!";
    }else {
      return "Paper beats rock! You lose!";
    }
    // 3rd roll!
  }else if(myChoice == 'scissors'){
    if (computerAnswer == 'paper'){
      return "Scissors beats paper! You win!";
    }else {
      return "Rock beats scissors! You lose!"
    }
  }
}
