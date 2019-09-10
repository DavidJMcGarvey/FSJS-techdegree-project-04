/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
 const randomPhrase = game.getRandomPhrase();
 const phrase = new Phrase(randomPhrase.phrase);

document.querySelector('#btn__reset').addEventListener('click', ()=>{
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

document.querySelector('#qwerty').addEventListener('click',  (e)=>{
  if (e.target.type === 'submit') {
    phrase.showMatchedLetter(e.target.textContent);
  }
});
