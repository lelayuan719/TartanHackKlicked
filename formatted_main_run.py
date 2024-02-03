from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import firestore, credentials
from formatted_main_functions import init_data, generate_conversation


# Use the application default credentials.
cred = credentials.Certificate(
    "C:\\Users\\aksha\\OneDrive\\Desktop\\projects\\TartanHacks\\mainRun\\klicked-key.json")
firebase_admin.initialize_app(cred)

# firebase_admin.initialize_app(cred)
db = firestore.client()
app = Flask(__name__)


def add_data_to_firestore(collection, data):
    # Add a new document
    doc_ref = db.collection(collection).document()
    doc_ref.set(data)
    return doc_ref.id


@app.route('/submit-user-info', methods=['POST'])
def submit_user_info():
    user_info = request.json
    uid = add_data_to_firestore('users_quiz', user_info)
    return jsonify({"message": "User info received successfully!", "uid": uid}), 200


@app.route('/start-conversation', methods=['POST'])
def start_conversation():
    user_info_1 = request.json.get('user_info_1')
    user_info_2 = request.json.get('user_info_2')

    client_1, client_2, messages_client_1, messages_client_2, MODEL = init_data(
        user_info_1, user_info_2)

    generate_conversation(2, client_1, client_2,
                          messages_client_1, messages_client_2, MODEL)

    conversation_result = {
        "messages_client_1": messages_client_1,
        "messages_client_2": messages_client_2
    }

    conversation_id = add_data_to_firestore(
        'users_conversation', conversation_result)

    return jsonify({"conversation_id": conversation_id}), 200


if __name__ == '__main__':
    app.run(debug=True)


# from formatted_main_functions import init_data, init_conversation, generate_conversation

# # flask app
# from flask import Flask, request, jsonify
# import firebase_admin
# from firebase_admin import firestore


# def add_conversation_to_firestore(data):  # data format: {name, message}
#     # Add a new document
#     doc_ref = db.collection(u'users_conversation').document()
#     doc_ref.set(data)

#     print(u'Added document with ID: {}'.format(doc_ref.id))


# def add_quiz_answer_to_firestore(data):  # data format: {name,question, answer}
#     # Add a new document
#     doc_ref = db.collection(u'users_quiz_answers').document()
#     doc_ref.set(data)

#     print(u'Added document with ID: {}'.format(doc_ref.id))


# # Application Default credentials are automatically created.
# app = firebase_admin.initialize_app()
# db = firestore.client()
# app = Flask(__name__)


# @app.route('/submit-user-info', methods=['POST'])
# def submit_user_info():
#     # Get data sent from the frontend
#     user_info = request.json
#     print("Received user info:", user_info)

#     # You can process the data as needed and then return a response
#     return jsonify({"message": "User info received successfully!"}), 200


# @app.route('/start-conversation', methods=['POST'])
# def start_conversation():
#     # # Step 1: Initialize Data
#     # u_info_1_ai = "I am a software developer."
#     # u_info_2_ai = "I am a data scientist."
#     # get user 1 info from firestore
#     user_info_1= db.collection("users_quiz_answers").document("SF")

# doc = doc_ref.get()
# if doc.exists:
#     print(f"Document data: {doc.to_dict()}")
# else:
#     print("No such document!")
#     # get user 2 info from firestore
#     client_1, client_2, messages_client_1, messages_client_2, MODEL = init_data(
#         u_info_1_ai, u_info_2_ai)

#     # Step 2: Continue the Conversation
#     # Assuming you want 4 more exchanges after the initial one
#     generate_conversation(1, client_1, client_2,
#                           messages_client_1, messages_client_2, MODEL)


# if __name__ == '__main__':
#     app.run(debug=True)


# # Step 1: Initialize Data
# u_info_1_ai = "I am a software developer."
# u_info_2_ai = "I am a data scientist."
# client_1, client_2, messages_client_1, messages_client_2, MODEL = init_data(
#     u_info_1_ai, u_info_2_ai)

# # Step 2: Start the Conversation
# # init_conversation(client_1, client_2, messages_client_1,
# #                   messages_client_2, MODEL)

# # Step 3: Continue the Conversation
# # Assuming you want 4 more exchanges after the initial one
# generate_conversation(1, client_1, client_2,
#                       messages_client_1, messages_client_2, MODEL)
