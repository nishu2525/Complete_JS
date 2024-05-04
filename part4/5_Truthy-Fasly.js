// Some True & False Conditions 
// when there's a ____________ it is considered as ____
/*    
     1.string --  true 
     2.Empty string --  False 
     3.Empty Array- true 
*/
/* All Falsy values 
1. false 
2. 0
3. -0
4. BigInt
5. 0n
6. ""
7. null 
8. undefined
9. NaN
 */

/* All Truethy values 
1."0" -Zero in string
2. 'false' -  false inside string(here false is just a word)
3. " "  - string with space 
4. []
5. {}
6. function(){}  -empty fuction
*/

// false == 0 // true 
// false == ''  //true
// 0 == ''  // true


// Nullish Coalescing operator (??) : null --  undefined 
// this is use when you are getting any value from DB or API or anywhere ,many a times we dont get any value {null or undefined }, so in that case to avoid null & undefined we use ??
// this operator will checks safety for null & undeifined and gives value 
let val1;
val1=5 ?? 10  // 5
val1=null?? 10  //10
val1= undefined ?? 15  //15
val1= null ?? 10 ?? 20 // 10  // gives Always first value except null & undefined 
console.log(val1);


// Nullish Coalescing operator and ternary operator are 2 differenrt things 
// terninary operator 
// condition ? true : false;
// Eg.
const price =100;
price < 50? console.log("less than 50 "):console.log("More than 50"); 

