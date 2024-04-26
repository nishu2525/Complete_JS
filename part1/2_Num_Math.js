const score =100
console.log(score); // 100
// here we declare a num/digit directly but we are'nt sure that num coming is Number, may be its a String 

const bday =new Number(25)
console.log(bday); // [Number: 25]
// But here we are sure that Digit/Num coming is a Number

/*If You write this in browser you will get many properties(Function) for number

we can use this methods 
eg:-   .toString(),now as its converted to string now we can also calculate its length

.toFixed()  -- this method helps in getting decimals . If You write .toFixed(2) that means after . only 2 decimal digits will occur  eg- 100.00
.toPrecision()  --It gives presicion value of num , bt It counts from starting of num ,so be carefull.
eg-*/
const num= 123.8549
console.log(num.toPrecision(3));//124
console.log(num.toPrecision(4));//123.9
console.log(num.toPrecision(5));//123.85
console.log(num.toPrecision(2));//1.2e+2  Your precision num should be graether than whole num()


const numB = 100000
console.log(numB.toLocaleString());//Adds comma to num as per us standards
console.log(numB.toLocaleString('en-IN'));//Adds comma to num as per Indian standards -- // 100,000

//--------------------Math--------------------------

console.log(Math.abs(-25))  // 25  Converts -ve to +ve
console.log(Math.round(4.6)) // 5  Roundoffs value 
console.log(Math.round(4.3)) // 4  Roundoffs value 
console.log(Math.ceil(4.2)) // 5    Roundoffs to NexT top Number -- Celling
console.log(Math.floor(4.9)) //4    Roundoffs to previous top Number  --Floor

console.log(Math.min(4,9,8,7,2)) // Min value in list
console.log(Math.max(4,9,8,7))  // Max value in list

console.log(Math.random()); // Gives Random values betn 0-1

console.log((Math.random()*10)+1);// Gives Random values betn 0-1 and then Mulitply by 10 to get Integer value and + 1 ,for not getting Zero
console.log(Math.floor(Math.random()*10)+1);// To get proper Value with Floor [ Roundoffs to previous top Number  --Floor]

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); // Now it will give random values betn Max & Min Only

// That '+1' is done for not getting 0
// '+ min' -for  getting 'min' that much value