//Get values from visibly represented user prompts
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');



//object of character functions to retreive possible characters
const keyFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol
    }
    // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //length stores an number
    const length = +lengthEl.value;
    //assigns based on checked status on prompt
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    var passwordText = document.querySelector("#password");
    //Assign password valye to result of function.
    passwordText.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPw = '';
    //order of password characters
    const checkedValues = lower + upper + number + symbol;

    //checks for selected values and prompts user if none are selected.
    const checkedArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    if (checkedValues === 0) {
        alert("Please ensure at least one box is checked.")
        return '';
    }
    //Ensures pw range stays between 8 and 128 characters
    if (length < 8 || length > 128) {
        alert("Please choose a password length between 8 and 128 characters.")
        return '';
    }
    //Write password based on Selected length and checked values
    for (i = 0; i < length; i += checkedValues) {
        checkedArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPw += keyFunc[funcName]();
        });
    }
    const actualPassword = generatedPw.slice(0, length);
    return actualPassword;

}
//Functions to determine characters based on character codes
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Manually select usable symbols
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}