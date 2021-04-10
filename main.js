// 'use strict';

// brings in the assert module for unit testing
// const assert = require('assert');

const newPerson = []
const listOfPlayers = []
const blueTeam = []
const redTeam = []

// FOR NEW PERSON INPUT FORM

const addNewPerson = (ev) => {
  ev.preventDefault(); // to stop form submitting 
  let newPersonForm = {
    id: Math.round(Math.random() * (80 - 1) + 1), // random whole numbers between 1-80 
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    skillSet: document.getElementById('skillSet').value,
    placeBorn: document.getElementById('placeBorn').value

  }
  document.querySelector('form').reset() // to clear form for next entries
}

console.log(newpersonForm);


//Need form to require all fields filled out
// Need to use trim() and .style.textTransform = "capitalize"

//ADD TO THE CODE:
//Use the class keyword to create a template of a dodgeBallPlayer that requires 
//canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('submit').addEventListener('click', addNewPerson);
}
);

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  newPerson.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)})
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + "'s age is " + person.age + ". This person's special skill is " + person.skillSet))
    listElement.append(li)
  })
}

function clearList(){
  document.getElementById("people").innerHTML = ''; 
}
// need to add dodgeball attributes/key values to form and to player class!!
class Player {
  constructor(id, name, index, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.id = id
    this.name = name
    this.index = index        
    this.age = age
    this.canThrowBall = true
    this.canDodgeBall = true
    this.hasPaid = true
    this.isHealthy = true
    this.yearsExperience = age - 12
  }

  addPlayer() {
    let uniqueId = this.id
    let uniqueName = this.name

    const listPlayers = document.getElementById("players")
    const li = document.createElement("li")
    li.setAttribute("id", this.index)
    li.setAttribute("name", this.name)

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
  constructor(id, name, color, mascot, skillSet, yearsExperience) {
    super(id, name, skillSet, yearsExperience)
    this.color = color
    this.mascot = mascot
    this.skillSet = skillSet
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

const makePlayer = (id, name, i) => {
  new Player(id, name).addPlayer()
  const h1 = document.getElementById("people")
  const li = document.getElementById(i)
  h1.remove(li)
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
