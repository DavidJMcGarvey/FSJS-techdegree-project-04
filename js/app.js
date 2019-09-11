/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let randomPhrase;
let phrase;
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', ()=>{
  game = new Game();
  game.startGame();
  randomPhrase = game.getRandomPhrase();
  phrase = new Phrase(randomPhrase.phrase);
  if (startButton.value === 'play_again') {
    game.resetGame();
    game = new Game();
    game.startGame();
    randomPhrase = game.getRandomPhrase();
    phrase = new Phrase(randomPhrase.phrase);
  }
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

document.querySelector('#qwerty').addEventListener('click',  (e)=>{
  if (e.target.type === 'submit') {
    game.handleInteraction(e.target.textContent)
  }
});
