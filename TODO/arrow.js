//1.
function helloSomeone(name) {
    return `Hello, ${name}`;
  }

const helloSomeone = name => `Hello, ${name}`;

//--------------------------------------------------------------

//2.
function area(width, height) {
    return width * height;
  }

const area = (w, h) => w * h;

//--------------------------------------------------------------

//3.
function evenNum(num) {
    if (num % 2 === 0) return true;
    else return false;
  }
  
const evenNum = num => (num % 2 === 0);

//--------------------------------------------------------------

const random = (param, param, ...) => {
    statement 1
    statement 2
    statement 3
    return value;
}

console.log(helloSomeone('asdas'));
console.log(area(2, 3));
console.log(evenNum(654655));

