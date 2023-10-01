const findTheOldest = function(array) {
// Return oldest (person obj) from an array of obj (people),
// which contain name, yearOfBirth, yearOfDeath 
// (if person alive, obj doesn't have yearOfDeath).
// 1. Function for calculating age given yearOfBirth and yearOfDeath
// 2. If statement checking if alive or dead via yearOfDeath presence
// 2.5 If dead logs age, if alive logs current age (with js new Date())
// 3. For loop for calculating age of each obj person in input array
// 4. Store calculated ages on a peopleAge array and exit loop
// 5. Check for Math.max() age of spread array peopleAge, returns num maxAge
// 6. Search index of maxAge via peopleAge.indexOf (maxAge) and store in index
// 7. Search person obj with maxAge in input array: array[index]
// 8. Store in oldestPerson variable as an object
// 9. return oldestPerson
let peopleAge = [];
let maxAge = 0;
let index = 0; // to be index of element of array with maxAge
let oldestPerson; // to contain obj to be returned

const ageOf = (birth, death) => death-birth;

for (let i = 0; i < array.length; i++){
    let age = 0;
    let currentYear = new Date().getFullYear();
    if (array[i].yearOfDeath === undefined) {
        age = ageOf(array[i].yearOfBirth, currentYear)
        peopleAge.push(age);
    } else {
        age = ageOf(array[i].yearOfBirth, array[i].yearOfDeath); // will be handle as 'number' type
        peopleAge.push(age);
    }
}

// spread operator ('...') spreads array into individual numbers
maxAge = Math.max(...peopleAge); // 0 means alive
index = peopleAge.indexOf(maxAge);
oldestPerson = array[index];

return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
