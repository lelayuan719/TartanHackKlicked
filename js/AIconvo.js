// Initialize Firebase (Make sure to replace with your Firebase config)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    "type": "service_account",
    "project_id": "klicked-c967c",
    "private_key_id": "1ff14227b761b1ed0ba50a606b9f82d97fb5fe69",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMhPFOCbYhfly1\nMOJJ3X1ied5s5eKtanDogWgCGT6YdSzBIJF7NcX4D3bP1OIpnmQPDQZznMhd4SGH\nP9FIJQV2WeRVIlTqeblqmCLDRu6pE6hy4L3EstxMeN+Sal5KLTvYz7Eo1MWsKI6V\nN87MBOEgJpCloWwx9AckQ2JZpxBK4Rfc0HaH5GVimJPN55bBoAPR40RDpzqWtaGo\nkWEIwaqCZOkNKa6fZUDJi5XTSy7Uk2HbZigywlyufXmb5HsU72hUtu6G7aAXzL/7\nWxHfr7Lxrwvkh0uqEqjTAqLHMU/C1sy9cdBhwUl6pUCPuR8UCiGieM/OgeJ917er\nIl3zyrhNAgMBAAECggEAG7ry1PfwH/54J4EnTYiglZeclvtcjtLd2Eijh5VQrW9F\n0DHQR/p0izvdijR9LdNyEbBcbZSWflQmLaZzg+qxIOjzUq/C/7/dahySqhOWDIrD\nzj+2u1LdF+lTtxCBFGGpua3/gV/IJZ2iJ41XlsYamDdiaXLHrsY9qacRUMKcLOq2\nMdKLiuIiKqnVxpruhnUt3WiZzcNh+2hLsFNk4p/hnZ9ATzcaSkKcIcJ7qUKfVKoO\nIL5rfRX7p4TFV+8uF8jNVKApBPoJpJN5Ii/rBZhOi/uSwYkDyAWD0EFtJIuiA+ig\n5y+4h5e06Eb8Lbqwn+JMBSKVcQZFlmqremDt8FIdwQKBgQDsmk425MiDwNSIVw15\n2RJUaYXawohsZT8y8ZmVPH4fBygbVbl2tp3VigqJhrzKms3D8KXDfCdtHOK844jh\nOf39nI1F1MohcIVSnaPCUcsoURtlUUd4imqRlNMgTAf3is33cynDQbafGkNLNzvP\nimPYHoUJ9kxEkPxO8XcRsbPTBQKBgQDdSUlW7nvJSzjwxiwv4e+R8pQsMARAI+oK\nq7N7plQh0q2B/fsJQaijpWn1qYtvmNxLuswGlBtYvL+lXT9d9ivApTiI6klVF7f3\nBul2Ov+tBG0ynUgVeHejYNYaTqhR859eFRTWHnqpdH6jrem9K2qY0K7YHvk2/5Nj\ngmaqMsLiqQKBgQCqyshi/8tusCe7M3va1UNSA8pIG9z2wi9YyuYewEgahcQB12PF\nuhU9LCRnGgf2CME4C+LctiaPsSZLS8RnMMGT7Qpdujke4mabOIgZoYmRVNr9zCpX\nbTN4W4H78mZd3qjHUy52cF0vhHnHNdvK+Q8R1xYaFtz/Mdmv8sYM08YHMQKBgQCa\nqvG++Du/S3uGFw2lficD/OiCJiGibzfTs4VlBLHDXkz2Ef6XzrO/hguUsKeMHezE\nZdDbPEQM9wiA3bc/xqN4KENmt1MATe7Ak600fTJdzT1B5lsO3r/IixO7GYVemoim\nqteAfZdAv/MQFqvME/+SxjGfT67jOSncoLV/erFq2QKBgFTLiuwYM6iRfIKft+GG\nuloRErs4LpJQa1HQw6cohNeM2MmCxIVubq79xpjMxqh1o9r9oLRipdN28cLKEmQv\nqKpFLoltgicrmiSf/Y8+5o7A6sKwkY2stO6qjUouZvdN9kL11BwNsSLc0bebPTRY\nRtaVX60tg+hVazfDUG1QaBmw\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-cfue9@klicked-c967c.iam.gserviceaccount.com",
    "client_id": "112901178499606046270",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cfue9%40klicked-c967c.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

const docRef = db.collection("users_conversation").doc("8BwN6PHIgt3ZGr2VDcrP");

docRef.get().then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});









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