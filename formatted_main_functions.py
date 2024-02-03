import time
from openai import OpenAI
import re

messages_client_1 = []
messages_client_2 = []
MODEL = ""


def format_response(response):
    pattern = r".*: "
    return re.sub(pattern, "", response)


def generate_prompt(messages, exchange_count):
    base_prompt = "Behave as human-like as possible. In your response, share some information about yourself. Limit your response to 100-120 words."
    if exchange_count < 5:
        return f"{base_prompt} Continue the conversation based on the previous exchanges. This is exchange number {exchange_count} of 5."
    else:
        return f"{base_prompt} This is the final exchange of our conversation. Please provide a concluding response, summarizing our discussion and ending the conversation on a positive note."


# TODO: quiz to AI profile
def init_data(u_info_1_ai, u_info_2_ai):
    client_profile = 'sk-123'

    client_1 = OpenAI(
        api_key="sk-1233")  # akshay key
    client_2 = OpenAI(
        api_key="sk-12333")  # akshay 2 key
    # Add AI profiles out here
    MODEL = "gpt-4-0613"
    user_info_1 = 'User 1 Info:\
    1. Aspiring Entrepreneur with experience in early stages and currently working on disrupting the productivity environment. \
    2. Experienced python developer, android programming using Java core.\
    3. worked on data science projects in various fields using tools like pandas, numpy, seaborn, matplotlib to give meaningful insights to Muzik 247 and Texonic. \
    4. Have created projects using Amazon Web services (AWS). \
    5. Have a keen interest in IOT and worked with a company called Kocoatrait in chennai. \
    6. Built projects on django and flask for a Tyre retailer called SH Tyrestore.'
    user_info_2 = 'User 2 Info: Created a semi-modular material, consisting of multiple independent columns, each comprising seventeen double-jointed cells. \
    ● Created renders / 3D Models / Animations of the real - world applications of the robotic materials using Rhino 7, V-Ray, & Enscape \
    ● Submitted & Accepted into UIST Conference 2023'

    messages_client_1 = [{"role": "system", "content": "You are User 1. Answer within 100 tokens: YOU ARE THE PERSON DESCRIBED. | fully immerse yourself as another human and have a conversation | as User 1 You are seeking common points to connect with other humans. \
            You will have all the relevant information of the user and you will be able to ask questions \
                to the other assistant to find common points to connect with the user. \
                    Use general domain knowledge and dont move further than the knowledge given \
                        to you unless its general knowledge.\n"+user_info_1+"\n---Having a conversation with---\n"+user_info_2},]
    # {"role": "user", "content": user_info_1+"\n---Having a conversation with---\n"+user_info_2}]

    messages_client_2 = [{"role": "system", "content": "You are User 2. Answer within 100 tokens: YOU ARE THE PERSON DESCRIBED. You are a human talking to another human who wants to connect with you. try to find common places of interest based on the user info given to you \
        you will be able to ask questions to the other assistant to find common points to connect with the user. Use general domain \
            knowledge and dont move further than the knowledge given to you unless its general knowledge. Your main goal is to understand how this person can add value to your life or how you can help this person."},
                         {"role": "user", "content": user_info_2+"\n---Start the conversation with---\n"+user_info_1}]
    return client_1, client_2, messages_client_1, messages_client_2, MODEL


def continue_conversation(client, messages_sender, message_receiver, exchange_count, model):
    if exchange_count <= 5:
        # Get response from client
        response = client.chat.completions.create(
            model=model, messages=messages_sender, temperature=0, max_tokens=100)
        new_message = {"role": "assistant", "content": format_response(
            response.choices[0].message.content)}

        # Append the new message to sender's messages and add a corresponding user message to receiver's messages
        messages_sender.append(new_message)
        message_receiver.append(
            {"role": "user", "content": new_message["content"]})
    else:
        print("Conversation concluded.")


# initial conversation
def init_conversation(client_1, client_2, messages_client_1, messages_client_2, MODEL):
    exchange_count = 1
    continue_conversation(client_1, messages_client_1,
                          messages_client_2, exchange_count, MODEL)
    continue_conversation(client_2, messages_client_2,
                          messages_client_1, exchange_count, MODEL)


# print("Conversation from client_1's perspective:")
# for message in messages_client_1:
#     print(f"{message['role']}: {message['content']}")

# Continue the conversation with more responses, updating both message lists accordingly


# print("Conversation from client_1's perspective:")
# for message in messages_client_1:
#     print(f"{message['role']}: {message['content']}")

# Increase the exchange count and continue the conversation
def generate_conversation(count_of, client_1, client_2, messages_client_1, messages_client_2, MODEL):
    init_conversation(client_1, client_2, messages_client_1,
                      messages_client_2, MODEL)
    for _ in range(count_of):
        exchange_count += 1
        continue_conversation(client_1, messages_client_1,
                              messages_client_2, exchange_count, MODEL)
        continue_conversation(client_2, messages_client_2,
                              messages_client_1, exchange_count, MODEL)
        exchange_count += 1
        time.sleep(2)
        continue_conversation(client_1, messages_client_1,
                              messages_client_2, exchange_count, MODEL)
        continue_conversation(client_2, messages_client_2,
                              messages_client_1, exchange_count, MODEL)
        time.sleep(2)

    # Print the final conversation
    print("Final Conversation:")
    for message in messages_client_1:
        print(f"{message['role']}: {message['content']}")
