var inputPrime = document.querySelector("#input-prime");
var buttonPrime = document.querySelector("#button-prime");
var outputPrime = document.querySelector("#output-prime");

buttonPrime.addEventListener("click", function checkPrime() {

    var number = parseInt(inputPrime.value);
    var success = number + " is prime";
    var failure = number + " is not prime";
    var prime = true;
    console.log(number);

    if(isNaN(number)) {

        alert("Please enter a number");
    } else {

        for(var i = parseInt(number / 2); i > 1; i--) {

            if(number % i === 0) {
                console.log(failure);
                outputPrime.innerText = failure;
                prime = false;
                break;
            }
        }
        if(prime === true) {
            console.log(success);
            outputPrime.innerText = success;
        }
    }
});