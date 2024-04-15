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

