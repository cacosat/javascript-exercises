const palindromes = function (str) {
    let strArray = str.toLowerCase().split("") //store as array for taking out spacebar;
    let strReverse = strArray;

    for (let i = 0; i <= str.length; i++) {
        if (strArray[i] === "!" || 
        strArray[i] === "," || 
        strArray[i] === "."  ||
        strArray[i] === " "){
            strArray.splice(i, 1); // removes element 1 at array[i]
            i--; // deals with index shifting every time the array.splice() happens
        }
    }

    // Normalize the string and remove non-alphanumeric characters with regular expression
    // const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (strArray.toString() === strReverse.reverse().toString()) {
        // .toString() methods because arrays are objects,
        // they point to different parts of memory, so they 
        // compare to false, being != locations
        return true
    } else {
        return false
    }

    // Reverse the cleaned string
    // const reversedStr = cleanedStr.split('').reverse().join('');
    // Compare the cleaned string with its reverse
    // return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
