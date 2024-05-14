// for of  
const arr=[1,2,3,4,5,"hey"]
// for (const iterator of object) { }// Here Object means on which this lopp is to be applied 
// iterator each variable inside it (object)
 for (const num of arr) {
    // console.log(num);// Each Element gets appeared seperately  
 }

 const Name="Nishad";
 for (const callname of Name) {
    // console.log(callname);// Each Element gets appeared seperately  
 }


// maps
//  Map is Obj which holds key value pair and it remembers the orginal insertion order of keys.

const area= new Map()
area.set('IN','India')
area.set('USA','United States of America')
area.set('UAE','Dubai')
// console.log(area);// Output shown below
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'UAE' => 'Dubai'
} 
*/
// If you enter two similar values in map You'll get only one --- as map is specially known for unique values

for (const keys of area) {
    //console.log(keys);// Output shown below
/*  In this case You'll get array of key and value
[ 'IN', 'India' ]
[ 'USA',  'United States of America' ]
[ 'UAE', 'Dubai' ]
*/
}

// But if don't want this then enclose variable name in square bracket []
for (const [keys,value] of area) {
    // console.log(keys,"-",value); // Output shown below
    /*
    IN - India
    USA - United States of America
    UAE - Dubai
    */
}


// Loops on Object 
const myObj={
    JS:"Javascript",
    HTML:"Hyper Text Markup Language",
    CSS:"Casceded Style Sheet"
}
// for (const key of myObj) {
    //   console.log(key); 
    // }    ------// ERROR  myObj is not iterable
    
// This technique of applying loops won't work on Objects so we use for in loop

// For in
for (const key in myObj) {
  console.log(key);
}// this will only give you key

for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}` );
  }
// ${myObj[key]} This will give you the Value of Key 

// when we use for-in loop in array we'll get key not value (key- index)
// In arrays keys always start from 0

// In Object we can put whatever as a key
// maps are not iterable so we can't use for-in loop // here error is also not present 

/*Recommanded-- 
Objects- for-in
arrays - for-of
*/