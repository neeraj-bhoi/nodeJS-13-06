// Write a JavaScript program that checks if a given string is a palindrome.


function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

let inputString = "racecar";
let result = isPalindrome(inputString);

console.log("Is palindrome? " + result);

  