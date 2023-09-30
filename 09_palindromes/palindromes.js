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

    console.log("str " + strArray);
    console.log("rev " + strReverse);
    if (strArray.toString() === strReverse.reverse().toString()) {
        // .toString() methods because arrays are objects,
        // they point to different parts of memory, so they 
        // compare to false, being != locations
        console.log("str " + strArray);
        console.log("rev " + strReverse);
        return true
    } else {
        console.log("str " + strArray);
        console.log("rev " + strReverse);
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
