'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(id, name, index) {
    this.id = id
    this.name = name
    this.index = index
  }

  addPlayer() {
    const uniqueId = this.id
    const uniqueName = this.name

    const listPlayers = document.getElementById("players")
    const li = document.createElement("li")
    li.setAttribute("id", this.index)

    const button1 = document.createElement("button")
    button1.innerHTML = "Blue Team"
    button1.addEventListener("click", function () {
      addTeammate(uniqueId, uniqueName, "Blue", "The Blue Seals", this.index)
    })

    const button2 = document.createElement("button")
    button2.innerHTML = "Red Team"
    button2.addEventListener("click", function () {
      addTeammate(uniqueId, uniqueName, "Red", "The Red Cardinals", this.index)
    })

    listPlayers.append(li)
    li.appendChild(
      document.createTextNode(
        `Player Name: ${this.name}
        Player Number: ${this.id}`
      )
    )
    li.appendChild(button1)
    li.appendChild(button2)
  }
}
class Teammate extends Player {
  constructor(id, name, color, mascot) {
    super(id, name)
    this.color = color
    this.mascot = mascot
  }

  addBlueTeammate() {
    const listBlue = document.getElementById("blue")
    const li = document.createElement("li")
    listBlue.append(li)
    li.appendChild(
      document.createTextNode(
        `Player Name: ${this.name}
        Player Number: ${this.id}
        Team: ${this.color}
        Mascot: ${this.mascot}`
      )
    )
  }

  addRedTeammate() {
    const listBlue = document.getElementById("red")
    const li = document.createElement("li")
    listBlue.append(li)
    li.appendChild(
      document.createTextNode(
        `Player Name: ${this.name}
        Player Number: ${this.id}
        Team: ${this.color}
        Mascot: ${this.mascot}`
      )
    )
  }
}


const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

function clearList(){
  document.getElementById("people").innerHTML = ''; 
}

// const blueTeam = []
// const redTeam = []

// const makePlayer = (id, name, i) => {
//   new Player(id, name).addPlayer()

//   console.log(`li ${id} was clicked!`)
// }

const makePlayer = (id, name, i) => {
  new Player(id, name).addPlayer()
  const h1 = document.getElementById("people")
  const li = document.getElementById(i)
  h1.removeChild(li)
}

const addTeammate = (id, name, color, mascot, i) => {
  if (color === "Blue") {
    new Teammate(id, name, color, mascot).addBlueTeammate()
  } else {
    new Teammate(id, name, color).addRedTeammate()
  }
  const h4 = document.getElementById("players")
  const li = document.getElementById(i)
  h4.removeChild(li)
}

module.exports = {
  Player,
  Teammate,
  addTeammate,
  makePlayer,
  listPeopleChoices,
}

// FOR NEW PERSON INPUT FORM
// let newPerson = []; // array to be populated with form submission data ** push to class/objects?

// const addNewPerson = (ev) => {
//   ev.preventDefault(); // to stop form submitting 
//   let newPersonForm = {
//     id: console.log(Math.round(Math.random() * (80 - 1) + 1)), // random whole numbers between 1-80 
//     name: document.getElementById('name').value,
//     age: document.getElementById('age').value,
//     skillSet: document.getElementById('skillSet').value,
//     placeBorn: document.getElementById('placeBorn').value
//   }
//   newPerson.push(newPersonForm);
//   document.querySelector('form').reset() // to clear form for next entries
// }
// //Need to figure out how to push input data into ArrOfPeople as sub-arrays?!
// //Need form to require all fields filled out
// // Need to use trim() and .style.textTransform = "capitalize"


// document.addEventListener('DOMContentLoaded', ()=>{
//   document.getElementById('submit').addEventListener('click', addNewPerson);
// }
// );

// UNIT TESTS:

if (typeof describe === "function") {
  describe("Player", function () {
    it("Should create a player", function () {
      const player1 = new Player(1, "Qwilleran McTavish")
      assert.strictequal(player1.name, "Qwilleran McTavish")
      assert.strictequal(player1.id, 1)
    })
  })
  describe("Teammate", function () {
    it("Should create a blue teammate", function () {
      const teammate1 = new Teammate(1, "Qwilleran McTavish", "Blue", "Mascot")
      assert.strictequal(teammate1.name, "Qwilleran McTavish")
      assert.strictequal(teammate1.id, 1)
      assert.strictequal(teammate1.color, "Blue")
      assert.strictequal(teammate1.mascot, "Mascot")
    })
    it("Should create a red teammate", function () {
      const teammate1 = new Teammate(1, "Qwilleran McTavish", "Red", "Mascot")
      assert.strictequal(teammate1.name, "Qwilleran McTavish")
      assert.strictequal(teammate1.id, 1)
      assert.strictequal(teammate1.color, "Red")
      assert.stricequal(teammate1.mascot, "Mascot")
    })
  })
}

// // Unit Tests from PigLatin as example for syntax

// // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }


// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
