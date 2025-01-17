import mediaData from "./data.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/
//Solution 2- Using object lookUp method
// function getUniqueTags(data){
//   const flatTags=data.map((elem)=>{
//     return elem.tags
//   }).flat()
//   const finalTags={}
//   return flatTags.filter((tag)=>{
//     if (!finalTags[tag]){
//         finalTags[tag]= true
//         return true
//     }
//     return false
//   })
// }



// Solution 3 - using Set method
function getUniqueTags(data){
  const flatTags=data.map((elem)=>{
    return elem.tags
  }).flat()
  return [... new Set(flatTags)]
  

}


console.log(getUniqueTags(mediaData));

