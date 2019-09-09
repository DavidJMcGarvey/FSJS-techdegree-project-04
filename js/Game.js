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
      new Phrase('an apple a day keeps the apple business profitable'),
      new Phrase('jingle bells batman smells'),
      new Phrase('This is almost a phrase.'),
      new Phrase('This is not phrase.')
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

  handleInteraction() {

  }

  removeLife() {

  }

  checkForWin() {

  }

  gameOver() {

  }

}
