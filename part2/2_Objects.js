const userdata={}  // literals type 
// const userdata=new Object () //  constructor Type 
// Both as same 
// And if we do console.log(userdata) we'll get {} -empty obj
userdata.name="Nishu"
userdata.id="123"
userdata.email="n@gmail.com"
console.log(userdata)

// we can declare objects inside objects
const userinfo ={
    name :"Nishad",
    fullName:"Nishad Umap",
    age:25,
    location:{homeTown:"Amravati", workLocation:"Pune"},
    email:"nishu@google.com"
}
console.log(userinfo.location.homeTown);// we can access it by doing so  


const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
// const obj3 ={obj1,obj2}
// console.log(obj3);{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }
// But doing so will not give proper concatination.
// Object.assign - to concat objects 
// const obj3=Object.assign({},obj1,obj2) // here we should Write {} as it collects all objects in 1 Object  
// console.log(obj3);{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
// but instead of using any of above method use spread operator-- easy to use , same used in arrays, convinent to use 
const obj3={...obj1,...obj2}
console.log(obj3);

// when we get data from database we get it in form like 
const user=[
    {id:'1',email:'user1@.com'},
    {id:'2',email:'user2@.com'},
    {id:'3',email:'user3@.com'}
]
console.log(user[1].email);// this is how we can access it 


// we can access all keys/ values of an obj 
 console.log(Object.keys(userinfo));//[ 'name', 'fullName', 'age', 'location', 'email' ] //Array of keys will get

 console.log(Object.values(userinfo))// Array of values will get

console.log(userinfo.hasOwnProperty('email'));// To check is this property is in our Object // gives boolean output

