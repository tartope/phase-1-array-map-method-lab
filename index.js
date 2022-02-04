const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Your job is to write the following function:

// titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data.
// NOTE: This lab is challenging! You will need to iterate through the tutorials array, modifying the name of each tutorial. To do this, you will also need to access and modify each individual word.

// Some questions to consider:

// How can we "iterate" through individual words in a string?
// Can we execute an iteration inside an iteration? How?
// How can we capitalize just the first letter in a word?
// A couple of hints:

// Break the task into smaller chunks: using the console or a REPL, start by figuring out how to modify one individual element in the tutorials array. Once you've got that working, then figure out how to update the array itself.
// Use Google!!


// const titleCased = tutorials.map(function(firstLetter) {
//   return tutorials.charAt(0).toUpperCase();
// });

// Use forEach to iteratate through the pokemons array and return each character name in large caps

// Searching an array: .find() vs .filter()
// arr = ['cat', 'fish', 'dog']                            my example line 64-68
// console.log(arr.find((el) => el === 'dog'))

// let results = arr.filter((el) => el.startsWith('d'))
// console.log(results)

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?

// let results = pokemons.filter(char => char.startsWith('S'))       my example line 72-73
// console.log(results)

// Modifying an arrays elements

// let newArr = pokemons.map(el => el.toLowerCase())             //my example line 77-78
// console.log(newArr)

// let newArr = pokemons.map(function(el){         //my example line 80-83
//     return el.toLowerCase()
// })
// console.log(newArr)

// function titleCased(){
// //   // console.log(tutorials.find((el) => el === 'what does the this keyword mean?'))
// //   // for (const i = 0; i < str.length; i++) {
// //   //   console.log(str.charAt(i));
// //   //   return str.split(' ').map(item => item.join(' '));
// //   // }
// }

//make a function call titleCased().
//it returns an array with title case tutorial names. 
//this function takes no arguments and should use the global tutorials variable as data.

function titleCaseload(){
  let newTutorials = tutorials.map(item => {
  
  })
}
console.log(titleCaseload())