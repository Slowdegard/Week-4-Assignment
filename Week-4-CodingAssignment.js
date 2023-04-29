// Week 4: Coding Assignment
// Noah Odegard

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // I was unsure if I had to print the initial array to the console.
console.log(ages); // The instructions for the assignment say that "All questions should be printed to your browser's console"
// So, I wasn't sure if 1, 1a, 1b, and 1c were all questions that needed a console log and erred on the side of caution by doing it anyways lol.

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.

let difference = ages[ages.length - 1] - ages[0]; // This subtracts the first and last elements. Meaning I could push as many numbers to this array -
console.log(difference); // Output: 90            // - and it will always subtract the first element from the last. 


// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic.

ages.push(50); // this adds a new age
difference = ages[ages.length - 1] - ages[0];
console.log(difference); // Output: 47


// 1c. Use a loop to iterate through the array and calculate the average age.

let sum = 0;
for (let i = 0; i < ages.length; i++) {
sum += ages[i];
}
let average = sum / ages.length;
console.log(average); // Output: 31.1111


// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLength = 0;
for (let i = 0; i < names.length; i++) {
totalLength += names[i].length;
}
let averageLength = totalLength / names.length;
console.log(averageLength); // Output: 3.83333333


// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
concatenatedNames += names[i] + ' ';
}
console.log(concatenatedNames.trim()); // Output: Sam Tommy Tim Sally Buck Bob


// 3. How do you access the last element of any array?
// You can access the last element of an array using the index position of (array.length - 1) like this:

let myArray = [1, 2, 3];
console.log(myArray[myArray.length - 1]); // Output: 3


// 4. How do you access the first element of any array?
// You can access the first element of an array using the index position of 0 like this:

console.log(myArray[0]); // Output: 1


// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length);
}
console.log(nameLengths); // Output: [3, 5, 3, 5, 4, 3]


// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumOfLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
sumOfLengths += nameLengths[i];
}
console.log(sumOfLengths); // Output: 23


// 7. Function to concatenate a word n times:

function concatenateWord(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
console.log(concatenateWord("Hello", 3)); // Output: "HelloHelloHello"


// 8. Function to return a full name:

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("John", "Doe")); // Output: "John Doe"


// 9. Function to check if the sum of an array of numbers is greater than 100:

function isSumGreaterThan100(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum > 100;
}
console.log(isSumGreaterThan100([20, 30, 50])); // Output: true


// 10. Function to calculate the average of an array of numbers:

function getAverage(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum / numbersArray.length;
}
console.log(getAverage([2, 4, 6, 8])); // Output: 5


// 11. Function to compare the averages of two arrays of numbers:

function isAverageOfFirstArrayGreaterThanSecond(firstArray, secondArray) {
  let firstArrayAverage = getAverage(firstArray);
  let secondArrayAverage = getAverage(secondArray);
  return firstArrayAverage > secondArrayAverage;
}
console.log(isAverageOfFirstArrayGreaterThanSecond([1, 2, 3], [4, 5, 6])); // Output: false


// 12. Function to check if it is hot outside and if there's enough money to buy a drink:

function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 15.00)); // Output: true


// 13. Function to calculate the factorial of a number:

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // Output: 120

// I created this function because calculating the factorial of a number is a common problem in 
// mathematics and computer science, and it can be useful in various applications.