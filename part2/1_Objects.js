
/* literals and constructor 
when we make using literals then it does'nt become singleton                   
when we make using constructor then it become singleton
*/
 
// const user =new Object() //  constructor Type 
const user={}  // literals type 
// In objects there is key :value pairs

const userinfo ={
    name :"Nishad",
    "fullName":"Nishad Umap",
    age:25,
    location:"Pune",
    email:"nishu@google.com"
}
// to access any value from object we can do 
            console.log(userinfo.email);
            console.log(userinfo['email']);
// both are same 
// we offenly use 1st way bt we if any key is written by force as a String( bt defalut it is string bt force is different -- eg- on line 13)
console.log(userinfo ['fullName']);// Nishad Umap

// If you want to use symbol in objet how to do so 
const mysym=Symbol("key")
const userd={
    email:"ni@gmail.com",
    // mysym:"key1",
    [mysym]:"key1",
}
/* if we console.log(userd)
we'll get { email: 'Nishad@amdocs.com', mysym: 'key1' } -- If mysym is declared as on line 29
and if declare mysym as on line 30 we'll get 
{ email: 'Nishad@amdocs.com',[Symbol(key)]: 'key1' }
*/
console.log(( userd [mysym]));;// key1
console.log(typeof userd[mysym]) // String  -- here we getting value as a string 

// To update value 
userd.email="nishu@gmail.com"
console.log( userd ["email"]);// nishu@gmail.com
// Can also do as console.log( userd.email);
console.log('-----');

// To freeze Object 
userd.email="Nishad@amdocs.com" // email is updated 
Object.freeze(userd)
console.log(userd);


//adding function to obj - it will be simply treated as variable
userinfo.greeting=function(){
    console.log(`Hello ${this.name}`);// this keyword is used to refer userinfo 
}
console.log( userinfo.greeting());