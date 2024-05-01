
const user={
    username:"Nishad",
    Price:999,

    welcomeMsg:function(){
        console.log(`${this.username}, welcome to our website`);
 /*Whenever you are referring current context we use this 
eg:- this.name,this.price*/

// console.log(this);// Will Give Object of complete Object[ user ] 
        // { username: 'Nishad', Price: 999, welcomeMsg: [Function: welcomeMsg] }     
    }
}
// user.welcomeMsg() // Nishad, welcome to our website
user.username="Yash"
// user.welcomeMsg() // Yash, welcome to our website

// console.log(this);// If You Do So in node envirnoment You'll get Empty Object {}
// But in Browser Envirnoment You'll get Window Object
/* IN Browser  Global Object is Window Object that's why we can perform all window events */
// 'this' in Functions 

function cars(){
    // console.log(this)
}
cars()
// When You Run console.log(this) in Any Function in Node enirnoment -you get many values .


console.log("----------This In Functions--------------");
// but if you Run console.log(this) in Functions you'll get undefiened -- You can use 'this' in Objects not in Functions
function Bikes(){
    let username="Nishad"
    // console.log(this)// Global
    console.log(this.username) // Undefined 
}
Bikes()
// wheather we declare "this" in functN which are declared in another way , it won't work
/*const bikesWala = function(){
    let username="Nishad"
    // console.log(this)// Global
    console.log(this.username) // Undefined 
}
bikesWala()
*/


console.log("----------Arrow Functions--------------");

// Just Remove function Keyword  and add = after variable name,create arrow => in betN ()paranthis and Braces {} 
// ()=>{}  // -- Arrow FunctN
// 'this' in  Arrow Functions 

const bikers = ()=>{
    let username="Nishad"
    console.log(this)// {} // But in Browser Envirnoment You'll get Window Object
    // console.log(this.username) // Undefined 
}
bikers()



// we can declare arrow functN inside variables also
const addNum=(num1,num2)=>{
    return num1+num2
};
console.log(addNum(5,5));// 10

// Implicit(maan leta hu ) Return Arrow FunctN 
const add=(num1,num2)=>num1+num2;// You can Also write it as (num1+num2) for convinence
// But If You Write inside {} you have to write return Keyword
console.log(add(5,5));//10

// but what if we want Object to be returned
// we cannot return object directly we'll get undefined  
// const addTwo =(num1,num2)=>{user:"nishu"} // undefined 
const addTwo =(num1,num2)=>({user:"nishu"})// here it works 
console.log(addTwo());//{ user: 'nishu' }



/* Ways to declare function 
function (){}    //  FunctN
()=>{}    // Arrow FunctN
()=>()   //Implicit Arrow FunctN
*/

