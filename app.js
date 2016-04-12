function play(playerChoice){
  var choice = ['rock', 'paper', 'scissors'];
  var computerChoice = choice[Math.floor(Math.random() * choice.length)];
  
  var rock;
  var paper;
  var scissors;
  
  switch (playerChoice) {
    case "rock": 
      playerChoice = 2;
      switch (computerChoice) {
        case "rock": 
          computerChoice = 2;
          break;
        case "paper": 
          computerChoice = 3;
          break;
        case "scissors": 
          computerChoice = 1;
          break;
      }
      break;
    case "paper":
      playerChoice = 2;
      switch (computerChoice) {
        case "paper":
          computerChoice = 2;
          break;
        case "scissors":
          computerChoice = 3;
          break;
        case "rock":
          computerChoice = 1;
          break;
      }
      break;
    case "scissors":
      playerChoice = 2;
      switch (computerChoice) {
        case "paper":
          computerChoice = 2;
          break;
        case "scissors":
          computerChoice = 1;
          break;
        case "rock":
          computerChoice = 3;
          break;
      }
      break;
  }
      
      if (computerChoice > playerChoice) {
        alert("The computer won! :(");
      } else if (computerChoice < playerChoice) {
        alert("You won!  Yay!");
      } else if (computerChoice === playerChoice) {
        alert("Aagh!  A tie!");
      } else {
        alert("Uh, something went wrong.");
      }
  }