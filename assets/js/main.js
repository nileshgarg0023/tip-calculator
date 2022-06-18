// INPUT VARIABLES
billInput = document.querySelector(".bill__input");
peopleInput = document.querySelector(".people__input");
peopleContainer = document.querySelector(".people__container");

// AUDIO

// BUTTON VARIABLES
tip__buttons = document.querySelectorAll(".tip__buttons button");
btn5 = document.querySelector(".btn5");
btn10 = document.querySelector(".btn10");
btn15 = document.querySelector(".btn15");
btn25 = document.querySelector(".btn25");
btn50 = document.querySelector(".btn50");
costumBtn = document.querySelector(".costumBtn");
reset = document.querySelector(".reset");

// RESULT VARIABLES
tipResult = document.querySelector(".tip__result");
totalResult = document.querySelector(".total__result");

// BUTTON SELECT
tip__buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("button.active").classList.remove("active");
        btn.classList.add("active");
        console.log(billInput.value)
    });
});

function play() {
    var audio = new Audio("assets/sound/click.m4a")
    audio.play();
}



// CALCULATE FUNCTION
function calculateTip(tip) {
    if(peopleInput.value == "" || peopleInput.value == "0") {
        peopleContainer.classList.add("error");
    }
    else {
        tipResult.innerText = "$" + (billInput.value * (tip / 100)).toFixed(2);
        totalResult.innerText = "$" + (billInput.value * (tip / 100) * peopleInput.value).toFixed(2);
        peopleContainer.classList.remove("error");
    }
}

// TIP BUTTONS
btn5.addEventListener("click", () => {

    calculateTip(5);

})

btn10.addEventListener("click", () => {

    calculateTip(10);
    
})

btn15.addEventListener("click", () => {
    
    calculateTip(15);
    
})

btn25.addEventListener("click", () => {
    
    calculateTip(25);
    
})

btn50.addEventListener("click", () => {
    
    calculateTip(50);
    
})

// COSTUM onchange
costumBtn.addEventListener("input", () => {
    
        if(peopleInput.value == "" || peopleInput.value == "0"){
            peopleContainer.classList.add("error");
        }
        else {
            tipResult.innerText = "$" + (billInput.value * (costumBtn.value / 100)).toFixed(2);
            totalResult.innerText = "$" + (billInput.value * (costumBtn.value / 100) * peopleInput.value).toFixed(2);
            peopleContainer.classList.remove("error");
        }
    
});

// RESET
reset.addEventListener('click', () => {
    billInput.value = ""
    peopleInput.value = ""
    costumBtn.value = ""
    tipResult.innerText = "$" + "0";
    totalResult.innerText = "$" + "0";
})