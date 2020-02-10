// Sum of Digits/ Digital root

/**
 * A digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n.
 * If that value has more than one digit, continue reducing in this way
 * until a single-digit number is produced. This is only applicable to
 * the natural numbers.

    Here's how it works:
    digital_root(16)
    => 1 + 6
    => 7

    digital_root(493193)
    => 4 + 9 + 3 + 1 + 9 + 3
    => 29 ...
    => 2 + 9
    => 11 ...
    => 1 + 1
    => 2
 */
function digital_root(n) {
    while (n.toString().split('').length > 1) {
        let numbersArray = n.toString().split('');
        let realDigits = numbersArray.map(Number);
        let sum = realDigits.reduce(
            (a, b) => a + b,
            0
        )
        n = sum;
    }
    return n;
}

let test1 = digital_root(123457);
console.log(test1);