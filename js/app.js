/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
 const randomPhrase = game.getRandomPhrase();
 const phrase = new Phrase(randomPhrase.phrase);

document.getElementById('btn__reset').addEventListener('click', ()=>{
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
