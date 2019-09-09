/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
}
  /**
   * Display phrase on game scoreboard
   */
  addPhraseToDisplay() {
    const divList = document.querySelector('#phrase ul');
    const phraseLetters = this.phrase.split('');
    for (let i = 0; i < phraseLetters.length; i++) {
      const letterBlock = document.createElement('li');
      if (phraseLetters[i] === ' ') {
        letterBlock.textContent = phraseLetters[i];
        letterBlock.className = 'space';
      } else {
        letterBlock.textContent = phraseLetters[i];
        letterBlock.className = `hide letter ${phraseLetters[i]}`;
      }
      divList.appendChild(letterBlock);
    }
  }

  checkLetter() {

  }

  showMatchedLetter() {

  }


}
