//  while Loop
// here starting /initail point is writen outside loop / before starting loop
// then condition and then inside scope code and end condition is written 
let i=1
while (i<=10) {
    console.log(i);
    i++
}

// do- while
// here first code executes thenn condition is checked 
// do - kam karo - so pahile kam

let score=0;
do {// code to be executed 
    console.log(`Score is ${score}`);
    score++
} while (score<=10);// condition 

// If we put score value as 11 // let score=11;
//  here atleast 1 loop will be executed as work{do}is before the condition 
//  whereas in while and for loop first condition is checked then executed 