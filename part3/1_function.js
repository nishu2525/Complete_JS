//Functions are Simple --whatever code(multiple lines of code ) you write in, is packed in packet and servered 
// How to Write Functions
function  myName(){   // function(Keyword) (Defination of FunctN) nameof-Funtn paranthesis() Scope/Defination{}
   // console.log("Nishad");
  //  console.log("Umap");
} 
myName()//Now this is called Functn reference ,Without ()its-reference [It can't run] and with ()-and its execution
// If you want to pass anything to that functN then declare it in ()in function Defination

function add(num1,num2){ // here num1,num2 are parameters 
    console.log(num1+num2);
}
// add(2,5)//7  Here values passed is called as Arguments 
// add(2,"5")//25
// add(2,"n")// 2n
// add(2,null)//2
// add(2,true)//3 // As True =1 & false =0
// let val=add(2,5)// If we do so 
// console.log(val);// undefined -- Values are just passes not returned
// But if we Return this in function then we will not get val=undefined 
// after return statement is written in funcion no code is executable

function sub(num1,num2){ // here num1,num2 are parameters 
    let val=num1-num2; // And Here the variable name 'val' and variable name 'val' on line 17 is not related as bcz scope of 'val' on line 23 is limited for this funcTn only
    return val;
    console.log("Nishad") // This will not execute as its writen after return 
}
let subvalue= sub(5,3)
// console.log(subvalue) //2 

console.log('-----------------------------------------------------------');


function login(user){ 
    return `${user} Just Logged in`
}
login('Nishu')// here functN is executed but we did'nt ask to print so this line will not print any thing
// console.log(login());//undefined Just Logged in-- as no value is passed in arguments 
console.log(login('Nishad')); //Nishad Just Logged in


// passing default value to avoid line no. 38 issue
function login(user="Unknown User"){ 
    return `${user} Just Logged in`
}
console.log(login());//Unknown User Just Logged in-- as no value is passed in arguments 
