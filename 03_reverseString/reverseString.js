const reverseString = function(string) {
    let chars = string.split("");
    let reverseString = [];
    for (let i = 0; i < string.length; i++) {
        reverseString += chars.pop(); //pop is an array method
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
