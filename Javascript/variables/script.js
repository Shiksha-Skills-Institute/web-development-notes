var someDataVariable = "String"
someDataVariable = 20
// someDataVariable = null
// someDataVariable = undefined

let dataNewVariable = "20"

console.log( someDataVariable );

var textElement = document.querySelector('.text');
textElement.innerHTML = someDataVariable + parseInt(dataNewVariable)

// String

let currentYear = new Date().getFullYear();

let myName = "Shiksha Skills Institute";
let yourName = 'Shiksha Skills Institute';
let newName = `Shiksha Skills Institute`;

let announcment = "Shiksha Skills Institute is starting new batch in " + currentYear + " For Web Development";
let announcmentWithTilde = `Shiksha Skills Institute is starting new batch in ${currentYear} For Web Development`;

var stringValue = document.querySelector('.string');
stringValue.innerHTML = announcmentWithTilde;

let thirdItem = announcment.at(2) // index always start from 0
console.log(thirdItem)

