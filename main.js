// 'use strict';

// brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


let newPerson = [
  // {
  //   id: 2,
  //   name: "Charles Young",
  //   age: 55,
  //   skillSet: "welding",
  //   placeBorn: "Omaha, Nebraska"
  // },
  // {
  //   id: 3,
  //   name: "Judy Twilight",
  //   age: 35,
  //   skillSet: "fishing",
  //   placeBorn: "Louisville, Kentucky"
  // },
  // {
  //   id: 4,
  //   name: "Cynthia Doolittle",
  //   age: 20,
  //   skillSet: "tic tac toe",
  //   placeBorn: "Pawnee, Texas"
  // },
  // {
  //   id: 5,
  //   name: "John Willouby",
  //   age: 28,
  //   skillSet: "pipe fitting",
  //   placeBorn: "New York, New York"
  // },
  // {
  //   id: 6,
  //   name: "Stan Honest",
  //   age: 20,
  //   skillSet: "boom-a-rang throwing",
  //   placeBorn: "Perth, Australia"
  // },
  // {
  //   id: 7,
  //   name: "Mia Watu",
  //   age: 17,
  //   skillSet: "acrobatics",
  //   placeBorn: "Los Angeles, California"
  // },
  // {
  //   id: 8,
  //   name: "Walter Cole",
  //   age: 32,
  //   skillSet: "jump rope",
  //   placeBorn: "New Orleans, Louisiana"
  // },
]

let 

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
  newPerson.map(person => {
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

// DO I NEED THE MODULE.EXPORTS? 
// module.exports = {
//   Player,
//   Teammate,
//   addTeammate,
//   makePlayer,
//   listPeopleChoices,
// }

// FOR NEW PERSON INPUT FORM
// let newPerson = []; // array to be populated with form submission data ** push to class as objects?

const addNewPerson = (ev) => {
  ev.preventDefault(); // to stop form submitting 
  let newPersonForm = {
    id: console.log(Math.round(Math.random() * (80 - 1) + 1)), // random whole numbers between 1-80 
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    skillSet: document.getElementById('skillSet').value,
    placeBorn: document.getElementById('placeBorn').value
  }
  newPersonarrOfPeople.push(newPersonForm);
  document.querySelector('form').reset() // to clear form for next entries
}

//Need to figure out how to push input data into ArrOfPeople as sub-arrays?!
//Need form to require all fields filled out
// Need to use trim() and .style.textTransform = "capitalize"


document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('submit').addEventListener('click', addNewPerson);
}
);

// UNIT TESTS:

// if (typeof describe === "function") {
//   describe("Player", function () {
//     it("Should create a player", function () {
//       const player1 = new Player(1, "Qwilleran McTavish")
//       assert.strictequal(player1.name, "Qwilleran McTavish")
//       assert.strictequal(player1.id, 1)
//     })
//   })
//   describe("Teammate", function () {
//     it("Should create a blue teammate", function () {
//       const teammate1 = new Teammate(1, "Qwilleran McTavish", "Blue", "Mascot")
//       assert.strictequal(teammate1.name, "Qwilleran McTavish")
//       assert.strictequal(teammate1.id, 1)
//       assert.strictequal(teammate1.color, "Blue")
//       assert.strictequal(teammate1.mascot, "Mascot")
//     })
//     it("Should create a red teammate", function () {
//       const teammate1 = new Teammate(1, "Qwilleran McTavish", "Red", "Mascot")
//       assert.strictequal(teammate1.name, "Qwilleran McTavish")
//       assert.strictequal(teammate1.id, 1)
//       assert.strictequal(teammate1.color, "Red")
//       assert.stricequal(teammate1.mascot, "Mascot")
//     })
//   })
// }
