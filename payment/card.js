// get a reference to the form
const theForm = document.querySelector('#creditCardForm');

function displayError(msg) {
    const errorElement = document.querySelector('.errors');
    errorElement.textContent = msg
    errorElement.style.backgroundColor = 'red';
}

function isCardNumberValid(number) {
    return number == '1234123412341234'
}

function submitHandler(event) {
	event.preventDefault();
  let errorMsg = '';
	displayError('');

  let cardNumber = document.querySelector('#cardNumber');
  const cardNum = cardNumber.value.trim();

      if (!/^\d{16}$/.test(cardNum)) {
      errorMsg += 'Card number must be 16 digits\n';
      } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
      }
    
    //check date
    const expYear = Number(document.querySelector('#year').value);   
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }

    const cvc = Number(document.querySelector('#securityCode').value);

    if (!/^\d{3}$/.test(cvc)) {
        errorMsg += 'Invalid security code';
    }

    if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return;
    }
    // Success: show a confirmation message
    const formContainer = document.getElementById('creditCardForm');
    formContainer.innerHTML = '<h2>♥️ Thank you for your very legit purchase ♥️</h2>';
}
  
document.querySelector('#creditCardForm').addEventListener('submit', submitHandler)
          