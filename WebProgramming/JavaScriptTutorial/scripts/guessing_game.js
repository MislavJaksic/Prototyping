// Comment
/* Comment */
const max_guesses = 8;
const victory_result = "is correct!";

let count_guesses = 0;
let answer = -1;
let answerShown = false

let guess_button = document.querySelector("#submit_guess_buttonID"); //-> find element by id="" value

let cheat_button = document.querySelector("#cheat_buttonID");

function CheckGuess() {
  IncreaseGuessCount()
  let guess = GetGuess()
  let result = CompareGuessWithAnswer(guess)
  DisplayGuessAndResult(guess, result)
  IsVictory(result)
  IsDefeat()
}

function IncreaseGuessCount() {
  count_guesses += 1;
}

function GetGuess() {
  let guess_textbox = document.querySelector("#guessID");
  return parseInt(guess_textbox.value);                  //-> get value
}

function CompareGuessWithAnswer(guess) {
  if (guess === answer){
    return victory_result;
  }
  if (guess > answer){
    return "is too high";
  }
  if (guess < answer){
    return "is too low";
  }
  return "ERROR";
}

function DisplayGuessAndResult(guess, result) {
  AppendTextToID(guess + " ", "previous_guessesID");
  AppendTextToID(result + "; ", "previous_guessesID");
}

function IsVictory(result) {
  if (result === victory_result) {
    guess_button.textContent = "Victory!";
    guess_button.disabled = true;         //-> deactivate button
    AppendTextToID(answer, "answerID")
    return true
  }
  return false
}

function IsDefeat() {
  if (OverMaxGuesses()){
    guess_button.textContent = "Guess limit reached";
    guess_button.disabled = true;
    return true
  }
  return false
}

function OverMaxGuesses() {
  if (count_guesses >= max_guesses){
    return true;
  }
  return false;
}

function GenerateAnswer() {
  let zero_to_one = Math.random(); //-> generate a random number
  let one_to_hundred = zero_to_one * 100;
  answer = Math.floor(one_to_hundred) + 1;
}

function AppendTextToID(text, id) {
  let element = document.querySelector("#" + id);
  element.textContent += text;                   //-> add text
}

function ShowAnswer(){
  if (answerShown === false){
    AppendTextToID("Shame on you you big cheater!", "answerID")
    answerShown = true
    guess_button.textContent = "Cheater!";
    guess_button.disabled = true;         //-> deactivate button
  }
}
GenerateAnswer();

guess_button.addEventListener("click", CheckGuess); //-> listens to when the button is clicked
                                                    //-> The construct that listens is an EventListener, CheckGuess in the EventHandler
cheat_button.addEventListener("click", ShowAnswer);