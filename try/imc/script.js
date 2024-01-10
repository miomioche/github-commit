const calcButton = document.querySelector("#bmi-calc-button");
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height-input").value);
    const weight = parseInt(document.querySelector("#weight-input").value);
    const resultValue = document.querySelector("#resultValue");
    const resultMsg = document.querySelector("#resultMsg");

    if (height === "" || height < 0 || isNaN(height)) {
        resultMsg.innerHTML = "Veuillez entrer une taille valide"
    } 
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        resultMsg.innerHTML = "Veuillez entrer un poids valide"
    }
    else {
        let bmi = (weight / ((height*height)/10000)).toFixed(2);
        resultValue.innerHTML = bmi;

        if (bmi <= 16.5) {
            resultMsg.innerHTML = "Vous êtes en état de dénutrition";
        }
        else if (bmi < 18.5) {
            resultMsg.innerHTML = "Vous êtes en état de maigreur";
        }
        else if (bmi < 25) {
            resultMsg.innerHTML = "Vous êtes en état de poids normal";
        }
        else if (bmi < 30) {
            resultMsg.innerHTML = "Vous êtes en état de surpoids";
        }
        else if (bmi < 40) {
            resultMsg.innerHTML = "Vous êtes en état d'obésité";
        }
        else {
            resultMsg.innerHTML = "Vous êtes en état d'obésité massive";
        }
    }
})