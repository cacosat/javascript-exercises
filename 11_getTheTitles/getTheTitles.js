const getTheTitles = function(array) {
// takes an input array of books (obj) and returns array of titles (property)
// 1. Access title property from elements (books) of input array
// 2. Add property value to new resultArray of titles

let titles = [];
for (let i = 0; i < array.length; i++) {
    titles.push(array[i]["title"]); //could be array[i].title;
}
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
