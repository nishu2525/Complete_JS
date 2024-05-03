/**
 Strings cam be denoted by " " and ''
 instead of concating string using + try using ``(backtick)
 */
// type of Strings = Object 
let firstName="Nishu"
console.log(`My name is ${firstName}`) //  backtick eg:-  // My name is Nishu
//we can add value with help of ${} in ``
// if we do
console.log(firstName[0]);//N
console.log(firstName.__proto__); // applicable in chrome   -  prtotypes 
console.log(firstName.length);// 5
console.log(firstName.toLowerCase()); // nishu
console.log(firstName.charAt(2));//s
console.log(firstName.indexOf('N'));//0
console.log(firstName.slice(0,3));//Nis
// In .slice () we can also use -ve value also
console.log(firstName.slice(3,-1));//h
console.log(firstName.trim());// removes starting and end space 
console.log(firstName.replace('u','ad'));// Nishad 
console.log(firstName.includes('C'));// false - does this value contains or not 

let Name = 'Nishad-Umap';
console.log(Name.split('-')); // [ 'Nishad', 'Umap' ] - here  split is done using ('-') and Array is formmed



