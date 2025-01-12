
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];
// Solution 1 -using 2 for loops
// function flatten(arr){
//     let flattenedArr=[]
    
//   for(let i=0; i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         for(let j=0;j<arr[i].length;j++){
//             flattenedArr.push(arr[i][j])
//         }
//     }
//     else{
//         flattenedArr.push(arr[i])
//     }
//   }
//   return flattenedArr
// }

// Solution2 -using flatMap() method
// function flatten(arr){
//     return arr.flat()
//     }
// Solution 3 - using forEach ()method
function flatten(arr){
    const flattenedArr=[]
    arr.forEach((elem)=>{
        if (Array.isArray(elem)){
            elem.forEach((item)=>{
                flattenedArr.push(item)
            })
        }
        else{
            flattenedArr.push(elem)
        }
    })
    return flattenedArr
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
