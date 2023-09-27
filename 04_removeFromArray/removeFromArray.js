const removeFromArray = function(array, ...removeElement) {  // "...removeElement" is a rest parameter
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j <= removeElement.length; j++) {
            if (removeElement.sort()[j] === array[i]) {
                //array sorted to avoid array parameter index changing problems
                array.splice(i, 1);
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
