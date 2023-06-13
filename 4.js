// Write a JavaScript program that uses a while loop to reverse a given number.


function reverseNumber(num) {
    let reversedNum = 0;
  
    while (num !== 0) {
      reversedNum = reversedNum * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
  
    return reversedNum;
  }
  
  let inputNumber = 12345;
  let result = reverseNumber(inputNumber);
  
  console.log("Reversed number: " + result);
  