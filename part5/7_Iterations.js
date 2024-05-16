// -----------reduce-----------
const myNums = [1, 2, 3]

let myTotal = myNums.reduce(function (acc, currval) {// acc- accumulator- previous value     currval- current_value 
    console.log(`acc: ${acc} and currval: ${currval}`);// this line gives great explanation
    return acc + currval
}, 0)// this 0 is the starting point from you want to start // here we to tell accumulator from where to start

// Same thing in short way of writting
 myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Web Dev course",
        price: 3999
    },
    {
        itemName: "java course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "iOS course",
        price: 6999
    },
]
// To add all values 
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`Total Price of courses you are buying is ${priceToPay}`);