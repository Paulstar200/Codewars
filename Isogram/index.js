/* An isogram (also known as a "nonpattern word") is a logological 
term for a word or phrase without a repeating letter.
*/

// Write a function that returns whether a string is an 
// isogram

let isIsogram = (str) => {
    // Convert string to lower case characters
    let lowerStr = str.toLowerCase();

    /* Check if the string is empty
    Empty strings are isograms
    */
    if (lowerStr === "") {
        return true
    } else {
        for (let charIndex = 0; charIndex < lowerStr.length; charIndex++) {
            /**
             * substring - gets the rest of the string from a specified index
             * includes - checks if the character exists at a certain index
             */
            if (lowerStr.substring(charIndex + 1).includes(lowerStr.charAt(charIndex))) {
                return false;
            }
        }
        return true;
    }
}

// Second isogram function
let isIsogram2 = (str) => {
    let lowerStr = str.toLowerCase();

    for (let charIndex = 0; charIndex < lowerStr.length; charIndex++) {
        /* Check if the character at a certain position is within
         the rest of the string
         indexOf - Checks if the character is in the rest of the string
                sttarting from a certain position
         charAt - checks for the specific character at a particular index
         */
        if (lowerStr.indexOf(lowerStr.charAt(charIndex), charIndex + 1) >= 0) {
            return false
        }
    }
    return true
}

console.log(isIsogram2("PaulyWaly"));
console.log(isIsogram2("PapasThotthisuflpfs"));
console.log(isIsogram2("Paul"));
console.log(isIsogram2(""));
console.log(isIsogram2(" "));