/*
Js Engine is hidden in browser

alert(2+5) // if we run this line in Browser then it will respond bt as we are using node.js so here it can't run
 
Code Should be readable
the official document fo JS is https://tc39.es/ecma262/
& mdn docs 

*/
 
let age=25;
let isSingle=true;
let Name="Nishad";
let job;
/*
DataTypes in JS

1. Primative DataTypes 
number -- range is 2 to the power 53

bigint -- only when big no is used not in daily life

boolean -- True / False

string -- String {Can Use "" or '' or (templeate literals)``}

null -- standalone value / absence of an object

undefined -- Value Not yet assigned

symbol -- uniquness

2. Non-Primative DataTypes 
Objects-- Collection of Values 
Generally in obj we store key:value pair.
Generally we declare objs by const

{Typeof null-object}
{Typeof undefined-undefined}
*/

const studuent={
   fullName:"Nishad",
   age:25,
   cgpa:8.19,
   isPass:true,
}
console.log(studuent["age"])
console.log(studuent.age)
// both is Correct 

/*
we can't update const bt we can update key in const object*/

// Datatypes Brushup v.9

/*
datatypes are of 2 types depends on how data is kept in memory and accessed

1. Primitive- call by value 
when you call this datatypes - original ref is not its copy is given  --7 types--

      i. String 
      ii. Number 
      iii. Boolean
      iv. null - empty 
      v. undefined - varible is declared bt value is not given
      vi. Symbol
      vii. BigInt
2. Non-primitive (reference type)-
      i. Array
      ii. Objects
      iii. Functions
JS is dynamically typed lang.
here no need of declaring Datatype every time we declare variable 

eg:- In Java --- 
int num =10;   -- here we declare type (int)
in JS ----
const num =10;

*/
const id =Symbol('123')
const idTwo =Symbol('123')
console.log(id=== idTwo);// False
/* 
Array - []
Object -{}
function (){} --(Fuction defination)
*/
// We can store them in Varibales



// Type of 
/* type of null- Object 
type of undefined - undefined 
type of Boolean- "boolean"  
type of Number- "Number" 
type of String - String  
type of (Object , Array, function)- object
*/
