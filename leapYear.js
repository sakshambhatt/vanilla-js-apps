var inputLeapYear = document.querySelector("#input-leap-year");
var buttonLeapYear = document.querySelector("#button-leap-year");
var outputLeapYear = document.querySelector("#output-leap-year");

console.log("Js loaded");
buttonLeapYear.addEventListener("click", function checkYear() {

    var year = parseInt(inputLeapYear.value);
    var success = year + " is a leap year";
    var failure = year + " is not a leap year";
    console.log(year);

    if(isNaN(year)) {

        console.log(year + " is not a number");        
    } else {

        console.log(year + " is number");
        if(year % 4 === 0) {

            if(year % 100 === 0) {

                if(year % 400 === 0) {

                    console.log(success);
                    outputLeapYear.innerText = success;
                } else {

                    console.log(failure);
                    outputLeapYear.innerText = failure;
                }
            } else {

                console.log(success);
                outputLeapYear.innerText = success;
            }
        } else {

            console.log(failure);
            outputLeapYear.innerText = failure;
        }
    }
});