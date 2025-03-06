function alertSomething(){
    console.log("Shiksha Skills Institute")
}


//Calling the function
alertSomething();

// 2 + 2 = 4
//console.log(2 + 2);

function calculateSum( firstNumber, secondNumber ) {
    console.log(firstNumber + secondNumber);
}

calculateSum(2,2);


// const calculateSumArrow = ( firstNumber, secondNumber ) => firstNumber + secondNumber

const calculateSumArrow = ( firstNumber, secondNumber ) => { return firstNumber + secondNumber }

console.log( calculateSumArrow(2,2) );