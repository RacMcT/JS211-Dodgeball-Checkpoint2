
//PROMOPT: Write a recursive function for generating all permutations of an input string. Return them as a set.

// cat
// act
// tac
// answer 9

let str = "act"
let index = 0;
let chars = str.length

function permutate(str, index, chars) {


  if (index == chars){
    console.log(strSet)
  }

  for (let i = index; i < chars; i++){
    str = swap(str, index, i)
    permutate(str, index+1, chars)
    str = swap(str, index, i)
  }
}

function swap (str, index, x){
  let newArr = str.split('')
  let temp = newArr[x]
  let current = newArr[index]

  newArr[x] = current
  newArr[index] = temp

  if (!strSet.has(newArr.join(''))){
    strSet.add(newArr.join(''))
  }

  return(newArr.join(''))

}
let strSet = new Set ()

permutate(str, index, chars)