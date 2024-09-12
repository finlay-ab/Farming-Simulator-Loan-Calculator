document.getElementById('textInput').addEventListener('input', function() {
    let value = this.value;
    let slider = document.getElementById('slider');
    slider.value = value;
  });
  
document.getElementById('slider').addEventListener('input', function() {
  let value = this.value;
  let textInput = document.getElementById('textInput');
  textInput.value = value;
});

function calculateLoan() {
  let loanAmount = document.getElementById('slider').value;
  let monthlyPayment = loanAmount * 0.002;
  let yearlyPayment = loanAmount * 0.024;

  document.getElementById('monthlyPayment').innerText = `Monthly Payment: £${monthlyPayment.toFixed(2)}`;
  document.getElementById('yearlyPayment').innerText = `Yearly Payment: £${yearlyPayment.toFixed(2)}`;
}


  