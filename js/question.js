// choices = [
//     "Perfectionism",
//     "Anxiety" = false,
//     "Fear of failure":false,
//     "Avoidance":false,
//     "Low self-esteem":false,
//     "Motivation":false
// ]

let Perfectionism = false;
let Anxiety = false;
let Fear = false;
let Avoidance = false;
let Low = false;
let Motivation = false;

const questionMap = {
    "1": Anxiety,
    "2": Anxiety,
    "3": Low,
    "4": Perfectionism,
    "5": Fear,
    "6": Avoidance,
    "7": Motivation, 
}

choices = [
    Perfectionism = false,
    Anxiety = false,
    Fear = false,
    Avoidance = false,
    Low = false,
    Motivation = false
]

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const questionNum = params.get("what");
const btnYes = document.querySelector(".optionYes");
const btnNo = document.querySelector(".optionNo");

btnYes.onClick = this.RecordChoice; 

function RecordChoice(){
    const selectedElement = document 


}