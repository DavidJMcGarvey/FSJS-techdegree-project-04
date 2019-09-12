Full Stack JavaScript Techdegree Project 4
-----------------------------------------
###         OOP Game Show App         ###
-----------------------------------------

Welcome to the Game Show where you come for the word play, but stay for the
object-oriented programing!


**BASIC FEATURES**

This browser game uses object oriented programing to present a fun little
phrase guessing game. Using JavaScript **classes**, this app uses a **Game**
class and a **Phrase** class to build a random phrase and render it to screen
as blank tiles. The player can user the supplied onscreen keyboard to make
guesses as to how to spell the hidden phrase. The player has 5 guesses to
complete the game. The following are the methods (and any parameters) for each
class that are used to make the classes interact correctly:

- Game class - The meat of the app, this is where game starts, and most of the
game interaction occurs.
  1. createPhrases()
  2. startGame()
  3. resetGame()
  4. getRandomPhrase()
  5. handleInteraction(button)
  6. removeLife()
  7. checkForWin()
  8. gameOver(gameWon);

- Phrase class - This class handles how the phrase is displayed on the screen
and if the guess is correct or not.
  1. addPhraseToDisplay()
  2. checkLetter(letter)
  3. showMatchedLetter(letter)

**EXTRA FEATURES**

- Physical Keyboard Functionality - In addition to the onscreen keyboard, the
player can also use their physical keyboard to make guesses.

- "Make it your own" - This isn't just **Phrase Hunter**, this is **Davey's
Phrase Hunter**! The difference is this one has the name 'Davey' added to the
title! Also, the keyboard color effects and background colors are unique to
this edition. CSS is neat. Enjoy!



Author: David J McGarvey
Created: 2019-09-06
Updated: 2019-09-12
