// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const arrOfDodgeballPlayers = [];
const blueTeam = []
const redTeam = []

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

class Person{

  id; 
  name;
  age;
  skillSet;
  placeBorn; 

  constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn){
    this.id = inputId; 
    this.name = inputName;
    this.age = inputAge;
    this.skillSet = inputSkills;
    this.placeBorn = inputPlaceBorn; 
  }
}

class DodgeballPlayer extends Person{
 
  canThrowBall; 
  canDodgeBall; 
  hasPaid; 
  isHealthy;
  yearsExperience; 

  constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn, inputCanThrowBall, inputCanDodgeBall, inputHasPaid, inputIsHealthy, inputYearsExperience){ 
    super(inputId, inputName, inputAge, inputSkills, inputPlaceBorn); 
    this.canThrowBall = true;
    this.canDodgeBall = true;
    this.hasPaid = true;
    this.isHealthy = true;
    this.yearsExperience = 10; 
  }

  addToDodgeBallPlayerList(){
    arrOfDodgeballPlayers.push(this); 
  }
}



class blueTeam extends Person{

  color;
  mascot; 

  constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn){
      super(inputId, inputName, inputAge, inputSkills, inputPlaceBorn); 
      this.color = 'blue'; 
      this.mascot = 'seals';
  }

}

class redTeam extends Person{

  //include 2 new properties called color and mascot with the values 'red' and 'red cougar' appropriately 
  
  color;
  mascot;

  constructor(inputId, inputName, inputAge, inputSkills, inputPlaceBorn){
    super(inputId, inputName, inputAge, inputSkills, inputPlaceBorn);
    this.color = 'red';
    this.mascot = 'cardinals'; 
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



const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
}



// FOR NEW PERSON INPUT FORM
let newPerson = []; // array to be populated with form submission data ** push to class/objects?

const addNewPerson = (ev) => {
  ev.preventDefault(); // to stop form submitting 
  let newPersonForm = {
    id: Date.now(), // need to figure out how to put into object class ID numbers?!
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    skillSet: document.getElementById('skillSet').value,
    placeBorn: document.getElementById('placeBorn').value
  }
  newPerson.push(newPersonForm);
  document.querySelector('form').reset() // to clear form for next entries
}
//saves to local storage -- DO I REALLY NEED THIS??
//NOW NEED TO BE ABLE TO FIGURE OUT HOW TO CONNECT IT INTO OBJECT CLASS?!
localStorage.setItem('newPersonLocalStorage', JSON.stringify(newPerson));


document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('submit').addEventListener('click', addNewPerson);
}
);




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
