## Code Description

This code is an HTML, CSS, and JavaScript implementation of the Hangman game. The Hangman game is a word-guessing game where the player has to guess a hidden word by guessing individual letters. The code consists of:

- **HTML**: The HTML structure defines the layout of the game. It contains a container div that holds the entire game. Inside the container, there are sections for game information, the hangman drawing, the letter buttons, and the letter guesses.

- **CSS**: The CSS styles define the visual presentation of the game elements. It includes styles for the hangman drawing, the letter buttons, the letter guesses, and various other components of the game.

- **JavaScript**: The JavaScript code handles the game logic. It starts by generating the letter buttons dynamically based on the alphabet. It then retrieves a random word from a JSON file that contains word categories. The chosen word is displayed as blank spaces, and the player can click on the letter buttons to guess the letters. If the guessed letter is correct, it fills in the corresponding blank spaces. If the guessed letter is incorrect, it increments the wrong attempt count and displays the hangman drawing accordingly. The game ends when the player either guesses the word correctly or makes too many wrong attempts. Pop-up messages are displayed at the end of the game to indicate whether the player won or lost.

- **JSON Data**: The code includes a JSON file named "categories.json" that contains word categories and their corresponding words. Each category has an array of words associated with it.
