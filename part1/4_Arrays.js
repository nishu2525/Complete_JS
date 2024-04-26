/* Array is a Object which enables storing of multiple items under a single variable
 Arrays in JS are Re-sizeable
 It can of mixed datatypes 
 array accepts any type of data
*/
let cars=["tata","Mercy","bmw","Volvo"]
const bikes=["Hero","Yamaya","kavasaki"]
//... spreads all values (spread operator )
const vehicles=[...bikes,...cars]
console.log(vehicles);

// Methods 

cars.push("citron") // adds new value to array in last 
console.log(cars);
cars.pop()  // removes value from last in array   
console.log(cars);
cars.unshift("Maruti")  // adds new value to array in first 
console.log(cars);
cars.shift()  // removes first value from array    
console.log(cars);

// quetsioning methods 
console.log(cars.includes("Hero")); // false - as value is not present in this array 
console.log(cars.indexOf("bmw")); // 2 - gives index value of elemnet in an array
// and if we enter any element which does not exist we'll get -1 as value

// join methods takes complete array but also convetrs it to string 
const allcars = cars.join()// and if we provide any value in it ,it will seperate each element with that value  
console.log(allcars);
console.log('-------');
console.log("A ", cars);
const myn1= cars.slice(1,3)// here last value is neglected 
console.log(myn1);
console.log("B ", cars);
const myn2= cars.splice(1,3)// and here last value included
// but in splice main array also changes 
console.log(myn2);
console.log("C ", cars);
console.log('------');


// More on Arrays Methods 
// if we do concat or push - to add 2 more arrays its not good practise , use spread operator


let Tata = ['Tiago','Tigor','Altroz']
let bigTata= ['Punch','Nexon','Harrier','Safari']
// Tata.push(bigTata);
// console.log(Tata.push(bigTata));// here another array is created inside main array 
const Tcars =Tata.concat(bigTata); //  concat returs new array and push works on existing array
// console.log(Tcars);
//  execute concat and push seperately 

// instead of doing any of above use spread operator 
const tatacars =[...Tata,...bigTata]
console.log(tatacars);


console.log('----More on Arrays---');

const a1=[1,2,3,[4,5,6,[7,8,9]]]
const ra1=a1.flat(Infinity)
// flat-- returns new array with all sub array elements concatenated into it recursively upto specific depth
console.log(ra1)


console.log(Array.isArray("Nishad")); // tells us is given thing is array or what 
console.log(Array.from("Nishad")); // Convert given thing to array
console.log(Array.from({name:"Nishad"})); // This can't identify of what to make array 
let S1=100;
let S2=200;
let S3=300;
console.log(Array.of(S1,S2,S3));// Returns new array from set of elements  


/*
push works on existing array and 
concat returns a new array 
spread - faila deta hai values 
*/