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

// Populate the chat with the conversation data
window.onload = function () {
    for (const { user, message } of conversationData) {
        appendMessage(user, message);
    }
};