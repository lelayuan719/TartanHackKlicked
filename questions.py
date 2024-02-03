import random

mapping = dict()

def create_mapping(filename):
    with open(filename) as f:
        for i,line in enumerate(f):
            line = line.strip()
            mapping[i] = line

def random_question():
    empathy_question = mapping[random.randint(0, 1)]
    self_image_question = mapping[random.randint(1, 4)]
    relationship_values_question = mapping[random.randint(4, 6)]
    social_communication_preferences_question = mapping[random.randint(6,7)]
    lifestyle_and_values_question = mapping[random.randint(7,14)]
    apology_and_assertiveness_question = mapping[random.randint(14, 17)]
    sense_of_humor_question = mapping[random.randint(17, 19)]
    future_planning_question = mapping[random.randint(19, 21)]
    rule_adherence_question = mapping[random.randint(21, 23)]
    self_perception_question = mapping[random.randint(23, 29)]






if __name__ == "__main__":
    create_mapping("questions.txt")