//setInterval
//setTimeout

var number = 1;
var innerP = document.querySelector('section div p');
function addNewNumber(){
    const tempP = document.createElement("p");
    tempP.innerHTML = ++number;
    innerP.insertAdjacentElement('beforeend', tempP)
}

// addNewNumber();
const intervalID = setInterval( addNewNumber, 1000);

function stopAddingNewNumbers(){
    clearInterval(intervalID);
}

setTimeout( stopAddingNewNumbers, 9000 );