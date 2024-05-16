// -----------------Map----------------------

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newnum = nums.map((num) => num); 
console.log(newnum)

 newnum = nums.map((num) => {num+10}); // if we write this num+10 inside {function} then we'll get an array containing undefined  
console.log(newnum)

// --but
newnum = nums.map((num) => {return num+10}); // -- but we write 'return' keyword inside function scope then we'll get values
console.log(newnum)

// In Filter If we  ((num) => {num+10})  then we'll get empty array []
// whereas in map if we do so ((num) => {num+10}) we'll get an array conatining undefined, as many ammount as it contains element


console.log("-----------------Chaining----------------------");
// result of 1st goes to 2nd
const newNums = nums
                .map((num) => num * 10 )  // [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
                 .map( (num) => num + 1) // [ 11, 21, 31, 41, 51, 61, 71, 81, 91]
                 .filter( (num) => num >= 40) // [ 41, 51, 61, 71, 81, 91 ]
console.log(newNums);