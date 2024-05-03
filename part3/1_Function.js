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

console.log('------------------------------------');

function calculateprice (num1){
    return num1;
}
console.log(calculateprice(200,400,500,5000));//200
// Now in this case only 200 will be printed , bcz only 1 varibale is there  

// ...  this is also called as rest and spread operator 
// but to print all values use rest operator ...
function calculateprices (...num1){
    return num1;
}
console.log(calculateprices(200,400,500,5000)) // [ 200, 400, 500, 5000 ]

function calculate_Prices (val1,val2,...num1){  //If we add any variables with comma then values from starting will be considered inside it and it can't print it
    return num1;
}
console.log(calculate_Prices(200,400,500,5000))// [500, 5000]

console.log("-------------Passing Object in Function-----------------------------------");
const user={
    username:"Nishad",
    id:299
}
function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and id is ${anyObj.id}`);
}
handleObj(user)
// here instead of Obj-user we can direclty pass an Object


handleObj({
    username:"Vaidu",
    id:199
})


console.log("-------------Passing Arrays in Function-----------------------------------");

const myArray= [ 200,400,600,500,5000 ]

function returnVal2(getArray){
    return getArray[1]
}
console.log(returnVal2(myArray));//400

// here instead of Array-myArray we can direclty pass an Array
console.log(returnVal2([ 200,400,600,500,5000 ]));//400
