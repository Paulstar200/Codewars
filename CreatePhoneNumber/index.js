/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), 
 * that returns a string of those numbers in the form of a phone number.
 * Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */

function createPhoneNumber(numbers) {
    // String for holding the phone numbers
    let phoneNumber = '';

    for (let number in numbers) {
        phoneNumber += numbers[number]
    }

    // Add opening parenthesis to beginning of the string
    let newPhoneNumber = '(' + phoneNumber;
    let arrayOfNumbers = newPhoneNumber.split('');

    // Get the first part of the string before the closing parenthesis position
    let firstPart = arrayOfNumbers.slice(0, 4);
    firstPart.push(')')
    let stringifiedfirstPart = firstPart.join('');

    // Get the second part of the string after the closing parenthesis position
    let secondPart = arrayOfNumbers.slice(4);
    let numberWithoutHiphen = secondPart.slice(0, 3); // Get the numbers before the hiphen position
    numberWithoutHiphen.push('-')
    let stringifiedSecondPart = numberWithoutHiphen.join('');

    // Get the last part of the string which is after the hiphen
    let lastpart = secondPart.slice(3);
    let stringedLastPart = lastpart.join('')

    // Return the final string and insert a space between the first part and the second part
    return stringifiedfirstPart + ' ' + stringifiedSecondPart + stringedLastPart;
}

function alternativeSolution(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring('6');
}

let myNumbers = createPhoneNumber([1, 2, 3, 5, 1, 1, 8, 2, 9, 1]);
let alternative = alternativeSolution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

console.log(myNumbers);
console.log(alternative);