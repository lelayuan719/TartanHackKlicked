const infoMap = {
    "Perfectionism": {
        "name": "Perfectionism",
        "title": "Give yourself permission to make mistakes.",
        "body": "This does not mean that you should aim low, but rather that you should assess the situation, to determine what performance will be good enough for you to achieve what you want and need to achieve."
        // "links": 
    },
    "Anxiety": {
        "name": "Anxiety",
        "title": "Get enough rest.",
        "body": "For example, if you need to work hard on tasks that require deep concentration, make sure to take enough breaks that you don't get burnt out. To encourage yourself to do this, you can remind yourself that even if getting rest can reduce your productivity in the short term, it will often be much better for you in the long term, both in terms of your productivity and in terms of your wellbeing."
        // "links": 
    },
    "Fear": {
        "name": "Fear of failure",
        "title": "Question your fears.",
        "body": "For example, you can ask yourself “am I worrying about something that’s unlikely to actually happen?” or “so what if this happens?”. When doing this, you might benefit from using self-distancing techniques, for example by asking yourself “is there any reason why you should actually care so much about this issue?”, or by considering what advice you would give to a friend if they were in your situation."
        // "links":
    },
    "Avoidance": {
        "name": "Avoidance",
        "title": "Start with a tiny step.",
        "body": "For example, commit to writing only a single sentence or exercising for only 2 minutes, while giving yourself permission to stop after taking that tiny first step, to reduce the pressure associated with getting started."
        // "links": 
    },
    "Low": {
        "name":  "Low self-esteem",
        "title": "Develop self-compassion.",
        "body": "Specifically, you should develop the three components of self-compassion: self-kindness, which involves being nice to yourself, common humanity, which involves recognizing that everyone experiences challenges, and mindfulness, which involves accepting your emotions in a non-judgmental manner."
        // "links": 
    },
    "Motivation": {
        "name":"Motivation",
        "title": "Acknowledge and reward your progress.",
        "body": "For example, you can treat yourself to some pleasant treat once you’ve managed to achieve your study goals for a week in a row."
        // "links": 
    }    
}

// class information {
//     constructor(infoName, infoTitle, infoBody) {

//         this.name = infoName;

//         this.title =  infoTitle;

//         this.body = infoBody; 
        
//         this.element = null;

//         console.log(this);

//         // this.element = null;

//     }

//     updateElement(){
//         console.log("this is" + this);
//         const nameElement = this.element.querySelector('.name');
//         const titleElement = this.element.querySelector('.title');
//         const bodyElement = this.element.querySelector('.body');
        

//         nameElement.innerText = infoMap[this.name]['name'];
//         titleElement.innerText = infoMap[this.name]['title'];
//         bodyElement.innterText = infoMap[this.name]['body'];
        
//     }
    
// }

// function createElement(info) {
//     const template = document.querySelector('#info-template');
//     const clone = template.content.cloneNode(true);
    
//     info.element = clone.querySelector('.infoBody');
//     const container = document.querySelector('.info-main-content');
//     container.appendChild(info.element);
  
//     info.updateElement();
//   }
  
//   function addNewProduct(infoName, infoTitle, infoBody) {
//     const info = new information(infoName, infoTitle, infoBody);
//     // cart.push(roll);
//   //   productSet.add(roll);
//     createElement(info);
//   }

function retrieveFromLocalStorage() {
    const choicesString = localStorage.getItem('storedChoices');
    choices = JSON.parse(choicesString);
    if (choices.Perfectionism == true){
            nameElement = document.querySelector('#name1');
            titleElement = document.querySelector('#title1');
            bodyElement = document.querySelector('#body1');
            nameElement.innerText = infoMap["Perfectionism"]["name"];
            titleElement.innerText = infoMap["Perfectionism"]["title"];
            bodyElement.innerText = infoMap["Perfectionism"]["body"];
                
        }else{
            const element = document.querySelector('.infoBody1');
            element.remove();
        }
    if (choices.Anxiety == true){
        nameElement = document.querySelector('#name2');
        titleElement = document.querySelector('#title2');
        bodyElement = document.querySelector('#body2');
        nameElement.innerText = infoMap["Anxiety"]["name"];
        titleElement.innerText = infoMap["Anxiety"]["title"];
        bodyElement.innerText = infoMap["Anxiety"]["body"];
            
    }else{
        const element = document.querySelector('.infoBody2');
        element.remove();
    }
    if (choices.Fear == true){
        nameElement = document.querySelector('#name3');
        titleElement = document.querySelector('#title3');
        bodyElement = document.querySelector('#body3');
        nameElement.innerText = infoMap["Fear"]["name"];
        titleElement.innerText = infoMap["Fear"]["title"];
        bodyElement.innerText = infoMap["Fear"]["body"];
            
    }else{
        bodyBlock = document.querySelector('.infoBody3');
        bodyBlock.remove();
    }
    if (choices.Avoidance == true){
        nameElement = document.querySelector('#name4');
        titleElement = document.querySelector('#title4');
        bodyElement = document.querySelector('#body4');
        nameElement.innerText = infoMap["Avoidance"]["name"];
        titleElement.innerText = infoMap["Avoidance"]["title"];
        bodyElement.innerText = infoMap["Avoidance"]["body"];
            
    }else{
        bodyBlock = document.querySelector('.infoBody4');
        bodyBlock.remove();
    }
    if (choices.Low == true){
        nameElement = document.querySelector('#name5');
        titleElement = document.querySelector('#title5');
        bodyElement = document.querySelector('#body5');
        nameElement.innerText = infoMap["Low"]["name"];
        titleElement.innerText = infoMap["Low"]["title"];
        bodyElement.innerText = infoMap["Low"]["body"];
            
    }else{
        bodyBlock = document.querySelector('.infoBody5');
        bodyBlock.remove();}

    if (choices.Motivation == true){
        nameElement = document.querySelector('#name6');
        titleElement = document.querySelector('#title6');
        bodyElement = document.querySelector('#body6');
        nameElement.innerText = infoMap["Motivation"]["name"];
        titleElement.innerText = infoMap["Motivation"]["title"];
        bodyElement.innerText = infoMap["Motivation"]["body"];
            
    }else{
        bodyBlock = document.querySelector('.infoBody6');
        bodyBlock.remove();}
        
    }
retrieveFromLocalStorage();
