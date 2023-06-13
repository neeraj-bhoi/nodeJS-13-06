// Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.


function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
  
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  let inputString = "Hello, World!";
  let result = countVowels(inputString);
  
  console.log("Number of vowels: " + result);
  