let assert = require("assert").equal;

const countDigits = function(number) {
  let divisor = 10;
  let counter = 0;
  let remainder = 0;
  while(number!=remainder){
    remainder = number % divisor;
    divisor*=10;
    counter++;
  }
  return counter; 
}

const main = function(){
  let inputNumber = +process.argv[2];
  let expectedOutput = +process.argv[3];
  let count = countDigits(inputNumber);
  assert(count,expectedOutput);
  console.log(count);
  return;
}

main();



