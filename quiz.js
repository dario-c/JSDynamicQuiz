var usersAnswers = [];
var currentAnswer;
var level = 0;
var nextActivated = false;
var startButton = document.getElementById('start');
var nextButton = document.createElement("button");

startButton.addEventListener("click", function(){
    var parent = this.parentNode;
    parent.removeChild(this);
    var div = composeQuestion();
    parent.insertBefore( div, document.scripts[0] );
}, false);

listenForSelection(document);

nextButton.appendChild(document.createTextNode(" Next "));

nextButton.addEventListener("click", function(){
    level++;
    usersAnswers[level] = currentAnswer;
    currentAnswer = undefined;
    nextActivated = false;
    console.log(usersAnswers);
    var parent = this.parentNode;
    parent.removeChild(this);
    parent.removeChild(document.getElementById('question'));
    var div = composeQuestion();
    parent.insertBefore( div, document.scripts[0] );
}, false);



function composeQuestion(){
    var qu = Questions;
    questionBox = document.createElement("div");
    questionBox.id = "question";
    qu.insertTitleInto(questionBox, level);
    qu.insertChoicesInto(questionBox, level);
    return questionBox;
}

function listenForSelection(question){
    question.addEventListener("click", function(event){
        if(event.target.name === "choices"){
            checkValue(this);
            if(!nextActivated){ addNextButton(); }
        }
    }, false)}

function checkValue(it){
    var allChoices = it.getElementsByTagName("input");
    for(var i = 0; i < allChoices.length; i++){
        if (allChoices[i].checked){
            currentAnswer = allChoices[i].value;
            }
    }
}

function addNextButton(){
    var questionBox = document.getElementById("question").parentNode;
    questionBox.appendChild(nextButton);
    nextActivated = true;

}














var triviaQuestions = [
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
