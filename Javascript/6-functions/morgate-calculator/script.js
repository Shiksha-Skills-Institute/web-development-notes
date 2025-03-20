var form = document.querySelector('form');
var totalInstallment = document.querySelector('#total-installment');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formDataObj = new FormData(form);
    var amount = parseFloat(formDataObj.get('amount'));
    var term = parseInt(formDataObj.get('term'));
    var rate = parseFloat(formDataObj.get('rate'));
    var morgateType = formDataObj.get('morgate-type');

    console.log(morgateType, "morgate Type")

    if( morgateType == 'option1' ){
        // Calculate EMI
        var emi = calculateMonthlyEMI(amount, term, rate);
       
        // Update the UI
        totalInstallment.innerHTML = `EMI: ₹${emi}`;
    } else {
        // Calculate EMI
        var intrest = calculateMonthlyInterest(amount, term, rate);

        // Update the UI
        totalInstallment.innerHTML = `Monthly Interest: ₹${intrest}`;
    }
    
});

function calculateMonthlyEMI(amount, term, rate) {
    let monthlyRate = rate / (12); // Convert annual rate to monthly decimal
    monthlyRate = monthlyRate / 12;
    term = term * 12;
    let emi = amount * monthlyRate *( Math.pow(1 + monthlyRate, term) / 
              (Math.pow(1 + monthlyRate, term) - 1) );

    return emi.toFixed(2); // Returning EMI rounded to 2 decimal places
}

function calculateMonthlyInterest(amount, term, rate) {
    
    let intrest = ( amount * rate * term ) / 100 

    intrest = intrest / 12;

    return intrest.toFixed(2); // Returning EMI rounded to 2 decimal places
}