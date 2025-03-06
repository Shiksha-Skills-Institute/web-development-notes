var form = document.querySelector('form');
var totalInstallment = document.querySelector('#total-installment');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formDataObj = new FormData(form);
    var amount = parseFloat(formDataObj.get('amount'));
    var term = parseInt(formDataObj.get('term'));
    var rate = parseFloat(formDataObj.get('rate'));
    var morgateType = formDataObj.get('morgate-type');

    // Debugging inputs
    console.log({ amount, term, rate, morgateType });

    // Validate Inputs
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid loan amount.");
        return;
    }
    if (isNaN(term) || term <= 0) {
        alert("Please enter a valid loan term.");
        return;
    }
    if (isNaN(rate) || rate <= 0) {
        alert("Please enter a valid interest rate.");
        return;
    }

    // Calculate EMI
    var emi = calculateMonthlyEMI(amount, term, rate);
    console.log("EMI:", emi); // Debugging the EMI calculation

    // Update the UI
    totalInstallment.innerHTML = `EMI: ₹${emi}`;
});

function calculateMonthlyEMI(amount, term, rate) {
    let monthlyRate = rate / (12); // Convert annual rate to monthly decimal
    monthlyRate = monthlyRate / 100;
    term = term * 12;
    let emi = amount * monthlyRate *( Math.pow(1 + monthlyRate, term) / 
              (Math.pow(1 + monthlyRate, term) - 1) );

    return emi.toFixed(2); // Returning EMI rounded to 2 decimal places
}
