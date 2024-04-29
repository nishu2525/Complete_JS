// Object Destructuring

const userd={
    firstName :"Nishad",
    fullName:"Nishad Umap",
    age:25,
    email:"nishu@google.com"
}
console.log(userd.email);// Doing so objectName.key is lengthy process if we have to do for many keys 
// Another Synthac
const {email}=userd// const {which value you want}= from where you want the value
console.log(email);

// You can also rename keys
const {firstName:uname}=userd
console.log(uname);

/*
// same concept is used in react.js as Props
const navbar=(props.companyName)=>{  // instead of writing   (props.companyName ) we write ({companyName})

}
navbar(companyName="Nishad")
*/


//---------------------------API----------------------------
/*1.apna kam dusre ke sir dalna is called as api
2.Menu card in restro is API documentation-- you read and make call for particular API
3.API is simple - we get some values from backend and how we deal with it
4.previously API Values comes in XML format now-a-days We get API in form of JSON 
5.Difference betn Object & JSON -- Object has name , but JSON dose'nt have
JSON is basically Object just change here is we write keys & Values in ""  i.e --- "Key":"Value",
 We also get API in form of Array  - Array containing Objects */