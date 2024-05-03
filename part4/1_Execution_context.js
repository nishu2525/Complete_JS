/*
Javascript execution context- how javascript will run the file or execute it.

Whenever we give code to JS it creates a Global Execution context inside "this" variable  
(browser and Node has differnt Global execution Context, every environment has differne execution context)
In Brower value of "this" is "window Object"

            1. Global execution coontext
            2. Function/Functional execution context
                            // Uper 2 are only imp 
            3. Eval execution coontext{ Property of Global Object--comes with moongose}

Javascript is Single Treaded

Code will execute/run in two phase
1. Memory creation Phase (creation Phase)- Place is Allocated For variables(or whatever ) created 
2. Execution Phase - To Execute
*/

/*
How Code Executes in JavaScript  -- Understandings
        1. Global execution context and allocated to 'this' .
        2. Memory Creation phase -all variables are created and just kept here 
                i. Firstly When "Variable is created" -  "undefiened" is by defalut value
                ii. When "Function is created" - "Function Defination" is by defalut
        3. Execution Phase 
                i. Values which are given are now assigned to variables/Functions
                ii. All Expressions (mathematical/Logical)executes
        ... Whenever a function executes a new block is created --i.e -executional context which consist of 
                            i. new variable environment  }
                            ii. Execution Thread         }   -- after work is done it(new block) get's deleted
                and inside this block again (Whenever a function is created )
                            a.Memory Creation phase 
                            b.Execution Phase 
             Whenever a function executes and reutrns value in Global/ parent executional context
 */ 
// How Code Executes in JavaScript  -- code  
                 // memory phase    // Execution phase 
let val1=10;   // undefiened       //10
let val2 =5;   // undefiened       //5
function addNum (num1,num2){// defination 
let total =num1 +num2 //         // 10+5
return total          //        //15
}
let result1= addNum(val1,val2) //undefiened     // As same a aBove Functn
let result2= addNum(10,3)     // undefiened      // As same a aBove Functn
console.log(result1); // 15
console.log(result2); // 13
                
         



/*
Call Stack --
         1.  Global execution - then for all functions a new block is created, after work is done it(new block) get's deleted
         when there are many functions each function executes as per line by line 

         Now what if There is 1 function inside it another function is called and another one function is called inside it.
         Eg:-
                function one(){
                    two(
                        three()
                    )
                }
        Then here which function comes out of Global execution  conetxt --- so here comes LIFO---- i.e last in first out 

*/

//Code____ Example
function one(){
        console.log("one");
       
    }
    function two(){
        console.log("two");
       
    }
    function three(){
        console.log("three");
    }
    one()
     two()
     three()
    