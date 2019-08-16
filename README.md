Tic Tac Toe
A browser based tic tac toe game with long term stat tracking.

https://ehaffey.github.io/tic-tac-toe-client/

Technologies

HTML
CSS
SASS
Bootstrap
Javascript
jQuery
Ajax

Planning and Development

-Planning-
1) Work through wireframes and user stories
2) Develop working order of development tasks
3) Break tasks down to ticket-like items

-Development-
1) Build out initial APIs from previous API work
2) Setup basic UI with login and responsive game board
3) Work through new game and game update APIs and what will be stored
through APIs vs stored locally
4) Build back-end ability for game to accept moves, check for wins or draws, and
notify the player
5) Improve feel of board and setup login/logout abilities
6) Resolve bugs around unexpected board behavior after multiple games and board resets
7) Setup input field clearing after login/logout
8) Add API and messaging for total games played
9) Deploy!

Wireframes and user stories

As a user I want to be able to register and/or login with my email and a password of my choosing.
As a user I want to view a board of 3x3 squares that corresponds with what I recognize as a classic tic tac toe board.
As a user I want to know who the current player is
As a user I don't want the game to allow invalid moves.
As a user I want to know when there is a winner, I want the game to stop when there is a winner or a draw
As a user I want to be able to reset the board.
As a user I want to be able to access some of my stats, such as total games played or won.
As a user I want to be able to logout when I am done playing.
As a user I expect not to see the game board when logged out, and when logged in I don't want to see sign-in or register tools.

https://drive.google.com/file/d/1dW4C7iVzpd_J_TVzLp3nYWx-YvUB84N4/view?usp=sharing
https://drive.google.com/file/d/1-3KDXu7IhHln7_abTPjcfEDxERjeaEhY/view?usp=sharing


Problem Solving Strategy
Solve small problems. I didn't solve tic tac toe or a game or a browser layout, instead I solved little problems, such as what fields does the API need or what format is it expecting JSON objects in. With that solved I would move on to testing the format, and then converting that format to an ajax call to the API, but each of these was solved indivually, not with the thought of solving everything at once. Once the little problems were solved and the code pieces were talking to each other I then needed to iron out a few bugs and resolve minor UI issues.

Future Development
1) Better layout/visual design
2) Multidevice multiplayer
3) Refactored and streamlined codebase
