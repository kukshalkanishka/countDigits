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

exports.countDigits = countDigits;
