/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), 
 * that returns a string of those numbers in the form of a phone number.
 * Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */

function createPhoneNumber(numbers) {
    let phoneNumber = '';
    let openParen = '(';
    let closingParen = ') ';
    let hiphen = '-';


    for (let number in numbers) {
        phoneNumber += numbers[number]
    }
    let newPhoneNumber = openParen += phoneNumber;
    let thirdIndex = newPhoneNumber.charAt(4);
    let firstPart = newPhoneNumber.split(thirdIndex);
    let numberWithoutHiphen = firstPart[0] + closingParen + thirdIndex + firstPart[1];
    let ninthIndex = numberWithoutHiphen.charAt(9);
    let secondPart = numberWithoutHiphen.split(ninthIndex);
    let numberWithHiphen = secondPart[0] + hiphen + ninthIndex + secondPart[1];
    return numberWithHiphen;

}

let myNumbers = createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

console.log(myNumbers);