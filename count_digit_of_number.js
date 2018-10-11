let assert = require("assert").equal;
let countDigits = require("./count_digits_lib.js").countDigits;

const main = function(){

  let count = countDigits(4244323);
  assert(count,7);
  count = countDigits(333);
  assert(count,3);
  count = countDigits(424324323);
  assert(count,9);
  count = countDigits(42443);
  assert(count,5);

  console.log(count);
  return;
}

main();



