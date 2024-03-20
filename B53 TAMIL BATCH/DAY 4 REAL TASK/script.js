// QUESTION : 1
//? ANONYMOUS FUNCTION :
// a):Print odd numbers in an array

// const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// A.forEach(function (A) {
//   if (A % 2 !== 0) {
//     console.log(A);
//   }
// });

// c):Sum of numbers

// const num = [1, 2, 3, 4, 5];

// const sum = function (arr) {
//   let total = 0;
//   arr.forEach(function (number) {
//     total += number;
//   });
//   return total;
// };
// const result = sum(num);

// console.log("Sum:", result);

// d):Return all the prime numbers in an array:

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const getPrimeNumbers = function (arr) {
//   return arr.filter(function (number) {
//     if (number < 2) {
//       return false;
//     }
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   });
// };

// const primeNumbers = getPrimeNumbers(numbers);

// console.log("Prime Numbers:", primeNumbers);

// e): Return all the palindromes in an array:

// const words = ["DAD", "MOM", "QUEEN"];

// const getPalindromes = function (arr) {
//   return arr.filter(function (word) {
//     const reversed = word.split("").reverse().join("");
//     return word === reversed;
//   });
// };

// const palindromes = getPalindromes(words);

// console.log("Palindromes:", palindromes);

// G):Remove duplicates from an array:

// const numbers = [0, 5, 7, 3, 9, 5, 3, 9, 0, 8, 4, 3];

// const removeDuplicates = function (arr) {
//   return arr.filter(function (item, index, array) {
//     return array.indexOf(item) === index;
//   });
// };

// const uniqueNumbers = removeDuplicates(numbers);

// console.log("Array without duplicates:", uniqueNumbers);

// H):Rotate an array by K times:

// const elements = [2,4,8,6,4];

 
// const rotateArray = function(arr, k) {
//   k = k % arr.length;  
  
  
//   const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  
//   return rotatedArray;
// };

 
// const k = 3;

 
// const rotatedElements = rotateArray(elements, k);

// console.log(`Array after rotating ${k} times:`, rotatedElements);
