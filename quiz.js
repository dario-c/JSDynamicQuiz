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
    addListenersTo(questionBox);
    return questionBox;
}

function addListenersTo(element){

    element.addEventListener("click", function(event){
        if(event.target.name === "choices"){ checkValue(this) }
    }, false)
}

function checkValue(it){

    var allChoices = it.getElementsByTagName("input");
    for(var i = 0; i < allChoices.length; i++){
        if (allChoices[i].checked){ console.log(allChoices[i].value)}
    }

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
    }
}

function createEachChoice(choice, i){
    var newNode = document.createElement("label");
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "choices";
    input.value = i;
    newNode.appendChild(input);
    newNode.appendChild(document.createTextNode(choice));
    return newNode;
}


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
