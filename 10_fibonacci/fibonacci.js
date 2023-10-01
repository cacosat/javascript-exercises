const fibonacci = function(num) {
    let sequence = [1, 1];
    if (num < 0) {
        return 'OOPS'
    } else {
        for (let i = 0; i < num; i++) {
            sequence.push(sequence[i]+sequence[i+1]);
        }
        return sequence[num-1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
