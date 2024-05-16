const myarr = [1, 2, 3, 4, 5];

const values = myarr.forEach((val) => {
  console.log(val);
  return val;// foreach does not returs value 
});
console.log(values); // undefined
// when we use forEach loop inside varibale we'll get "undefined"

// Filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnum = nums.filter((num) => num > 4);

// const newnum = nums.filter((num) => {
//   return num > 4 });
/*     Code on Line (12) and (14,15 ) is same  */

 // if we write this num>4 inside {function} then we'll get an empty array [] -- but if we write 'return' keyword inside function scope then we'll get values
// as when we work within scope{} we have return 
console.log(newnum); // opt-- [ 5, 6, 7, 8, 9 ]
// Filter returns value
/*
when we use filter inside that we 'll get calllback functN and then we have to give conditioN , when condrtN is true that values will be returned and this is called as basics of filter 
*/
// same work if we do with forEach -------
const newArr=[]
nums.forEach((num)=>{
    if (num>4) {
        newArr.push(num) // here push method is used to add elemets in array
    }
}) 
console.log(newArr);   // opt-- [ 5, 6, 7, 8, 9 ]

console.log("----------------Filter Examples -----------------------");


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


 //eg.1
 let userBooks = books.filter( (book) => book.genre === 'History')

 //eg.2
  userBooks = books.filter( (book) => { // here we're opening scope so we have to use return keyword 
    return book.publish >= 2005
})

 //eg.3
userBooks = books.filter( (book) => { 
    return book.genre>= "Science" && book.publish >=2005
})

console.log(userBooks);