/**
 * In this little assignment you are given a string of space separated numbers,
 *  and have to return the highest and lowest number.
 */

function highAndLow(numbers) {
    let numbersArray = numbers.split(' ');
    let max = Math.max(...numbersArray);
    let min = Math.min(...numbersArray);
    return `${max} ${min}`;
}


let solution = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log(solution)