import podcasts from "./data.js";

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

function createDescriptionsFor(data){
    return data.map(elem=>{
        const allhosts=elem.hosts.length>1?[...elem.hosts].slice(0,-1).join(" , ")+ " and " + elem.hosts[elem.hosts.length-1]:elem.hosts[0]  
        
        return {...elem,description :(`${elem.title} is a ${elem.duration} minute ${elem.genre} podcast hosted by ${allhosts}. `)}
    })
}

console.log(createDescriptionsFor(podcasts))
