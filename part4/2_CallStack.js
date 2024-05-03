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
