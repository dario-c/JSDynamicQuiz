var questions = [
    {
    question: "Who is the Prime Minister of Germany?",
    choices: ["Georg Bushstein", "Zapatitos", "Angela Merkel"],
    correct: 2
    },{
    question: "What do they eat in Germany",
    choices: ["Tapas!", "Schnitzel", "Babies' souls"],
    correct: 2
    },{
    question: "What do they drink in Germany",
    choices: ["Wine", "Water", "Anythingschorle"],
    correct: 2
    }
];

var startButton = document.getElementById('start');

startButton.addEventListener("click", function(){
    var parent = this.parentNode;
    parent.removeChild(this);

    parent.appendChild( composeQuestion() );
}, false);


function composeQuestion(){
    var questionBox = document.createElement('div');
    questionBox.id = 'question';
    insertTitleInto(questionBox);
    insertChoicesInto(questionBox);
    return questionBox;
}

function insertTitleInto(parent) {
    var questionTitle = document.createElement("h2");
    var textNode = document.createTextNode(questions[0].question);
    questionTitle.appendChild(textNode);
    parent.appendChild(questionTitle);
}

function insertChoicesInto(parent){
    var all = questions[0].choices;
    for(var i = 0; i < all.length; i++){
        parent.appendChild(createEachChoice(all[i], i));

        parent.appendChild(document.createTextNode(all[i]));
        parent.appendChild(document.createElement("br"));
    }
}

function createEachChoice(choice, i){
    var newNode = document.createElement("input");
    newNode.type = "radio";
    newNode.name = "choices";
    newNode.value = i;

    return newNode;
}
