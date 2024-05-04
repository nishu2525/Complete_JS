
    //How If Block executes 
// if(condition===true){console.log("heyy");}// if (condition (if this condition is true then scope will executes)){scope block}
/*
< less than
> greater than
<= less than equal to (Ya to value choti ho ya phir equal)
=! not equal to. {returns true whereas equality would return false and vice versa}
= means assigning value 
== checks is equal   2=="2" //true
=== checks type (datatype)and value   2==="2" //false
!== strick checking
*/
// if(){} 
// else if(){}  // Ye [if] nahi to ye [else if]
// else if(){}  
// else{}       // kuch nahi to ye

const userloggedIn=true;
const  isRegularuser =true
let isPremium=false;
if(userloggedIn && isRegularuser || isPremium){
    console.log("Welcome to Home page");   
}
 isPremium=true;
if(userloggedIn && isPremium)
{
    console.log("Welcome to premium page");
}
