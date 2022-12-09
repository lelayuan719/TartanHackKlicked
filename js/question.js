// choices = [
//     "Perfectionism",
//     "Anxiety" = false,
//     "Fear of failure":false,
//     "Avoidance":false,
//     "Low self-esteem":false,
//     "Motivation":false
// ]


const questionMap = {
    "1": "Anxiety",
    "2": "Anxiety",
    "3": "Low",
    "4": "Perfectionism",
    "5": "Fear",
    "6": "Avoidance",
    "7": "Motivation", 
}

choices = {
    "Perfectionism": false,
    "Anxiety": false,
    "Fear": false,
    "Avoidance": false,
    "Low": false,
    "Motivation": false,
}

console.log(choices)

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const questionNum = params.get("what");
const btnYes = document.querySelector(".optionYes");
const btnNo = document.querySelector(".optionNo");
const choiceName = questionMap[questionNum];
console.log(choiceName);

if (questionNum != 1){
    retrieveFromLocalStorage()
}   
saveToLocalStorage();

function RecordChoiceYes(){
    const choiceName = questionMap[questionNum];
    choices[choiceName] = true;
    console.log(choices[choiceName]);
    saveToLocalStorage();
}

function RecordChoiceNo(){
    const choiceName = questionMap[questionNum];
    choices[choiceName] = false;
    console.log(choices[choiceName]);
    saveToLocalStorage();
}

function saveToLocalStorage() {
  
    const choicesString = JSON.stringify(choices);
    localStorage.setItem('storedChoices', choicesString);

  }

function retrieveFromLocalStorage() {
    const choicesString = localStorage.getItem('storedChoices');
    if (choicesString == null){
        return
    }
    choices = JSON.parse(choicesString);
    console.log(choices);
}

btnYes.onclick = RecordChoiceYes; 
btnNo.onclick = RecordChoiceNo;

