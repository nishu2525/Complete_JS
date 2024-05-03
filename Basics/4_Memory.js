/*
Two types of data-- primitive type  & non-primitive type

Two types of memory -- stack & Heap
In primitive type stack memory is used - you get copy of declared variable
In non-primitive type Heap memory is used - you get reference of Original value 

 */
// eg:-
//----------------- Primitive Type ---------------------
let myName="Nishad";
let secondName=myName;// Here You only get copy of myName not original Value

secondName="Umap"
console.log(myName) //Nishad    
console.log(secondName); // Umap

//----------------- Non-Primitive Type ---------------------
let user={
    email:"user@gmail.com",
    num:987456321
}

let usertwo=user;  // Here You get refernce of user 
usertwo.email="usernew@gmail.com"

console.log(user.email);//usertwo@gmail.com
console.log(usertwo.email); //usertwo@gmail.com
