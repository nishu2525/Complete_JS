// for loop 
for (let i = 0; i < 10; i++) {
    // console.log(i);   
} 
//  for loop ---
//for (starting_point ; condition ; end _point){code to be iterated }
// we can print lop inside loop
//  let's print all tables from 1 to 10 using for loop 

for (let i = 1; i <=10; i++) {
    // console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
    //    console.log(`${i} x ${j} = ${i*j}`);
    }
}


// loops in array
myarray= ["hey","hii","bye"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //  console.log(element);
}
// we should always put end point or increment point as if we dont do so loop will stuck on starting point and will go infinite
// here on line 20 we are going till length bcz length is 3 but index no starts from 0 
// And if we do " index <= myarray.length " , it will go till 4 bt as we don't have 4 then we'll get 4th value as undefined (in Other Lang. (like Java) we'll get out of bound exception error )


// Break- to Stop the loop or iteration
// Constinue - to skip paticular condition {ek baar maafi de deta hai aur aap aage bad sakte ho}

// Break
console.log('-----Break keyword----');

for (let index = 0; index <=20; index++) {
    if (index==5) {
        console.log(`Fav No 5 detected`);
        break;
    }
  console.log(`value of i is ${index}`);
}
console.log('-----Continue keyword----');
// Continue 
for (let index = 0; index <=20; index++) {
    if (index==5) {
        console.log(`Fav No 5 detected`);
        continue;// loop will continue it will not stop
    }
  console.log(`value of i is ${index}`);
    
}