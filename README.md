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

1. ADDITONAL PUSH YOURSELF SPEC'S (OPTIONAL):

- Add an input at the top of the Window that allows for a user to add new people! - WORKING THROUGH
- Make a random-izer to automatically select teams for us!
- Add multiple teams to add players to.
- Change the color of the text for each color based on the color of their team!
- Make a button to remove Players from Teams and move them back to the Players list.
- Make a button to remove Players from the Players List and move them into the People List.

## RACHEL'S CODE PLAN:

# BEFORE CODING

- Read through ACA starter code a few times
- Read through unit tests from previous assignments (copied/commented PigLatin for reference)

---

# INPUT FORM

- Create input form in HTML for new person
- Input needs whitespace trimmed and case sensitive --> trim() --> use at getElementByID() for form data retrieval
- New person form data needs to be retrieved and saved with keys
- New person form data needs to be appended to or added to current objects in person class

---

# PERSON TO PLAYER

- Person list objects need to be able to move to players on a team with button click(s)
- Person object moved to a team must be deleted from person list/class
- Person object needs to transform or inherit (and leave behind) values- so same as other players

---

# PLAYER TO PERSON

- Player list objects need to be able to move to person with button click(s)
- Player object moved to person list must be deleted from player list/class
- Player object needs to transform or inherit (and leave behind) values- so same as other people

---

# PLAYER TO TEAM MEMBER

- Player list objects need to be able to move to team list button click(s)
- Player object moved to team list must be deleted from player list/class
- Player object needs to transform or inherit (and leave behind) values- same as other team members

---

# TEAM MEMBER TO PLAYER

- Team member list objects need to be able to move to player list button click(s)
- Team member moved to team list must be deleted from Team member list/class
- Team member needs to transform or inherit (and leave behind) values- same as other players

---

# RANDOMIZER FOR AUTO-TEAM DRAFTING

- Create random sorter button to auto-set teams from persons list to players list (math.random()connected to IDs?)
- Button in HTML - have event listeners, pass through (ev), make sure spaced logically away from add new person form

---

# MAKE MORE THAN 2 TEAMS

- Create additional team classes for players to be added to
- add a minimum number of players for the team to be a minimum roster
- counter for each team- counts number of players (add or subtract depending on li)
- once team has minimum number of players - some css styling change on counter?

---

# COLOR CHANGE TO TEAM COLORS WHEN DRAFTED

- CSS & JS: change the color of the text for each color based on the color of their team!
- Check color contrast to ensure basic accesability

---

# PLAYER LIST DISPLAYED IN DOM

- Fix inherent bug in ACA starter code-- make sure it stops looping ontop of itself everytime button pressed

---

# UNIT TESTING

- Write Unit Tests
- Test 1) new person form input is pulled from DOM and put into person class correctly
- Test 2) people are moved to players class- move over, inherit new values, delete from person list
- Test 3) players can be moved back into people list- move, inherit, delete
- Test 4) randomizer pulls from people list to populate players on teams
- Test 5) players can be put onto teams- move, inherit, delete
- Test 6) counter for number of players on team counts up and down correctly
- Test 7) names are entered with capitalization and trimmed white space??

---

# Simple Accessability Checks: IF TIME BEFORE DUE DATE!

- focus for buttons and form- outline
- colors are high contrast - but also not too busy and jarring (prevent stimulation overload)
- quick research for any needed Aria tags if not built into native HTML
- change ACA starter Divs to Semantic HTML elements

---

# Responsive CSS Styling: IF TIME BEFORE DUE DATE!

- arrange for mobile, tablet, laptop screens
- if time also check for larger screens?

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
