// function sayhello(username , userinput){
//     return "hello " + username + userinput
// }

// console.log(sayhello("dao","ja"))

// function distance(p1, p2) {
//     console.log(typeof p1);//object
//     console.log(typeof p2);//object// **‐The exponentiation assignment operator
//     return Math.sqrt(((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2));
// }
//     console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 }));//1.4142135623730951

// for (let i = 0; i < 3; i++) {
// let soom = Math.floor(Math.random() * 100) + 1;
// console.log(soom)
// }

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