/*Function which executes immedately is Called as Immediately Invoked Function Expressions IIFE
There occurs problem due to Global scope polution to avoid that we use IIFE
 */
// ()() - IIFE -- 1st- Function Defination  ||  2nd- Function exection call

// IF we're using IIFE anywhere in code then please end that code by giving semi-colon ; bcz this functions get inkoed but don't know where to stop the context
//eg--
// 
( function car(){ // we can call it as named IIFE -as Name is given to functN
    console.log("Cars");
})();
// This Above IIFE is also called as named IIFE


//We can also use Arrow functions inside IIFE
(()=>{
    console.log(`Cars`);
})();
// This Above IIFE is also called as unnamed IIFE


// Arrow FunctN in IIFE with parameters
((name)=>{
    console.log(`${name}, Car`);
})("Nishad's");
// Here "Nishad " is argument and 'name' on line 13 is parameter
// In this Above IIFE parameter is also paseed