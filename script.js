// Task 1 

function guessNumb(num) {
    if(num >= 0) console.log('number is positive')
    else console.log('number is negative')
}

guessNumb(4)

// Task 2

function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
    sum += i;
    }
    return sum;
}

console.log(sumNumbers())

// Task 3

function OddEvenNumb(num) {
    if (num % 2 === 0) console.log('Number is Even')
    else console.log('Number is Odd')
}

OddEvenNumb(2)

// Task 4 

let car = {
    year: '1997',
    model: 'mitsubishi'
}

function calculateAge(car) {
    const currentYear = new Date().getFullYear();

    return currentYear - car.year
}

console.log(calculateAge(car.year))


//Task 5

let array = [3, 6, 8, 10, 89, 65, 45, 24, 99 ]
let max = array[0];

function findBigNumb(array) {
    for (let i = 1; i <= array.length; i++) {
        if (max < array[i]) {
            max = array[i];
       }
    }
    return max; 
}

console.log(findBigNumb(array))

//Task 6

let min = array[0];
function findMinNumb(array) {
    for (let i = 0; i <= array.length; i++) {
        if (min > array[i]) {
            min = array[i];
       }
    }
    return min; 
}

console.log(findMinNumb(array))

//Task 7

let string = 'daduka';
let newstring = '';

function reverseString(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        newstring += string[i]
    }
    return newstring
}

console.log(reverseString(string))