var usersAnswers = [];
var currentAnswer;
var nextActivated = false;
var startButton = document.getElementById('start');
var nextButton = document.createElement("button");

startButton.addEventListener("click", function(){
    var parent = this.parentNode;
    parent.removeChild(this);
    parent.appendChild( composeQuestion() );
}, false);

listenForSelection(document);

nextButton.appendChild(document.createTextNode(" Next "));

nextButton.addEventListener("click", function(){ console.log("Next")}, false);



function composeQuestion(){
    var qu = Questions;
    var questionBox = qu.questionBox.div;
    questionBox.id = qu.questionBox.id;
    qu.insertTitleInto(questionBox);
    qu.insertChoicesInto(questionBox);
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
