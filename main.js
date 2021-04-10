'use strict';

//brings in the assert module for unit testing
//const assert = require('assert');

//  Work through business logic for functionality- then create input form for DOM:

const arrOfPeople = [
  {
    id: 2,
    name: "Seamus Gonsalez",
    age: 25,
    skillSet: "ball thrower",
    placeBorn: "Milwaukee, Wisconsin"
  },
  {
    id: 3,
    name: "Qwilleran McTavish",
    age: 18,
    skillSet: "lego enthusiast",
    placeBorn: "London, England"
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
  constructor(id, name, index, age, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.id = id
    this.name = name
    this.index = index
    this. age = age
    this.canThrowBall = true
    this.canDodgeBall = true
    this.hasPaid = true
    this.isHealthy = true
    this.yearsExperience = age - 8
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
      addTeammate(uniqueId, uniqueName, "Blue", "The Blue Balls", this.index)
    })

    const button2 = document.createElement("button")
    button2.innerHTML = "Red Team"
    button2.addEventListener("click", function () {
      addTeammate(uniqueId, uniqueName, "Red", "The Red Death", this.index)
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
  const listElement = document.getElementById("people")
  arrOfPeople.map((person, index) => {
    const li = document.createElement("li")
    li.setAttribute("id", index)
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person.id, person.name, li.id)
    })
    li.appendChild(button)
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    )
    listElement.append(li)
  })
}

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

function clearList(){
  document.getElementById("people").innerHTML = ''; 
}


// UNIT TESTS:

if (typeof describe === "function") {
  describe("Player", function () {
    it("Should create a player", function () {
      const player1 = new Player(1, "Qwilleran McTavish")
      assert.strict(player1.name, "Qwilleran McTavish")
      assert.strict(player1.id, 1)
    })
  })
  describe("Teammate", function () {
    it("Should create a blue teammate", function () {
      const teammate1 = new Teammate(1, "Qwilleran McTavish", "Blue", "Mascot")
      assert.strict(teammate1.name, "Qwilleran McTavish")
      assert.strict(teammate1.id, 1)
      assert.strict(teammate1.color, "Blue")
      assert.strict(teammate1.mascot, "Mascot")
    })
    it("Should create a red teammate", function () {
      const teammate1 = new Teammate(1, "Qwilleran McTavish", "Red", "Mascot")
      assert.strict(teammate1.name, "Qwilleran McTavish")
      assert.strict(teammate1.id, 1)
      assert.strict(teammate1.color, "Red")
      assert.strict(teammate1.mascot, "Mascot")
    })
  })
}
