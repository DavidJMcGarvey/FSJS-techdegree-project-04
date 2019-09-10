/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Create phrases for use in game
   * @return (array) An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase('easy peasy lemon squeezy'),
      new Phrase('apple of my eye'),
      new Phrase('down to the wire'),
      new Phrase('rome was not built in a day'),
      new Phrase('too many cooks in the kitchen')
    ];
    return phrases;
  }

  /**
   * Begins game by selecting random phrase and displaying it to user
   */
  startGame() {
    // hide screen overlay
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    // call getRandomPhrase() to get phrase from array, store in activePhrase
    this.activePhrase = this.getRandomPhrase();
    // add the phrase to gameboard w/ addPhraseToDisplay()
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Selects randome phrase from phrases property
   * @return (Object) Phrase object chosed to be used
   */
  getRandomPhrase() {
    let randomPhrase = this.phrases[Math.floor(Math
      .random() * this.phrases.length)];
    return randomPhrase;
  }

  /**
   * method for calling other methods to get game going
   */
  handleInteraction() {

  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scorebaord
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed += 1;
    
  }

  /**
   * Checks for winning move
   * @return (boolean) True is game has been won, false if loss
   */
  checkForWin() {

  }

  /**
   * Displays game over message
   * @param (boolean) gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {

  }

}
