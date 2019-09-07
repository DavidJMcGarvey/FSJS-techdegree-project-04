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
      new Phrase('This is a phrase.'),
      new Phrase('This is also a phrase.'),
      new Phrase('This is yet another phrase.'),
      new Phrase('This is almost a phrase.'),
      new Phrase('This is not phrase.')
    ];
    return phrases;
  }

  startGame() {
    console.log('DAVE!! Good to see you in here again!');
  }

  getRandomPhrase() {

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
