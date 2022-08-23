function getPin() {
    const pin = genaretPin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        console.log('pin not 4 degite')
        return getPin();
    }
}




function genaretPin() {
    const random = Math.round(Math.random() * 10000);
    return random;

}


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    // Display Pin
    const displyPin = document.getElementById('display-pin');
    displyPin.value = pin;

})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = (event.target.innerText);
    const typeNumberField = document.getElementById('typed-number');
    const preveusTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = preveusTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = preveusTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }

})


document.getElementById('submit-btn').addEventListener('click', function () {
    const displaypin = document.getElementById('display-pin');
    const currentPin = displaypin.value;

    const typedPin = document.getElementById('typed-number');
    const currentTypePin = typedPin.value;


    const successTextEvent = document.getElementById('success-text');
    const fieldTextEvent = document.getElementById('field-text');
    if (currentTypePin === currentPin) {
        successTextEvent.style.display = 'block';
        fieldTextEvent.style.display = 'none';


    }
    else {
        fieldTextEvent.style.display = 'block';
        successTextEvent.style.display = 'none';


    }


})