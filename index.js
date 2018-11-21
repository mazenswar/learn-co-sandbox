/*var word;
word = 'bird';
console.log(word);
word = 'dog';
console.log(word);
*/

function doNothing() {
  
}

function sayHello() {
  console.log('Hello!');
}

function sayHelloToIsabel() {
  console.log('Hello, Isabel!');
}

function sayHelloToSofia() {
  return 'Hello, Sofia!';
}

function sayHelloToBrendan() {
  return 'Hello, Brendan!';
}

// sayHello();
//sayHelloToIsabel();
//sayHelloToSofia();
//sayHelloToBrendan();


//JS Callbacks

function doTo5(anything) {
  return anything(5);
}

function divide10ByN(n){
  return 10 / n;
}

doTo5(divide10ByN);

function appendToHello(s) {
  return `Hello ${s}!`;
}


if(7=="7") {
  console.log(true);
}
