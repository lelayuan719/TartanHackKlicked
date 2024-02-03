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

        function submitForm() {
            questionsList.forEach((questionObj, index) => {
                const options = document.getElementsByName(`q${index}`);
                options.forEach(option => {
                    if (option.checked) {
                        questionObj.answer = option.value;
                    }
                });
            });

            // Store questions and answers in the same dictionary
            questionnaireData.questions = questionsList.map(questionObj => questionObj.question);
            questionnaireData.answers = questionsList.map(questionObj => questionObj.answer);

            // You can now access both questions and answers in the same dictionary
            console.log("Questionnaire Data:", questionnaireData);
        }