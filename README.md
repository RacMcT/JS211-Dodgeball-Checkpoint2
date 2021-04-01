# Austin Coding Academy

## JavaScript 211 Project: Dodgeball Checkpoint 2

### Today's Checklist

1. Ensure you have installed all dependencies/packages: `npm i`
1. Look at the Unit Test, see what is being called, passed as input arguments, and what the expected results are.
1. Ensure you know how to run the unit test:
   - `npm test main.js`
1. Use a whiteboard to work out a solution to building the Pig Latin program
1. Translate the broad ideas to pseudo code
1. Convert the pseudo code to real JavaScript Code
1. Type into your text editor the JavaScript code you've come up with one step at a time
1. Work through your bugs.
1. Use `node main.js` to run the game
1. Achieve green checks for each of your unit tests.

### Project Spec's:

1. 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.

1. 20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.

1. 20pts - Can add Players to different Teams - When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.

1. 20pts - Uses class - This is not a hack job. You should use class to add the new properties you need and extend when you need.

1. 20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit tests that prove a person becomes a player and a player becomes a teammate.

- Add an input at the top of the Window that allows for a user to add new people!
- Make a random-izer to automatically select teams for us!
- Add multiple teams to add players to.
- Change the color of the text for each color based on the color of their team!
- Make a button to remove Players from Teams and move them back to the Players list.
- Make a button to remove Players from the Players List and move them into the People List.

# fix continual loop everytime click list people button- just reloops and pushes to DOM same list

## RACHEL'S CODE PLAN:

### Running the apps

Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests

Tests are a great way to make sure your code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter

Simply run `npm run lint`

#### Running the Server

1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`
