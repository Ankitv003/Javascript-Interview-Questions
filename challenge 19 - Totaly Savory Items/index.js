import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
const total= arr.reduce((acc,curr)=>{
    if(curr.type==="savory"){
        return acc+=curr.price
    }
        return acc
 },0)
return total
}

console.log(totalSavory(shoppingCart));

