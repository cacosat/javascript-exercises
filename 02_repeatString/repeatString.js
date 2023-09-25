const repeatString = function(string, reps) {
    let resultString = "";
    for (i = 1; i <= reps; i++) {
        resultString += string;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
