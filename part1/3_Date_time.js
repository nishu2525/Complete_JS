/*Date is obj in js
usually it is in ms (mili-second time from that time)
{ date is calculated from Jan 1, 1970 }
*/
let mydate =new Date()
console.log(mydate); // 2024-04-26T06:18:15.735Z
console.log(mydate.toString()); // Fri Apr 26 2024 11:48:15 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); //Fri Apr 26 2024
console.log(mydate.toLocaleString()); //26/4/2024, 11:48:15 am

console.log(typeof mydate); // object 

let myCredate =new Date(2024,0,1) // Here 0=JAN and so on  // Year, month,day,hour,minute,second
console.log(myCredate.toDateString()); // Mon Jan 01 2024

let myCredate_time =new Date(2024,0,1,5,10) // 1/1/2024, 5:10:00 am --- 24hrs Watch time 
console.log(myCredate_time.toLocaleString());

let dateformat=new Date("01-26-2024") 
console.log(dateformat.toLocaleString()); //26/1/2024, 12:00:00 am

let timeStamp=Date.now()
console.log(timeStamp) // Gives Mili Seconds from January 1, 1970,midnight

console.log(Math.floor(timeStamp/1000));// Gives Seconds from January 1, 1970,midnight
console.log('--------------------------');
console.log(mydate.getDay()); // we'll get Day count - 5 - Friday  -- 1-Monday ----- as like this 
console.log(mydate.getMonth()+1);// +1 as it starts from 0 in format // Month
console.log(mydate.getDate());// Date 
// this is how we can customise LocaleString date
console.log(mydate.toLocaleString('default',{
    // Various methods in this object 

    // weekday: "long", // Friday (today's weekday full-name )
    // dateStyle: "full", // Friday, 26 April, 2024 - full date 
    // hour12:""  //  26/4/2024, 12:02:27
    //year:"numeric" // 2024
 
}));


