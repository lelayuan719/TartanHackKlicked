// Sample conversation data
const conversationData = [
    { user: "User 1", message: "Hello there!" },
    { user: "User 2", message: "Hi! How can I help you?" },
    { user: "User 1", message: "I have a question about your product." },
    // Add more messages here...
];

// Function to create and append chat bubbles
function appendMessage(user, message) {
    const chatContainer = document.getElementById("chat-container");
    const messageDiv = document.createElement("div");
    messageDiv.className = user === "User 1" ? "message user-message" : "message bot-message";
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