retrieveFromLocalStorage()

function retrieveFromLocalStorage() {
    const choicesString = localStorage.getItem('storedChoices');
    if (choicesString == null){
        return
    }
    choices = JSON.parse(choicesString);
    console.log(choices);
}

if (choices.Perfectionism == true){
    cause = document.querySelector("#cause1");
    cause.style.backgroundColor="#FC766A";
}

if (choices.Anxiety == true){
    cause = document.querySelector("#cause2");
    cause.style.backgroundColor="#FC766A";
}

if (choices.Fear == true){
    cause = document.querySelector("#cause3");
    cause.style.backgroundColor="#FC766A";
}

if (choices.Avoidance == true){
    cause = document.querySelector("#cause4");
    cause.style.backgroundColor="#FC766A";
}

if (choices.Low == true){
    cause = document.querySelector("#cause5");
    cause.style.backgroundColor="#FC766A";
}

if (choices.Motivation == true){
    cause = document.querySelector("#cause6");
    cause.style.backgroundColor="#FC766A";
}
