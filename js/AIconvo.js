let final_convo = [];
ai_convo = fetch("http://127.0.0.1:5000/get-conversation")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Document data:", data);
    final_convo = data.map((item) => ({
      user: item.role, // Adjust these field names based on your actual data structure
      message: item.content,
    }));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
console.log(final_convo);
const conversationData = [
  {
    user: "User 1",
    message:
      "That's impressive, User 2! I see you're into creating 3D models and animations. I've worked on some tech projects myself, mainly in Python and Java. Have you ever used these languages in your work? Also, I'm curious about the UIST Conference. What was your experience like?",
  },
  {
    user: "User 2",
    message:
      "Yes, I've used Python for some of my projects, especially when dealing with data manipulation for 3D modeling. The UIST Conference was a great experience, I got to present my work and connect with other innovators. It seems like we both enjoy creating and innovating. Have you ever considered using your skills in Python and AWS for 3D modeling or animation?",
  },
  {
    user: "User 1",
    message:
      "That's great! I've not yet explored 3D modeling or animation with Python and AWS, but it sounds intriguing. I've mostly used Python for data science projects and AWS for cloud-based solutions. However, I'm always open to learning and applying my skills in new areas. It's fascinating how our fields can intersect. Have you ever incorporated elements of IoT in your work?",
  },
  {
    user: "User 2",
    message:
      "I haven't had the chance to work directly with IoT, but I see its potential, especially in the context of robotic materials. Your experience with IoT could be valuable in exploring how these materials could interact with other devices or systems. It's exciting to think about the possibilities. Do you see any potential applications of your IoT experience in the context of robotic materials?",
  },
  {
    user: "User 1",
    message:
      "Absolutely, the intersection of IoT and robotic materials could open up a world of possibilities. For instance, IoT could enable real-time data collection from robotic materials, allowing for dynamic adjustments based on environmental conditions. This could be particularly useful in industries like construction or manufacturing. It's indeed exciting to think about the potential applications. It seems we have a lot to learn from each other's experiences.",
  },
  {
    user: "User 2",
    message:
      "I completely agree. Your insights into IoT could greatly enhance the functionality and adaptability of robotic materials. And your experience with data science could help in analyzing the data collected. This could lead to more efficient and intelligent systems. I'm excited about the potential of our combined skills. Let's definitely keep this conversation going.",
  },
  {
    user: "User 1",
    message:
      "Absolutely, User 2! The combination of our skills could indeed lead to some innovative solutions. I'm also excited about the potential of our collaboration. Your work with robotic materials and 3D modeling could provide a unique perspective to my experience with IoT and data science. I look forward to our future discussions and potential collaborations.",
  },
  {
    user: "User 2",
    message:
      "I'm equally excited, User 1! Your experience with IoT, data science, and cloud solutions could bring a fresh perspective to my work with robotic materials and 3D modeling. I believe",
  },
];
// Function to create and append chat bubbles
function appendMessage(user, message) {
  const chatContainer = document.getElementById("chat-container");
  const messageDiv = document.createElement("div");
  messageDiv.className =
    user === "User 1" ? "message user-message" : "message bot-message";
  messageDiv.textContent = `${user}: ${message}`;
  chatContainer.appendChild(messageDiv);
}

// Function to add the "Connect" or "Schedule a Meeting" box
function addConnectBox() {
  const chatContainer = document.getElementById("chat-container");
  const connectBox = document.createElement("div");
  connectBox.className = "connect-box";
  connectBox.innerHTML = `
        <p>Do you want to connect and talk to this person more?</p>
        <button id="connect-button">Connect</button>
        <button id="schedule-button">Schedule a Meeting</button>
    `;
  chatContainer.appendChild(connectBox);

  // Attach event listeners for the "Connect" and "Schedule a Meeting" buttons
  const connectButton = document.getElementById("connect-button");
  const scheduleButton = document.getElementById("schedule-button");

  connectButton.addEventListener("click", () => {
    alert("Connecting..."); // Replace this with your logic for connecting
  });

  scheduleButton.addEventListener("click", () => {
    alert("Scheduling a meeting..."); // Replace this with your logic for scheduling a meeting
  });
}

// Populate the chat with the conversation data
window.onload = function () {
  for (const { user, message } of conversationData) {
    appendMessage(user, message);
  }

  // Add the "Connect" or "Schedule a Meeting" box at the end
  addConnectBox();
};
