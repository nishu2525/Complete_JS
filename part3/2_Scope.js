{}  //when this bracess comes with function or if-else statement then it is called as scope
if (true){
    let a=10;
    const b=20;
    var c=30;
}
// console.log(a);
// console.log(b);
// console.log(c);
/*
Here Let & const are scope variable that's why it can't be executed outside the scope 
So in above eg only  console.log(c); will execute and to execute console.log(a); and console.log(b); write this lines inside scope i.e--   {}
and if I have " let a=10;" inside scope and " let a=30;" outside scope then " console.log(a)" (Line no 7) will be printed as 30
*/


// When You run in console(Browser) -scope is different and in Node environmnet scope is different

console.log("----------------------Nested Scope--------------------------");
/*  nesting Works very simple-- Child Can Take ice-cream from his parents but parents can't take it from child 
 */

function one (){
    const name="Nishu";
    function two(){
        const age=25;
        console.log(name);
        console.log(age);
    }
    two()
}
one()
/* Here Simple thing applies that is, child component can access parent bt parent cannot access child 
    Bachha mummy ke pass ki ice-cream le sakta but mumma bache ki ice-cream legi to wo problem hoga 
    yhis concept is also called as clouser */



    // IF_ELSE
 if(true){
    const username="Nishad"
    if(username==="Nishad"){
        const id=" Developer"
        console.log(username + id);
    }
    // console.log(id);
 }
//  console.log(username);

console.log("-------------------Hoisting  overview-----------------------------");


 function addone(num){
    return num+1
 }
 addone(5)

 const addTwo=function(num){
    return num+2
 }
 addTwo(5)
// here Both The things are same- both ways to declare fuunction is same, we can use use vaiables to store functions also 


// here we are declare function execution before function defination
add1(5)
function add1(num){
    return num+1
 }
 // If we do so then also it will run/execute 

 // But if we're using variables then we Cannot access 'add2' before initialization
 add2()
 const add2=function(num){
    return num+2
 }
 // This is called as Hoisting--we cannot execute before declaration