from formatted_main_functions import init_data, init_conversation, generate_conversation

# flask app
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/submit-user-info', methods=['POST'])
def submit_user_info():
    # Get data sent from the frontend
    user_info = request.json
    print("Received user info:", user_info)

    # You can process the data as needed and then return a response
    return jsonify({"message": "User info received successfully!"}), 200


if __name__ == '__main__':
    app.run(debug=True)


# Step 1: Initialize Data
u_info_1_ai = "I am a software developer."
u_info_2_ai = "I am a data scientist."
client_1, client_2, messages_client_1, messages_client_2, MODEL = init_data(
    u_info_1_ai, u_info_2_ai)

# Step 2: Start the Conversation
init_conversation(client_1, client_2, messages_client_1,
                  messages_client_2, MODEL)

# Step 3: Continue the Conversation
# Assuming you want 4 more exchanges after the initial one
generate_conversation(1, client_1, client_2,
                      messages_client_1, messages_client_2, MODEL)
