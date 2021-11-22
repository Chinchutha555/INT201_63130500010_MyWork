let greeting = 'hello';
let someone = 'Umaporn';

function say(sentence) {
  //sentence is local variable, using within say() function only
  console.log(`${greeting}, ${someone}`);
  console.log(`${sentence}`);
}

say('Today is Tuesday');
// console.log(`sentence: ${sentence}`); //cannet refer sentence variable
console.log(`greeting: ${greeting}`);
console.log(`someone: ${someone}`);
say('Yesterday is Monday');

//--------------------------------------------------------------------------------------------
let greeting = 'hello';
let someone = 'Umaporn';
//global scopt: greeting, someone, num, say

function say(sentence) {
  greeting = 'hi';
  let words = 'Good bye';
  return `${greeting}, ${someone}, ${sentence}, ${words}, ${num}`;
}

let num = 10;
// console.log(words);
console.log(say('Today is Tuesday'));

//--------------------------------------------------------------------------------------------
let greeting = 'hello';
let someone = 'Umaporn';
//global scope: greeting, someone, num, say

function say(sentence) {
  //non-pure function
  //local scope: sentence, words
  greeting = 'hi'; //greeting is a free variable
  let words = 'Good bye';
  return `${greeting}, ${someone}, ${sentence}, ${words}, ${num}`;
  //someone and num are a free variable
}

let num = 10;
// console.log(words);
console.log(say('Today is Tuesday'));
someone = 'Songglod';
console.log(say('Today is Tuesday'));
//pure function
//non-pure function