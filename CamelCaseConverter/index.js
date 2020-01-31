/**
 * Complete the method/function so that it converts dash/underscore
 * delimited words into camel casing. The first word within the 
 * output should be capitalized only if the original 
 * word was capitalized (known as Upper Camel Case, 
 * also often referred to as Pascal case).
 */

function toCamelCase(str) {
    if (str.indexOf('-') > -1) {
        let stringArray = str.split('-');
        let updatedArray = [];

        for (let i = 1; i < stringArray.length; i++) {
            let item = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
            updatedArray.push(item);
        }
        updatedArray.unshift(stringArray[0]);
        return updatedArray.join('')
    } else if (str.indexOf('_') > -1) {
        let stringArray = str.split('_');
        let updatedArray = [];

        for (let i = 1; i < stringArray.length; i++) {
            let item = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
            updatedArray.push(item);
        }
        updatedArray.unshift(stringArray[0]);
        return updatedArray.join('')

    } else {
        return "Invalid string";
    }
}


console.log(toCamelCase("the-stealth-warrior"));

console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase(""));

