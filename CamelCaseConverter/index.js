/**
 * Complete the method/function so that it converts dash/underscore
 * delimited words into camel casing. The first word within the 
 * output should be capitalized only if the original 
 * word was capitalized (known as Upper Camel Case, 
 * also often referred to as Pascal case).
 */

function toCamelCase(str) {
    if (str.indexOf('-') > -1) {

    } else if (str.indexOf('_') > -1) {

    } else {
        return "Invalid string";
    }
}

let paul = toCamelCase("paul otieno")
console.log(paul)

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"