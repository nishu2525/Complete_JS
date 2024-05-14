//for each loop -array
/*
To use foreach loop -
 use call back functions as it is Higher order Function
 */
 const myarr = ['JS', 'HTML', 'React', 'CSS'];

 // Function ----      fumction name(parameters){}//  parameters- each item/value in Array
 myarr.forEach(function (val) {
   // here we don't need name
//    console.log(val);// Each Element gets appeared seperately  
 });

 
// same with arrow ftn
myarr.forEach((value) => {
    console.log(value);
  });
  
  // or here we can directly use funtN which is already declared 
  // here item is items inside array(i.e-value)
  function print(item) {
    console.log(item);
  }
  //here declared functN is Called 
  myarr.forEach(print);
  // Only Give ref.of FunctN --- print ✓✓✓                don't Execute --- print() X X X X


  myarr.forEach((value, index, arr) => {
    console.log(value, index, arr);
  }); // here we are printing item inside array(i.e-value), index no , complete array

  // when we have Objects inside array
const objarr = [
    { username: "Nishad", tech: "MERN-Stack" },
    { username: "Dinesh", tech: "Full-Stack" },
    { username: "Vishu", tech: "Automation" },
  ];
  objarr.forEach((item) => {
    console.log(`Name is ${item.username} and Technology using  is ${item.tech}`);
  });
  