const questionsList = [
  {
    question: "If someone is sick, I am:",
    options: [
      "Helping them get better in person",
      "Sending them best wishes from a distance",
      "Staying away so that I don’t get sick",
    ],
    answer: "",
  },
  {
    question: "My reputation is important to me.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "Criticism motivates me.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I appreciate getting constructive criticism.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "It’s important to me that my parents approve of my partner.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "If I have feelings for someone, I usually:",
    options: [
      "Keep it to myself",
      "Get to know the person better before sharing my feelings",
      "Share them ASAP",
    ],
    answer: "",
  },
  {
    question: "When someone vents to me, do you first offer",
    options: ["Emotional support", "Practical advice"],
    answer: "",
  },
  {
    question: "Nature versus nurture - are we all products of our environment?",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "It’s best to split the bill on the first date.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I like waking up early.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "Where would you want to settle down in?",
    options: ["Country", "Big city"],
    answer: "",
  },
  {
    question: "Expensive dates would be more fun.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I am the definition of 'the life of the party'.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "How important is sex to you in a relationship?",
    options: ["Very important", "Somewhat important", "Not important"],
    answer: "",
  },
  {
    question: "I'd rather ghost somebody than outright reject them.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I'd rather never apologize than over-apologize.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I'd rule the world if I could.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I find politically incorrect humor funny.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question:
      "I find extreme ambition attractive, even when it interferes with family & friends.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I have a 5-year plan.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I go to great lengths to minimize my harm to the planet.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I break rules I don't agree with.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I always take the scenic route.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "Are you smarter than most people?",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I would never cry in public.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "It's important to be ambitious.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I don't like labels.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I let other people take the lead.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I don't give second chances.",
    options: ["True", "False"],
    answer: "",
  },
  {
    question: "I'm a stickler for grammar.",
    options: ["True", "False"],
    answer: "",
  },
];

function randomQuestion() {
  return [
    questionsList[Math.floor(Math.random() * 2)], // Random question between index 0 and 1
    questionsList[Math.floor(Math.random() * 4) + 1], // Random question between index 1 and 4
    questionsList[Math.floor(Math.random() * 3) + 4], // Random question between index 4 and 6
    questionsList[Math.floor(Math.random() * 2) + 6], // Random question between index 6 and 7
    questionsList[Math.floor(Math.random() * 8) + 7], // Random question between index 7 and 14
    questionsList[Math.floor(Math.random() * 4) + 14], // Random question between index 14 and 17
    questionsList[Math.floor(Math.random() * 3) + 17], // Random question between index 17 and 19
    questionsList[Math.floor(Math.random() * 3) + 19], // Random question between index 19 and 21
    questionsList[Math.floor(Math.random() * 3) + 21], // Random question between index 21 and 23
    questionsList[Math.floor(Math.random() * 7) + 23], // Random question between index 23 and 29
  ];
}

let currQuestionList = randomQuestion();

// Dictionary to store questions and answers
const questionnaireData = {};

// List of questions
// const questionsList = [
//   {
//     question: currQuestionList.empathyQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.selfImageQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.relationshipValuesQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.socialCommunicationPreferencesQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.lifestyleAndValuesQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.apologyAndAssertivenessQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.senseOfHumorQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.futurePlanningQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.ruleAdherenceQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   {
//     question: currQuestionList.selfPerceptionQuestion,
//     options: ["Yes", "No"],
//     answer: "",
//   },
//   // {question: "What is your favorite color?", options: ["Red", "Blue", "Green"], answer: ""},
//   //   {
//   //     question: "What is your favorite color?",
//   //     options: ["Red", "Blue", "Green"],
//   //     answer: "",
//   //   },
//   //   {
//   //     question: "What is your favorite animal?",
//   //     options: ["Dog", "Cat", "Bird"],
//   //     answer: "",
//   //   },
//   // Add more questions here
// ];

// Function to populate questions on the page
function populateQuestions() {
  const questionsContainer = document.getElementById("questionsContainer");

  currQuestionList.forEach((questionObj, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${questionObj.question}`;

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    questionObj.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = option;
      input.addEventListener("change", updateProgress); // Add an event listener to update progress
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(questionText);
    questionDiv.appendChild(optionsDiv);
    questionsContainer.appendChild(questionDiv);
  });
}

// Call the function to populate questions on page load
window.onload = populateQuestions;

// Function to update the progress bar
function updateProgress() {
  const progress = document.getElementById("progress");
  const totalQuestions = currQuestionList.length;
  let answeredQuestions = 0;

  currQuestionList.forEach((questionObj, index) => {
    const options = document.getElementsByName(`q${index}`);
    options.forEach((option) => {
      if (option.checked) {
        answeredQuestions++;
        questionObj.answer = option.value;
      }
    });
  });

  const percentage = (answeredQuestions / totalQuestions) * 100;
  progress.style.width = percentage + "%";
}

function submitForm() {
  // Store both questions and answers in the same dictionary
  questionnaireData.questions = currQuestionList.map(
    (questionObj) => questionObj.question
  );
  questionnaireData.answers = currQuestionList.map(
    (questionObj) => questionObj.answer
  );

  // You can now access both questions and answers in the same dictionary
  console.log("Questionnaire Data:", questionnaireData);
}
