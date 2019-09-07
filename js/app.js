/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();


document.getElementById('btn__reset').addEventListener('click', (e)=>{
  game.createPhrases()
  console.log(game);
});
