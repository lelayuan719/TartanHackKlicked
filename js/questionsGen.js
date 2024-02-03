function randomQuestion() {
    let empathyQuestion = questionsList[Math.floor(Math.random() * 2)]; // Random question between index 0 and 1
    let selfImageQuestion = questionsList[Math.floor(Math.random() * 4) + 1]; // Random question between index 1 and 4
    let relationshipValuesQuestion = questionsList[Math.floor(Math.random() * 3) + 4]; // Random question between index 4 and 6
    let socialCommunicationPreferencesQuestion = questionsList[Math.floor(Math.random() * 2) + 6]; // Random question between index 6 and 7
    let lifestyleAndValuesQuestion = questionsList[Math.floor(Math.random() * 8) + 7]; // Random question between index 7 and 14
    let apologyAndAssertivenessQuestion = questionsList[Math.floor(Math.random() * 4) + 14]; // Random question between index 14 and 17
    let senseOfHumorQuestion = questionsList[Math.floor(Math.random() * 3) + 17]; // Random question between index 17 and 19
    let futurePlanningQuestion = questionsList[Math.floor(Math.random() * 3) + 19]; // Random question between index 19 and 21
    let ruleAdherenceQuestion = questionsList[Math.floor(Math.random() * 3) + 21]; // Random question between index 21 and 23
    let selfPerceptionQuestion = questionsList[Math.floor(Math.random() * 7) + 23]; // Random question between index 23 and 29

    // You can now use these questions as needed
}
  
  // Dictionary to store questions and answers
  const questionnaireData = {};

  // List of questions
  const questionsList = [
      {
          question: "What is your favorite color?",
          options: ["Red", "Blue", "Green"],
          answer: ""
      },
      {
          question: "What is your favorite animal?",
          options: ["Dog", "Cat", "Bird"],
          answer: ""
      }
      // Add more questions here
  ];

  // Function to populate questions on the page
  function populateQuestions() {
      const questionsContainer = document.getElementById("questionsContainer");

      questionsList.forEach((questionObj, index) => {
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
              input.addEventListener('change', updateProgress); // Add an event listener to update progress
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
      const progress = document.getElementById('progress');
      const totalQuestions = questionsList.length;
      let answeredQuestions = 0;

      questionsList.forEach((questionObj, index) => {
          const options = document.getElementsByName(`q${index}`);
          options.forEach(option => {
              if (option.checked) {
                  answeredQuestions++;
                  questionObj.answer = option.value;
              }
          });
      });

      const percentage = (answeredQuestions / totalQuestions) * 100;
      progress.style.width = percentage + '%';
  }

  function submitForm() {
      // Store both questions and answers in the same dictionary
      questionnaireData.questions = questionsList.map(questionObj => questionObj.question);
      questionnaireData.answers = questionsList.map(questionObj => questionObj.answer);

      // You can now access both questions and answers in the same dictionary
      console.log("Questionnaire Data:", questionnaireData);
  }