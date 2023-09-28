// const sumAll = function() {
//     let sum = 0;
//     if (arguments[0] < 0 || arguments[1] < 0) {
//         return 'ERROR'
//     } else {
//         let firstNum = arguments[0];
//         let secondNum = arguments[1];

//         if (firstNum <= secondNum && typeof firstNum === 'number' && typeof secondNum === 'number') {
//             for (let i = firstNum; i <= secondNum; i++) {
//                 sum += i;
//             }
//             return sum
//         } else if (firstNum > secondNum && typeof firstNum === 'number' && typeof secondNum === 'number') {
//             for (let i = secondNum; i <= firstNum; i++) {
//                 sum += i;
//             }
//             return sum
//         }
//         return 'ERROR'
//     }
// };

const sumAll = function (firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number'
    || firstNum < 0 || secondNum < 0) {
        return 'ERROR'
    }

    let startNum = Math.min(firstNum, secondNum);
    let endNum = Math.max(firstNum, secondNum);
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum
}

// Do not edit below this line
module.exports = sumAll;
