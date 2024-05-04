// In switch case the 'key' keyword --- simply says that theree are many locks i.e(cases ) and its key to open , whichever lock(case ) is possible
const month =4;

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;

    default: // this is similar to else 
        break;
}
// If we don't use break then all code below executes ,execpt default statement
// By default what happens which-ever case matches , all the code get executed below it {execpt default} , so to avoid it we use 'break' , keyword

// when the key is string then keep value also as string 
// here case is also checked --- i.e {it is case sensitive}
const day ="sunday"
switch (day) {
    case "sunday":
        console.log("1");
        break;
    case "monday":
        console.log("2");
        break;
    case "teusday":
        console.log("3");
        break; 
    default:
        break;
}