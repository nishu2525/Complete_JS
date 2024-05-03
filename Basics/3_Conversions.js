let score = "Nishad"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN -- but type of NaN is Number
//  true => 1; false => 0

let isLoggedIn = "Nishad"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);
// Boolean Conversion 
// 1 => true; 0 => false
// "" => false
// "Nishad" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ----------- Operations -----------

let value = 3
let negValue = -value
// console.log(negValue);// -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Nishad"

let str3 = str1 + str2
// console.log(str3);



// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3);
// console.log(true);//true
// console.log(+true);//1
// console.log(+"");// 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// ---------------- Camparions ---------------------

/*
While comparing Datatype should be same 
*/
console.log(null>0);//false
console.log(null==0);// false
console.log(null>=0);// true
// here null is converted to 0
//this is due to comparision 

console.log(undefined==0);// false
// above types of conversions should be avoided bcz this creates confusion
// Strick check 
console.log("2"== 2); // true 
console.log("2"=== 2);// false
// here in Strick check datatype is also checked 



